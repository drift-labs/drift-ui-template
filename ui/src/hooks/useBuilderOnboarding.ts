import { useState, useEffect, useCallback } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDriftStore } from '../stores/DriftStore';
import { getRevenueShareEscrowAccountPublicKey } from '@drift-labs/sdk';

export interface OnboardingStatus {
  isLoading: boolean;
  hasRevenueShareEscrow: boolean;
  isBuilderApproved: boolean;
  isOnboardingComplete: boolean;
  error: string | null;
}

export interface OnboardingActions {
  checkOnboardingStatus: () => Promise<void>;
  initializeRevenueShareEscrow: (numOrders?: number) => Promise<string>;
  approveBuilder: (maxFeeTenthBps?: number) => Promise<string>;
  completeOnboarding: (numOrders?: number, maxFeeTenthBps?: number) => Promise<void>;
}

const BUILDER_AUTHORITY = process.env.NEXT_PUBLIC_BUILDER_AUTHORITY!;
const DEFAULT_MAX_FEE_TENTH_BPS = parseInt(
  process.env.NEXT_PUBLIC_BUILDER_MAX_FEE_TENTH_BPS || '200'
);
const DEFAULT_NUM_ORDERS = 16;

export function useBuilderOnboarding(): OnboardingStatus & OnboardingActions {
  const { publicKey, connected } = useWallet();
  const { drift } = useDriftStore();
  
  const [status, setStatus] = useState<OnboardingStatus>({
    isLoading: false,
    hasRevenueShareEscrow: false,
    isBuilderApproved: false,
    isOnboardingComplete: false,
    error: null,
  });

  /**
   * Check if user has completed the onboarding flow
   */
  const checkOnboardingStatus = useCallback(async () => {
    if (!drift || !publicKey || !connected) {
      setStatus(prev => ({
        ...prev,
        hasRevenueShareEscrow: false,
        isBuilderApproved: false,
        isOnboardingComplete: false,
      }));
      return;
    }

    setStatus(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const builderAuthorityPubkey = new PublicKey(BUILDER_AUTHORITY);
      
      // Check if Revenue Share Escrow exists
      let hasEscrow = false;
      let isApproved = false;

      try {
        // Try to fetch the Revenue Share Escrow account
        const escrowAccountPubkey = getRevenueShareEscrowAccountPublicKey(
          drift.driftClient.program.programId,
          publicKey
        );
        
        const accountInfo = await drift.driftClient.connection.getAccountInfo(
          escrowAccountPubkey,
          'confirmed'
        );
        
        if (accountInfo && accountInfo.data) {
          // Decode the account data
          const escrowAccount = drift.driftClient.program.account.revenueShareEscrow.coder.accounts.decode(
            'RevenueShareEscrow',
            accountInfo.data
          );
          
          hasEscrow = true;
          
          // Check if our builder is in the approved builders list
          const approvedBuilders = escrowAccount.approvedBuilders || [];
          console.log('Approved builders:', approvedBuilders);
          console.log('Looking for builder authority:', builderAuthorityPubkey.toString());
          
          isApproved = approvedBuilders.some((builder: { authority?: PublicKey | string }) => {
            // Handle both PublicKey objects and string representations
            const builderAuthStr = typeof builder.authority === 'string' 
              ? builder.authority 
              : builder.authority?.toString();
            return builderAuthStr === builderAuthorityPubkey.toString();
          });
        }
      } catch (error) {
        // Account doesn't exist or other error
        console.log('Revenue share escrow not found or error:', error);
        hasEscrow = false;
        isApproved = false;
      }

      const isComplete = hasEscrow && isApproved;

      setStatus(prev => ({
        ...prev,
        isLoading: false,
        hasRevenueShareEscrow: hasEscrow,
        isBuilderApproved: isApproved,
        isOnboardingComplete: isComplete,
        error: null,
      }));
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      setStatus(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }));
    }
  }, [drift, publicKey, connected]);

  /**
   * Initialize Revenue Share Escrow
   */
  const initializeRevenueShareEscrow = useCallback(async (numOrders = DEFAULT_NUM_ORDERS): Promise<string> => {
    if (!drift || !publicKey) {
      throw new Error('Drift client or wallet not connected');
    }

    setStatus(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const txSig = await drift.driftClient.initializeRevenueShareEscrow(
        publicKey,
        numOrders
      );

      // Update status
      await checkOnboardingStatus();

      return txSig;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to initialize revenue share escrow';
      setStatus(prev => ({ ...prev, isLoading: false, error: errorMessage }));
      throw error;
    }
  }, [drift, publicKey, checkOnboardingStatus]);

  /**
   * Approve builder
   */
  const approveBuilder = useCallback(async (maxFeeTenthBps = DEFAULT_MAX_FEE_TENTH_BPS): Promise<string> => {
    if (!drift || !publicKey) {
      throw new Error('Drift client or wallet not connected');
    }

    setStatus(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const builderAuthorityPubkey = new PublicKey(BUILDER_AUTHORITY);
      
      const txSig = await drift.driftClient.changeApprovedBuilder(
        builderAuthorityPubkey,
        maxFeeTenthBps,
        true // approve = true
      );

      // Update status
      await checkOnboardingStatus();

      return txSig;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to approve builder';
      setStatus(prev => ({ ...prev, isLoading: false, error: errorMessage }));
      throw error;
    }
  }, [drift, publicKey, checkOnboardingStatus]);

  /**
   * Complete full onboarding flow
   */
  const completeOnboarding = useCallback(async (
    numOrders = DEFAULT_NUM_ORDERS,
    maxFeeTenthBps = DEFAULT_MAX_FEE_TENTH_BPS
  ): Promise<void> => {
    if (!status.hasRevenueShareEscrow) {
      await initializeRevenueShareEscrow(numOrders);
    }

    if (!status.isBuilderApproved) {
      await approveBuilder(maxFeeTenthBps);
    }
  }, [status.hasRevenueShareEscrow, status.isBuilderApproved, initializeRevenueShareEscrow, approveBuilder]);

  // Check status when wallet or drift client changes
  useEffect(() => {
    checkOnboardingStatus();
  }, [checkOnboardingStatus]);

  return {
    ...status,
    checkOnboardingStatus,
    initializeRevenueShareEscrow,
    approveBuilder,
    completeOnboarding,
  };
}
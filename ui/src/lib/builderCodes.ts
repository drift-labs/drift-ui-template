import { PublicKey } from '@solana/web3.js';
import { BN } from '@drift-labs/sdk';
import { useBuilderOnboarding } from '../hooks/useBuilderOnboarding';

export interface BuilderCodeOptions {
  builderIdx: number;
  builderFeeTenthBps: number;
}

export interface SwiftOrderBuilderOptions {
  builderIdx?: number;
  builderFeeTenthBps?: number;
}

/**
 * Builder Code utility functions for integrating builder fees with order placement
 */
export class BuilderCodeUtils {
  private static readonly BUILDER_AUTHORITY = process.env.NEXT_PUBLIC_BUILDER_AUTHORITY!;
  private static readonly DEFAULT_BUILDER_FEE_TENTH_BPS = parseInt(
    process.env.NEXT_PUBLIC_BUILDER_MAX_FEE_TENTH_BPS || '200'
  );
  private static readonly DEFAULT_BUILDER_FEE_FOR_ORDERS = 50; // 5 bps default fee per order

  /**
   * Check if builder codes should be applied to an order
   * @param isSwiftOrder Whether this is a Swift order
   * @param isOnboardingComplete Whether user has completed builder onboarding
   * @returns Whether to apply builder codes
   */
  static shouldApplyBuilderCodes(
    isSwiftOrder: boolean,
    isOnboardingComplete: boolean
  ): boolean {
    return isSwiftOrder && isOnboardingComplete;
  }

  /**
   * Get builder code options for an order
   * @param userApprovedBuilders List of builders approved by the user
   * @param customFee Custom fee for this order (optional)
   * @returns Builder code options or null if not applicable
   */
  static getBuilderCodeOptions(
    userApprovedBuilders: Array<{ authority: PublicKey; maxFeeTenthBps: number }>,
    customFee?: number
  ): BuilderCodeOptions | null {
    const builderAuthority = new PublicKey(this.BUILDER_AUTHORITY);
    
    // Find our builder in the user's approved builders list
    const builderIndex = userApprovedBuilders.findIndex(
      (builder) => builder.authority.equals(builderAuthority)
    );

    if (builderIndex === -1) {
      console.warn('Builder not found in user approved builders list');
      return null;
    }

    const approvedBuilder = userApprovedBuilders[builderIndex];
    const requestedFee = customFee ?? this.DEFAULT_BUILDER_FEE_FOR_ORDERS;

    // Ensure requested fee doesn't exceed user's approved maximum
    if (requestedFee > approvedBuilder.maxFeeTenthBps) {
      console.warn(
        `Requested fee (${requestedFee}) exceeds user approved maximum (${approvedBuilder.maxFeeTenthBps})`
      );
      return null;
    }

    return {
      builderIdx: builderIndex,
      builderFeeTenthBps: requestedFee,
    };
  }

  /**
   * Calculate the actual fee amount in USD for display purposes
   * @param orderSizeUsd Order size in USD
   * @param feeTenthBps Fee in tenth of basis points
   * @returns Fee amount in USD
   */
  static calculateFeeAmount(orderSizeUsd: number, feeTenthBps: number): number {
    // Convert tenth bps to decimal: 50 tenth bps = 5 bps = 0.05% = 0.0005
    const feePercentage = feeTenthBps / 100000;
    return orderSizeUsd * feePercentage;
  }

  /**
   * Get fee information for display in UI
   * @param orderSizeUsd Order size in USD
   * @param feeTenthBps Fee in tenth of basis points
   * @returns Formatted fee information
   */
  static getFeeDisplayInfo(orderSizeUsd: number, feeTenthBps: number) {
    const feeAmount = this.calculateFeeAmount(orderSizeUsd, feeTenthBps);
    const feeBps = feeTenthBps / 10;
    const feePercentage = feeBps / 100;

    return {
      feeAmount: feeAmount.toFixed(4),
      feeBps: feeBps.toFixed(1),
      feePercentage: feePercentage.toFixed(3),
      formattedFee: `$${feeAmount.toFixed(4)} (${feeBps.toFixed(1)} bps)`,
    };
  }

  /**
   * Generate UUID for Swift orders with builder codes
   * This is a simple implementation - you might want to use a more robust UUID library
   */
  static generateSignedMsgUuid(): BN {
    return new BN(Date.now() + Math.floor(Math.random() * 1000000));
  }

  /**
   * Validate builder code configuration
   * @param builderIdx Builder index
   * @param builderFeeTenthBps Builder fee in tenth bps
   * @param userMaxFee User's maximum approved fee
   * @returns Validation result
   */
  static validateBuilderCode(
    builderIdx: number,
    builderFeeTenthBps: number,
    userMaxFee: number
  ): { isValid: boolean; error?: string } {
    if (builderIdx < 0) {
      return { isValid: false, error: 'Builder index must be non-negative' };
    }

    if (builderFeeTenthBps < 0) {
      return { isValid: false, error: 'Builder fee must be non-negative' };
    }

    if (builderFeeTenthBps > userMaxFee) {
      return {
        isValid: false,
        error: `Builder fee (${builderFeeTenthBps}) exceeds user maximum (${userMaxFee})`,
      };
    }

    if (builderFeeTenthBps > this.DEFAULT_BUILDER_FEE_TENTH_BPS) {
      return {
        isValid: false,
        error: `Builder fee (${builderFeeTenthBps}) exceeds platform maximum (${this.DEFAULT_BUILDER_FEE_TENTH_BPS})`,
      };
    }

    return { isValid: true };
  }

  /**
   * Get default fee based on order type
   * @param orderType Type of order
   * @returns Default fee in tenth bps
   */
  static getDefaultFeeForOrderType(orderType: string): number {
    switch (orderType) {
      case 'market':
        return 50; // 5 bps for market orders
      case 'limit':
        return 30; // 3 bps for limit orders
      default:
        return this.DEFAULT_BUILDER_FEE_FOR_ORDERS;
    }
  }
}

/**
 * React hook for builder code utilities with user onboarding state
 */
export function useBuilderCodeUtils() {
  const { isOnboardingComplete, hasRevenueShareEscrow, isBuilderApproved } = 
    useBuilderOnboarding();

  /**
   * Check if builder codes can be applied based on user state
   */
  const canApplyBuilderCodes = (isSwiftOrder: boolean): boolean => {
    return BuilderCodeUtils.shouldApplyBuilderCodes(isSwiftOrder, isOnboardingComplete);
  };

  /**
   * Get builder code options for current user
   */
  const getBuilderCodeOptionsForUser = async (
    customFee?: number
  ): Promise<BuilderCodeOptions | null> => {
    if (!isOnboardingComplete) {
      return null;
    }

    // In a real implementation, you would fetch the user's approved builders
    // from their RevenueShareEscrow account. For now, we'll simulate this.
    const userApprovedBuilders = [
      {
        authority: new PublicKey(BuilderCodeUtils['BUILDER_AUTHORITY']),
        maxFeeTenthBps: BuilderCodeUtils['DEFAULT_BUILDER_FEE_TENTH_BPS'],
      },
    ];

    return BuilderCodeUtils.getBuilderCodeOptions(userApprovedBuilders, customFee);
  };

  /**
   * Calculate and format fee information
   */
  const calculateFeeInfo = (orderSizeUsd: number, feeTenthBps?: number) => {
    const fee = feeTenthBps ?? BuilderCodeUtils.getDefaultFeeForOrderType('market');
    return BuilderCodeUtils.getFeeDisplayInfo(orderSizeUsd, fee);
  };

  return {
    canApplyBuilderCodes,
    getBuilderCodeOptionsForUser,
    calculateFeeInfo,
    isOnboardingComplete,
    hasRevenueShareEscrow,
    isBuilderApproved,
    utils: BuilderCodeUtils,
  };
}
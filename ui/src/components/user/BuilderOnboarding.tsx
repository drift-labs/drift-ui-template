import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useBuilderOnboarding } from '../../hooks/useBuilderOnboarding';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../ui';

interface BuilderOnboardingProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete?: () => void;
}

export function BuilderOnboardingDialog({
  open,
  onOpenChange,
  onComplete,
}: BuilderOnboardingProps) {
  const { connected } = useWallet();
  const {
    isLoading,
    hasRevenueShareEscrow,
    isBuilderApproved,
    isOnboardingComplete,
    error,
    initializeRevenueShareEscrow,
    approveBuilder,
    completeOnboarding,
  } = useBuilderOnboarding();

  const [currentStep, setCurrentStep] = useState(1);
  const [transactions, setTransactions] = useState<{
    escrowTx?: string;
    approvalTx?: string;
  }>({});

  const builderAuthority = process.env.NEXT_PUBLIC_BUILDER_AUTHORITY!;
  const maxFeeBps = parseInt(process.env.NEXT_PUBLIC_BUILDER_MAX_FEE_TENTH_BPS || '200') / 10;

  const handleInitializeEscrow = async () => {
    try {
      const txSig = await initializeRevenueShareEscrow(16);
      setTransactions(prev => ({ ...prev, escrowTx: txSig }));
      setCurrentStep(2);
    } catch (error) {
      console.error('Failed to initialize escrow:', error);
    }
  };

  const handleApproveBuilder = async () => {
    try {
      const txSig = await approveBuilder();
      setTransactions(prev => ({ ...prev, approvalTx: txSig }));
      setCurrentStep(3);
    } catch (error) {
      console.error('Failed to approve builder:', error);
    }
  };

  const handleCompleteOnboarding = async () => {
    try {
      await completeOnboarding();
      onComplete?.();
      onOpenChange(false);
    } catch (error) {
      console.error('Failed to complete onboarding:', error);
    }
  };

  const handleClose = () => {
    if (isOnboardingComplete) {
      onComplete?.();
    }
    onOpenChange(false);
  };

  if (!connected) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Wallet Not Connected</DialogTitle>
            <DialogDescription>
              Please connect your wallet to complete the builder onboarding.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  if (isOnboardingComplete) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>✅ Onboarding Complete</DialogTitle>
            <DialogDescription>
              You&apos;re all set! You can now trade with builder fees on our platform.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleClose}>Continue Trading</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Complete Builder Onboarding</DialogTitle>
          <DialogDescription>
            To start trading on our platform, you need to complete a one-time setup.
            This involves two transactions that enable builder fees.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                hasRevenueShareEscrow || currentStep > 1 
                  ? 'bg-green-600 text-white' 
                  : currentStep === 1 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}>
                1
              </div>
              <span className={`text-sm ${
                hasRevenueShareEscrow || currentStep >= 1 ? 'text-white' : 'text-gray-400'
              }`}>
                Initialize Escrow
              </span>
            </div>
            
            <div className="flex-1 mx-4 h-px bg-gray-600" />
            
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                isBuilderApproved || currentStep > 2 
                  ? 'bg-green-600 text-white' 
                  : currentStep === 2 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}>
                2
              </div>
              <span className={`text-sm ${
                isBuilderApproved || currentStep >= 2 ? 'text-white' : 'text-gray-400'
              }`}>
                Approve Builder
              </span>
            </div>
          </div>

          {/* Step Content */}
          {!hasRevenueShareEscrow && currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Initialize Revenue Share Escrow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Create an escrow account to manage builder fees. This is a one-time setup
                  that allows you to pay fees to builders for routing your trades.
                </p>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• Supports up to 16 concurrent orders</li>
                  <li>• Required for Swift order routing</li>
                  <li>• Small rent cost (~0.01 SOL, refundable)</li>
                </ul>
                <Button 
                  onClick={handleInitializeEscrow} 
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? 'Initializing...' : 'Initialize Escrow Account'}
                </Button>
              </CardContent>
            </Card>
          )}

          {!isBuilderApproved && currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Step 2: Approve Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Approve our builder to route your trades and set the maximum fee you&apos;re willing to pay.
                </p>
                <div className="bg-gray-800 p-3 rounded mb-4">
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Builder Authority:</span>
                      <span className="text-white font-mono text-xs">
                        {`${builderAuthority.slice(0, 8)}...${builderAuthority.slice(-8)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max Fee:</span>
                      <span className="text-white">{maxFeeBps} bps ({maxFeeBps / 100}%)</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleApproveBuilder} 
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? 'Approving...' : 'Approve Builder'}
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>🎉 Setup Complete!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Great! You&apos;ve successfully completed the builder onboarding process.
                  You can now start trading with optimized order routing.
                </p>
                {transactions.escrowTx && (
                  <div className="text-sm text-gray-400 mb-2">
                    Escrow TX: 
                    <span className="font-mono ml-2">
                      {transactions.escrowTx.slice(0, 8)}...{transactions.escrowTx.slice(-8)}
                    </span>
                  </div>
                )}
                {transactions.approvalTx && (
                  <div className="text-sm text-gray-400 mb-4">
                    Approval TX: 
                    <span className="font-mono ml-2">
                      {transactions.approvalTx.slice(0, 8)}...{transactions.approvalTx.slice(-8)}
                    </span>
                  </div>
                )}
                <Button onClick={handleClose} className="w-full">
                  Start Trading
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-900/20 border border-red-500 rounded p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Quick Complete Option */}
          {!isOnboardingComplete && (
            <div className="pt-4 border-t border-gray-700">
              <Button 
                onClick={handleCompleteOnboarding} 
                disabled={isLoading}
                variant="outline"
                className="w-full"
              >
                {isLoading ? 'Processing...' : 'Complete All Steps Automatically'}
              </Button>
              <p className="text-xs text-gray-400 mt-2 text-center">
                This will run both transactions in sequence
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button 
            onClick={() => onOpenChange(false)} 
            variant="outline"
            disabled={isLoading}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Compact component to show onboarding status and trigger dialog
 */
interface BuilderOnboardingStatusProps {
  onOpenDialog: () => void;
}

export function BuilderOnboardingStatus({ onOpenDialog }: BuilderOnboardingStatusProps) {
  const { connected } = useWallet();
  const { isOnboardingComplete, isLoading } = useBuilderOnboarding();

  if (!connected || isOnboardingComplete) {
    return null;
  }

  return (
    <Card className="border-yellow-500/50 bg-yellow-900/10">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-yellow-400">Setup Required</h3>
            <p className="text-xs text-gray-400">
              Complete builder onboarding to start trading
            </p>
          </div>
          <Button 
            onClick={onOpenDialog}
            size="sm"
            disabled={isLoading}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            {isLoading ? 'Checking...' : 'Setup'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
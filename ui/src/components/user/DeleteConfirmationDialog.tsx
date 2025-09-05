"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/buttonn";
import { Trash2 } from "lucide-react";

interface DeleteConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subAccountId: number | null;
  isDeleting: boolean;
  onConfirm: () => void;
}

export const DeleteConfirmationDialog = ({
  open,
  onOpenChange,
  subAccountId,
  isDeleting,
  onConfirm,
}: DeleteConfirmationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2 text-red-400">
            <Trash2 className="h-5 w-5" />
            <DialogTitle>Delete User Account</DialogTitle>
          </div>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete sub-account #
          {subAccountId}? Please ensure that you have:
          <br />
          <br />
          • Close all open positions
          <br />• Return all collateral to your wallet
        </DialogDescription>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Deleting...
              </div>
            ) : (
              <>Delete Account</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
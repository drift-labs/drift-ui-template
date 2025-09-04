"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
}

interface DialogHeaderProps {
  children: React.ReactNode;
}

interface DialogTitleProps {
  children: React.ReactNode;
}

interface DialogDescriptionProps {
  children: React.ReactNode;
}

interface DialogFooterProps {
  children: React.ReactNode;
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      {/* Dialog content */}
      <div className="relative z-50 max-h-screen w-full max-w-lg overflow-auto">
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ className, children }: DialogContentProps) => (
  <div
    className={cn(
      "relative mx-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6",
      className,
    )}
  >
    {children}
  </div>
);

const DialogHeader = ({ children }: DialogHeaderProps) => (
  <div className="mb-4">{children}</div>
);

const DialogTitle = ({ children }: DialogTitleProps) => (
  <h2 className="text-lg font-semibold text-white">{children}</h2>
);

const DialogDescription = ({ children }: DialogDescriptionProps) => (
  <p className="text-sm text-gray-400">{children}</p>
);

const DialogFooter = ({ children }: DialogFooterProps) => (
  <div className="flex justify-end gap-3 mt-6">{children}</div>
);

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
};

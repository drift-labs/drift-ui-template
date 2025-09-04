import React from 'react';
import { Input } from './input';
import { Label } from './label';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <Label className="text-sm font-medium text-gray-200">
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </Label>
        )}
        <Input
          className={cn(
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-600 focus:ring-blue-500 focus:border-blue-500',
            'bg-gray-800 text-white placeholder:text-gray-400',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-400">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-xs text-gray-400">{helperText}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
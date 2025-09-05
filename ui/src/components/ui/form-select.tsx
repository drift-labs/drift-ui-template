import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Label } from "./label";
import { cn } from "@/lib/utils";

interface FormSelectProps {
  label?: string;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  error?: string;
  helperText?: string;
  required?: boolean;
  className?: string;
}

export function FormSelect({
  label,
  placeholder = "Select an option...",
  value,
  onValueChange,
  options,
  error,
  helperText,
  required,
  className,
}: FormSelectProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label className="text-sm font-medium text-gray-200">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </Label>
      )}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={`w-full ${error ? "border-red-500" : ""}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-xs text-red-400">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-gray-400">{helperText}</p>
      )}
    </div>
  );
}

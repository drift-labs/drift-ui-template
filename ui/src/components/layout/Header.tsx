"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletButton from "../wallet/WalletButton";
import { UserAccountSelector } from "../user/UserAccountSelector";
import { Activity, Menu, X } from "lucide-react";
import { clsx } from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DriftEnvironment, useDriftStore } from "@/stores/DriftStore";

const navigation = [
  { name: "Home", href: "/" },
  { name: "User", href: "/user" },
  { name: "Spot", href: "/spot" },
  { name: "Perps", href: "/perps" },
  { name: "Data", href: "/data" },
  { name: "Admin", href: "/admin" },
];

const ENVIRONMENT_OPTIONS: { value: DriftEnvironment; label: string }[] = [
  { value: "devnet", label: "Devnet" },
  { value: "mainnet-beta", label: "Mainnet" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const environment = useDriftStore((s) => s.environment);
  const setEnvironment = useDriftStore((s) => s.setEnvironment);

  return (
    <header className="border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DriftUI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Select
              value={environment}
              onValueChange={(value) =>
                setEnvironment(value as DriftEnvironment)
              }
            >
              <SelectTrigger className="border-gray-700 bg-gray-800/70 text-gray-200">
                <SelectValue aria-label={environment} placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="border-gray-700 bg-gray-900 text-gray-100">
                {ENVIRONMENT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <UserAccountSelector />
            <WalletButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <div className="scale-75">
              <Select
                value={environment}
                onValueChange={(value) =>
                  setEnvironment(value as DriftEnvironment)
                }
              >
                <SelectTrigger className="border-gray-700 bg-gray-800/70 text-gray-200">
                  <SelectValue aria-label={environment} placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="border-gray-700 bg-gray-900 text-gray-100">
                  {ENVIRONMENT_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="scale-75">
              <UserAccountSelector />
            </div>
            <div className="scale-75">
              <WalletButton />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-gray-900">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

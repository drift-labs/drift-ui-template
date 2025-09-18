"use client";

import React from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { User, ArrowUpDown, TrendingUp, Wallet } from "lucide-react";

export default function Home() {
  const { connected, publicKey } = useWallet();

  const features = [
    {
      title: "User Management",
      description:
        "Create accounts and manage deposits with the Drift protocol",
      icon: User,
      href: "/user",
      color: "text-blue-400",
    },
    {
      title: "Spot Actions",
      description: "Deposit and withdraw Drift-supported tokens",
      icon: ArrowUpDown,
      href: "/spot",
      color: "text-green-400",
    },
    {
      title: "Perpetuals",
      description: "Trade perpetual futures with leverage",
      icon: TrendingUp,
      href: "/perps",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-white">Drift UI Template</h1>
        </div>
        <p className="text-xl text-gray-300 mb-8">
          Solana perpetuals trading interface built with Drift Protocol
        </p>

        {/* Wallet Status */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {connected ? (
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-lg">
              <Wallet className="h-4 w-4 text-green-400" />
              <span className="text-green-400 font-medium">Connected</span>
              <span className="text-gray-300 text-sm">
                {publicKey?.toBase58().slice(0, 4)}...
                {publicKey?.toBase58().slice(-4)}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg">
              <Wallet className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">
                Connect your wallet to get started
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className="transition-all hover:scale-105 hover:shadow-xl flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <div className="text-gray-400 mb-4 grow">
                  {feature.description}
                </div>
                <Link href={feature.href}>
                  <Button
                    className="w-full"
                    variant={connected ? "default" : "outline"}
                    disabled={!connected && feature.href !== "/user"}
                  >
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

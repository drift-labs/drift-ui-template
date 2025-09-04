import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | 'full';
}

const maxWidthClasses = {
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg', 
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  'full': 'max-w-full'
};

export function PageLayout({ children, maxWidth = '6xl' }: PageLayoutProps) {
  const maxWidthClass = maxWidthClasses[maxWidth];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${maxWidthClass} mx-auto`}>
        {children}
      </div>
    </div>
  );
}
import React from 'react';
import { Sidebar } from './sidebar';
import { Header, type HeaderProps } from './header';

interface DashboardLayoutProps extends HeaderProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children, ...headerProps }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-auto md:ml-0">
        <Header {...headerProps} />
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

import React from 'react';

export const metadata = {
  title: 'Dashboard - AQS',
  description: 'Security scanning dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

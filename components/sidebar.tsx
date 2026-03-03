'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BarChart3, ClipboardList, Clock, Bell, Settings, HelpCircle } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { href: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { href: '/projects', icon: ClipboardList, label: 'Projects' },
    { href: '/scans', icon: ClipboardList, label: 'Scans' },
    { href: '/schedule', icon: Clock, label: 'Schedule' },
  ];

  const bottomItems = [
    { href: '#', icon: Bell, label: 'Notifications' },
    { href: '#', icon: Settings, label: 'Settings' },
    { href: '#', icon: HelpCircle, label: 'Support' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 md:hidden p-2 rounded-lg bg-card text-foreground border border-border"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

          {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-56 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative flex flex-col`}
      >
       
        <div className="p-6 border-b border-sidebar-border flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold text-sm">
            Fin
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">aqs</span>
        </div>

       
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

       
        <div className="p-4 border-t border-sidebar-border space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center text-sm font-bold text-sidebar-foreground">
              OD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">odrinakedi.com</p>
              <p className="text-xs text-sidebar-foreground/70 truncate">Security Lead</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

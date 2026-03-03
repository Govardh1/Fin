'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { Search, Plus, Filter, Layout } from 'lucide-react';
import { mockScans } from '@/lib/mockData';

export default function DashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredScans = mockScans.filter(
    (scan) =>
      scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scan.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNewScan = () => {
    router.push('/dashboard/scans');
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-auto">
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">Scan</h1>
              <p className="text-xs text-muted-foreground">Private Assets / New Scan</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Export Report
              </button>
              <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg text-sm font-medium hover:bg-destructive/90 transition-colors">
                Stop Scan
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase">Critical Severity</p>
                    <p className="text-3xl font-bold text-foreground">86</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-lg">
                    ◆
                  </div>
                </div>
                <p className="text-xs text-destructive">↑ 2% increase from yesterday</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase">High Severity</p>
                    <p className="text-3xl font-bold text-foreground">16</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-600 text-lg">
                    ⚠
                  </div>
                </div>
                <p className="text-xs text-orange-600">↓ 0.1% decrease from yesterday</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase">Medium Severity</p>
                    <p className="text-3xl font-bold text-foreground">26</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 text-lg">
                    ⚠
                  </div>
                </div>
                <p className="text-xs text-yellow-600">↓ 0.1% decrease from yesterday</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase">Low Severity</p>
                    <p className="text-3xl font-bold text-foreground">16</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-lg">
                    🔍
                  </div>
                </div>
                <p className="text-xs text-primary">↑ 0.0% increase from yesterday</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Org</p>
                  <p className="font-semibold text-foreground">Project X</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Owner</p>
                  <p className="font-semibold text-foreground">Nanmagiri</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Total Score</p>
                  <p className="font-semibold text-foreground">100</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Scheduled</p>
                  <p className="font-semibold text-foreground">1000</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Rescans</p>
                  <p className="font-semibold text-foreground">100</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Failed Scans</p>
                  <p className="font-semibold text-foreground">100</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Last updated 10 mins ago</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search scans by name or type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors flex items-center gap-2 text-sm font-medium">
                    <Filter size={16} />
                    Filter
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors flex items-center gap-2 text-sm font-medium">
                    <Layout size={16} />
                    Column
                  </button>
                  <button 
                    onClick={handleNewScan}
                    className="px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90  hover:cursor-grab transition-colors flex items-center gap-2 text-sm font-semibold"
                  >
                    <Plus size={16} />
                    New scan
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border bg-muted/30">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Scan Name</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Status</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Progress</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Vulnerability</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Last Scan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredScans.map((scan) => (
                      <tr
                        key={scan.id}
                        onClick={() => {}}
                        className="border-b border-border hover:bg-muted/30 transition-colors cursor-pointer"
                      >
                        <td className="px-4 py-4 text-foreground font-medium">{scan.name}</td>
                        <td className="px-4 py-4 text-muted-foreground">{scan.type}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                            scan.status === 'completed' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                          }`}>
                            {scan.status === 'completed' ? 'Completed' : 'Scheduled'}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all"
                                style={{ width: `${scan.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-muted-foreground w-8">{scan.progress}%</span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex gap-1 flex-wrap">
                            {scan.vulnerabilities.critical > 0 && (
                              <div className="w-6 h-6 rounded text-xs font-bold text-white flex items-center justify-center bg-destructive">
                                {scan.vulnerabilities.critical}
                              </div>
                            )}
                            {scan.vulnerabilities.high > 0 && (
                              <div className="w-6 h-6 rounded text-xs font-bold text-white flex items-center justify-center bg-orange-500">
                                {scan.vulnerabilities.high}
                              </div>
                            )}
                            {scan.vulnerabilities.medium > 0 && (
                              <div className="w-6 h-6 rounded text-xs font-bold text-white flex items-center justify-center bg-yellow-500">
                                {scan.vulnerabilities.medium}
                              </div>
                            )}
                            {scan.vulnerabilities.low > 0 && (
                              <div className="w-6 h-6 rounded text-xs font-bold text-white flex items-center justify-center bg-green-500">
                                {scan.vulnerabilities.low}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground text-xs">{scan.lastScanned}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                <span>Showing 15 of 100 Scans</span>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    ‹
                  </button>
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
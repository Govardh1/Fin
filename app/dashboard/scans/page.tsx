'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { mockActivityLog, mockFindings } from '@/lib/mockData';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

export default function ScanDetailPage() {
  const [activeTab, setActiveTab] = useState<'activity' | 'loops'>('activity');
  const [expandedFinding, setExpandedFinding] = useState<string | null>(null);

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 h-full">
            <div className="lg:col-span-2 space-y-6 flex flex-col">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Progress</p>
                    <p className="text-4xl font-bold text-foreground">0%</p>
                    <p className="text-xs text-muted-foreground mt-1">In Progress</p>
                  </div>
                  <div className="flex gap-3">
                    {['Spidering', 'Mapping', 'Testing', 'Validating', 'Reporting'].map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                          idx === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {idx === 0 ? '⚙' : step.charAt(0)}
                        </div>
                        <p className="text-xs text-foreground text-center">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Scan Type</p>
                    <p className="font-semibold text-foreground">Grey Box</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Targets</p>
                    <p className="font-semibold text-foreground">google.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Started At</p>
                    <p className="font-semibold text-foreground">Nov 22, 09:00AM</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Credentials</p>
                    <p className="font-semibold text-foreground">2 Active</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Files</p>
                    <p className="font-semibold text-foreground">Control.pdf</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Checklists</p>
                    <p className="font-semibold text-foreground">40/350</p>
                  </div>
                </div>
              </div>

           
              <div className="bg-card border border-border rounded-lg overflow-hidden flex-1 flex flex-col">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">Live Scan Console</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Running</span>
                  </div>
                </div>

               
                <div className="flex border-b border-border bg-muted/20">
                  <button
                    onClick={() => setActiveTab('activity')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                      activeTab === 'activity'
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Activity Log
                  </button>
                  <button
                    onClick={() => setActiveTab('loops')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                      activeTab === 'loops'
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Verification Loops
                  </button>
                </div>

                
                <div className="flex-1 overflow-auto p-4 bg-slate-950 text-green-400 font-mono text-xs leading-relaxed">
                  {activeTab === 'activity' && (
                    <div className="space-y-2">
                      {mockActivityLog.slice(0, 12).map((log, idx) => (
                        <div key={idx} className="flex">
                          <span className="text-muted-foreground mr-2 shrink-0">{log.timestamp}</span>
                          <span>{log.message}</span>
                          {log.code && <span className="text-cyan-400 ml-1">{log.code}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === 'loops' && (
                    <div className="text-muted-foreground">No active verification loops</div>
                  )}
                </div>
              </div>
            </div>

       
            <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
              <div className="p-4 border-b border-border">
                <h2 className="text-sm font-semibold text-foreground">Finding Log</h2>
              </div>

              <div className="flex-1 overflow-auto">
                <div className="space-y-2 p-4">
                  {mockFindings.map((finding) => (
                    <div
                      key={finding.id}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFinding(expandedFinding === finding.id ? null : finding.id)}
                        className="w-full p-3 hover:bg-muted/50 transition-colors flex items-start justify-between text-left"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="px-2 py-0.5 rounded text-xs font-bold text-white shrink-0"
                              style={{ backgroundColor: getSeverityColor(finding.severity) }}
                            >
                              {finding.severity.toUpperCase()}
                            </span>
                            <span className="text-xs text-muted-foreground shrink-0">{finding.timestamp}</span>
                          </div>
                          <h3 className="font-semibold text-foreground text-sm line-clamp-2">{finding.title}</h3>
                        </div>
                        {expandedFinding === finding.id ? (
                          <ChevronUp size={16} className="text-muted-foreground shrink-0 ml-2" />
                        ) : (
                          <ChevronDown size={16} className="text-muted-foreground shrink-0 ml-2" />
                        )}
                      </button>

                      {expandedFinding === finding.id && (
                        <div className="px-3 py-2 border-t border-border bg-muted/20 text-xs text-muted-foreground">
                          <p className="mb-2">{finding.description}</p>
                          <p className="text-muted-foreground">{finding.path}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="border-t border-border p-3 bg-muted/20 text-xs text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-destructive flex-shrink-0"></span>
                  <span>Critical: 0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-orange-500 flex-shrink-0"></span>
                  <span>High: 0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-yellow-500 flex-shrink-0"></span>
                  <span>Medium: 0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-green-500 flex-shrink-0"></span>
                  <span>Low: 0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function getSeverityColor(severity: string): string {
  const colors: Record<string, string> = {
    critical: '#ef4444',
    high: '#f97316',
    medium: '#eab308',
    low: '#22c55e',
  };
  return colors[severity] || '#666666';
}

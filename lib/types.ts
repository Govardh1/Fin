export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low';
export type ScanStatus = 'completed' | 'scheduled' | 'failed';
export type ScanType = 'Greybox' | 'Blackbox' | 'Whitebox';

export interface Finding {
  id: string;
  title: string;
  severity: SeverityLevel;
  description: string;
  path: string;
  timestamp: string;
}

export interface Scan {
  id: string;
  name: string;
  type: ScanType;
  status: ScanStatus;
  progress: number;
  target: string;
  startedAt: string;
  lastScanned: string;
  files: string;
  checklist: string;
  vulnerabilities: Record<SeverityLevel, number>;
}

export interface ActivityLog {
  timestamp: string;
  message: string;
  code: string;
  type: 'info' | 'warning' | 'error';
  details?: string;
}

export interface Finding {
  id: string;
  title: string;
  severity: SeverityLevel;
  description: string;
  path: string;
  timestamp: string;
}

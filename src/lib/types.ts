export type SLAStatus = 'ON_TRACK' | 'AT_RISK' | 'BREACHED';
export type MilestoneStatus = 'PENDING' | 'IN_DEVELOPMENT' | 'QA_REVIEW' | 'CLIENT_APPROVED' | 'RELEASED';

export interface Milestone {
  id: string;
  title: string;
  targetDate: string;
  completionPercentage: number;
  status: MilestoneStatus;
  slaStatus: SLAStatus;
  deliverablesCount: number;
}

export interface ClientProject {
  id: string;
  clientName: string;
  clientRegion: 'North America' | 'Europe' | 'APAC';
  projectName: string;
  leadEngineer: string;
  currentSprint: string;
  overallHealth: 'HEALTHY' | 'WARNING' | 'CRITICAL';
  milestones: Milestone[];
}

import { ClientProject } from './types';

export const mockProjects: ClientProject[] = [
  {
    id: "proj-101",
    clientName: "Apex Healthcare Systems",
    clientRegion: "North America",
    projectName: "Cloud EHR Data Migration & FHIR API",
    leadEngineer: "K.V.S. Manikanta",
    currentSprint: "Sprint 14 (Security Hardening)",
    overallHealth: "HEALTHY",
    milestones: [
      {
        id: "m-1",
        title: "Database Partitioning & Index Tuning",
        targetDate: "2026-10-25",
        completionPercentage: 100,
        status: "CLIENT_APPROVED",
        slaStatus: "ON_TRACK",
        deliverablesCount: 8
      },
      {
        id: "m-2",
        title: "FHIR R4 Streaming REST Endpoints",
        targetDate: "2026-11-05",
        completionPercentage: 85,
        status: "QA_REVIEW",
        slaStatus: "ON_TRACK",
        deliverablesCount: 12
      }
    ]
  },
  {
    id: "proj-102",
    clientName: "Nordic Logistics Group",
    clientRegion: "Europe",
    projectName: "3D Container Telemetry & Tracking Portal",
    leadEngineer: "K.V.S. Manikanta",
    currentSprint: "Sprint 8 (Asset Ingestion)",
    overallHealth: "HEALTHY",
    milestones: [
      {
        id: "m-3",
        title: "GLTF/OBJ 3D Mesh Parsing Pipeline",
        targetDate: "2026-11-12",
        completionPercentage: 60,
        status: "IN_DEVELOPMENT",
        slaStatus: "ON_TRACK",
        deliverablesCount: 5
      }
    ]
  }
];

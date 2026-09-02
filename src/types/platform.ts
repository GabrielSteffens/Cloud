export type VerificationStatus = 'verified_ui' | 'documented' | 'inferred' | 'not_verified';
export type SupportStatus = 'supported' | 'not_supported' | 'partial' | 'not_verified';

export type FeatureCategory = 
  | 'Wireless'
  | 'Switching'
  | 'Security'
  | 'Monitoring'
  | 'Operations & Automation'
  | 'Troubleshooting'
  | 'User & Tenant Management'
  | 'Mobile Application';

export interface CategoryScores {
  wireless: number;
  switching: number;
  security: number;
  monitoring: number;
  troubleshooting: number;
  automation: number;
  reporting: number;
  integration: number;
  ux: number;
  scalability: number;
}

export interface ScoreExplanation {
  category: keyof CategoryScores;
  score: number;
  rationale: string;
}

export interface FeatureItem {
  id: string;
  category: FeatureCategory;
  name: string;
  description: string;
  status: SupportStatus;
  evidenceBadge: VerificationStatus;
  evidenceNotes: string;
  screenPath?: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  category: FeatureCategory | 'Dashboard';
  section: string;
  navigationPath: string;
  imageUrl: string;
  observedCapabilities: string[];
  strength: string;
  weakness: string;
  evidenceStatus: VerificationStatus;
}

export interface StrengthWeaknessItem {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
}

export interface UseCaseMatch {
  scenarioId: string;
  scenarioName: string;
  iconName: string;
  suitabilityScore: number; // 0 - 10
  suitabilityRating: 'Ideal' | 'Suitable' | 'Possible' | 'Not Recommended';
  rationale: string;
  keyFeatures: string[];
  caveats: string[];
}

export interface PlatformArchitecture {
  deploymentModel: string;
  multiTenancy: string;
  adoptionWorkflow: string;
  firmwareManagement: string;
  apiSupport: string;
  backupRestore: string;
  remoteAccess: string;
}

export interface LicensingModel {
  pricingType: string;
  hardwareLock: string;
  mspFeatures: string;
  trialPeriod: string;
  tierNotes: string;
}

export interface Platform {
  id: string;
  name: string;
  vendor: string;
  logoColor: string;
  url: string;
  tagline: string;
  targetMarket: string;
  ecosystem: string[];
  overallScore: number;
  scores: CategoryScores;
  scoreExplanations: ScoreExplanation[];
  strengths: StrengthWeaknessItem[];
  weaknesses: StrengthWeaknessItem[];
  features: FeatureItem[];
  useCases: UseCaseMatch[];
  screenshots: ScreenshotItem[];
  architecture: PlatformArchitecture;
  licensing: LicensingModel;
  verdict: string;
  summary: string;
  lastEvaluated: string;
}

export interface CategoryDefinition {
  key: keyof CategoryScores;
  label: string;
  description: string;
  iconName: string;
}

export type ScenarioType = 
  | 'smb'
  | 'enterprise'
  | 'msp'
  | 'retail'
  | 'hospitality'
  | 'education'
  | 'industrial_iot'
  | 'multisite';

export interface ScenarioDefinition {
  id: ScenarioType;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyRequirements: string[];
}

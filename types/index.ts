export type VerificationStatus =
  | "Development"
  | "Testing"
  | "Verified"
  | "Production Ready"
  | "Coming Soon";

export type ProductStatus =
  | "Development"
  | "Testing"
  | "Verified"
  | "Production Ready"
  | "Coming Soon";

export type DeploymentOption = "Local" | "On-Premise" | "Cloud" | "Hybrid";

export type OracleVersion =
  | "Oracle Database 19c"
  | "Oracle Database 21c"
  | "Oracle Database 23ai"
  | "Oracle AI Database 26 AI";

export interface Compatibility {
  databases: OracleVersion[];
  deploymentOptions: DeploymentOption[];
}

export interface AgentSkillRef {
  name: string;
  description?: string;
}

export interface AgentInput {
  name: string;
  type: string;
  description: string;
  required: boolean;
}

export interface AgentOutput {
  name: string;
  type: string;
  description: string;
}

export interface Agent {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  purpose: string;
  skills: AgentSkillRef[];
  inputs: AgentInput[];
  outputs: AgentOutput[];
  supportedKits: string[];
  verificationStatus: VerificationStatus;
  status: ProductStatus;
  icon?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  usedBy: string[];
  verificationStatus: VerificationStatus;
  tags?: string[];
}

export interface AgentKitFeature {
  title: string;
  description: string;
}

export interface AgentKitPrice {
  amount: number | null;
  currency: string;
  label: string;
  period?: string;
}

export interface AgentKit {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  price: AgentKitPrice;
  status: ProductStatus;
  verificationStatus: VerificationStatus;
  agentCount: number;
  skillCount: number;
  workflowCount: number;
  features: AgentKitFeature[];
  agents: string[];
  skills: string[];
  compatibility: Compatibility;
  capabilities: string[];
  whatIsIncluded: string[];
  businessProblem: string;
  featured: boolean;
  popular: boolean;
  new?: boolean;
}

export interface SearchResult {
  id: string;
  name: string;
  type: "Agent Kit" | "Agent" | "Skill" | "Documentation";
  category: string;
  description: string;
  slug?: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface DocumentationSection {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  content?: string;
}

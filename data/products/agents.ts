import type { Agent } from "@/types";

export const agents: Agent[] = [
  {
    id: "database-health-agent",
    slug: "database-health-agent",
    name: "Database Health Agent",
    category: "Database Administration",
    description:
      "Analyzes database health indicators across multiple dimensions and generates a structured health report with risk classifications and recommendations.",
    purpose:
      "Provide a comprehensive, automated assessment of Oracle database health including instance state, tablespace utilization, session activity, invalid objects, and configuration.",
    skills: [
      { name: "Instance Analysis", description: "Analyzes instance state and availability" },
      { name: "Tablespace Analysis", description: "Checks tablespace utilization levels" },
      { name: "Session Analysis", description: "Reviews active session counts and states" },
      { name: "Configuration Analysis", description: "Validates key configuration parameters" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
      { name: "thresholds", type: "HealthThresholds", description: "Configurable warning/critical thresholds", required: false },
    ],
    outputs: [
      { name: "healthReport", type: "HealthReport", description: "Structured database health report with findings" },
      { name: "riskIndicators", type: "RiskIndicator[]", description: "Identified risk indicators with severity" },
    ],
    supportedKits: ["oracle-dba-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "Activity",
  },
  {
    id: "tablespace-analysis-agent",
    slug: "tablespace-analysis-agent",
    name: "Tablespace Analysis Agent",
    category: "Database Administration",
    description:
      "Performs detailed analysis of Oracle tablespace utilization, growth trends, autoextend settings, and space management configuration.",
    purpose:
      "Identify tablespace capacity risks, misconfigured autoextend settings, and space management issues before they become operational incidents.",
    skills: [
      { name: "Tablespace Analysis", description: "Analyzes utilization and configuration" },
      { name: "Segment Analysis", description: "Reviews segment growth and distribution" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
    ],
    outputs: [
      { name: "tablespaceReport", type: "TablespaceReport", description: "Detailed tablespace analysis with recommendations" },
    ],
    supportedKits: ["oracle-dba-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "HardDrive",
  },
  {
    id: "session-monitoring-agent",
    slug: "session-monitoring-agent",
    name: "Session Monitoring Agent",
    category: "Database Administration",
    description:
      "Monitors Oracle database sessions, identifies long-running sessions, blocked sessions, and unusual session patterns.",
    purpose:
      "Surface session-related performance and availability issues including blocking sessions, idle connections consuming resources, and sessions with unusual resource consumption.",
    skills: [
      { name: "Session Analysis", description: "Analyzes active and blocked sessions" },
      { name: "Lock Analysis", description: "Identifies lock contention" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
    ],
    outputs: [
      { name: "sessionReport", type: "SessionReport", description: "Session analysis with identified issues" },
    ],
    supportedKits: ["oracle-dba-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "Users",
  },
  {
    id: "lock-analysis-agent",
    slug: "lock-analysis-agent",
    name: "Lock Analysis Agent",
    category: "Database Administration",
    description:
      "Detects and analyzes Oracle lock contention, blocking chains, and lock-related performance issues.",
    purpose:
      "Identify lock contention that may be degrading application performance or causing transaction timeouts.",
    skills: [
      { name: "Lock Analysis", description: "Detects lock contention and blocking chains" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
    ],
    outputs: [
      { name: "lockReport", type: "LockReport", description: "Lock analysis with blocking chain details" },
    ],
    supportedKits: ["oracle-dba-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "Lock",
  },
  {
    id: "sql-analysis-agent",
    slug: "sql-analysis-agent",
    name: "SQL Analysis Agent",
    category: "Performance",
    description:
      "Analyzes SQL statements from the shared pool, identifies high-resource queries, and provides structured analysis of SQL workloads.",
    purpose:
      "Surface the most resource-intensive SQL in the database workload and provide actionable analysis for optimization.",
    skills: [
      { name: "SQL Statistics", description: "Analyzes SQL execution statistics" },
      { name: "Execution Plan Analysis", description: "Reviews execution plans for inefficiencies" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
      { name: "topN", type: "number", description: "Number of top SQL statements to analyze", required: false },
    ],
    outputs: [
      { name: "sqlReport", type: "SQLReport", description: "SQL workload analysis with optimization recommendations" },
    ],
    supportedKits: ["sql-performance-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "Code2",
  },
  {
    id: "execution-plan-agent",
    slug: "execution-plan-agent",
    name: "Execution Plan Analysis Agent",
    category: "Performance",
    description:
      "Retrieves and interprets Oracle execution plans, identifies suboptimal operations, and produces structured findings.",
    purpose:
      "Make execution plan analysis accessible by automatically interpreting plan operations, identifying full table scans, missing indexes, and join inefficiencies.",
    skills: [
      { name: "Execution Plan Analysis", description: "Interprets Oracle execution plan operations" },
      { name: "Index Utilization", description: "Analyzes index usage and effectiveness" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
      { name: "sqlId", type: "string", description: "Oracle SQL_ID to analyze", required: true },
    ],
    outputs: [
      { name: "planReport", type: "PlanReport", description: "Execution plan analysis with findings and recommendations" },
    ],
    supportedKits: ["sql-performance-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "GitGraph",
  },
  {
    id: "user-audit-agent",
    slug: "user-audit-agent",
    name: "User Audit Agent",
    category: "Security",
    description:
      "Audits Oracle database users, identifies privileged accounts, default passwords, inactive accounts, and accounts with excessive privileges.",
    purpose:
      "Systematically surface user account security risks that manual reviews would miss or deprioritize.",
    skills: [
      { name: "Privilege Analysis", description: "Analyzes system and object privileges" },
      { name: "Authentication Analysis", description: "Reviews authentication configuration" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
    ],
    outputs: [
      { name: "userAuditReport", type: "UserAuditReport", description: "User audit findings with risk classifications" },
    ],
    supportedKits: ["oracle-security-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "UserCheck",
  },
  {
    id: "schema-documentation-agent",
    slug: "schema-documentation-agent",
    name: "Schema Documentation Agent",
    category: "Schema & Documentation",
    description:
      "Generates comprehensive documentation for Oracle database schemas including tables, views, procedures, functions, and their relationships.",
    purpose:
      "Automate the creation of schema documentation that is typically produced manually and quickly becomes outdated.",
    skills: [
      { name: "Metadata Analysis", description: "Extracts and analyzes schema metadata" },
      { name: "Documentation Generation", description: "Generates structured documentation" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle database connection", required: true },
      { name: "schema", type: "string", description: "Target schema name", required: true },
    ],
    outputs: [
      { name: "schemaDocs", type: "SchemaDocumentation", description: "Comprehensive schema documentation" },
    ],
    supportedKits: ["schema-intelligence-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "FileText",
  },
  {
    id: "migration-assessment-agent",
    slug: "migration-assessment-agent",
    name: "Migration Assessment Agent",
    category: "Migration",
    description:
      "Performs pre-migration assessment of an Oracle database, cataloguing objects, dependencies, deprecated features, and migration risks.",
    purpose:
      "Provide a structured, repeatable pre-migration assessment that supports informed migration planning.",
    skills: [
      { name: "Dependency Analysis", description: "Maps object dependencies" },
      { name: "Compatibility Analysis", description: "Identifies compatibility considerations" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Source Oracle database connection", required: true },
      { name: "targetVersion", type: "string", description: "Target Oracle version for compatibility analysis", required: false },
    ],
    outputs: [
      { name: "assessmentReport", type: "MigrationAssessment", description: "Migration assessment with risk classifications" },
    ],
    supportedKits: ["oracle-migration-agent-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "ArrowRightLeft",
  },
  {
    id: "ai-database-assistant",
    slug: "ai-database-assistant",
    name: "AI Database Assistant",
    category: "Oracle AI Database",
    description:
      "An intelligent database assistant that provides natural language analysis, structured insights, and actionable recommendations for Oracle AI Database environments.",
    purpose:
      "Bridge operational database intelligence with AI-native Oracle capabilities to deliver smarter, faster database insights.",
    skills: [
      { name: "AI Database Analysis", description: "AI-assisted database state analysis" },
      { name: "Natural Language Query", description: "Natural language database interrogation" },
      { name: "Intelligent Reporting", description: "AI-generated structured reports" },
    ],
    inputs: [
      { name: "connection", type: "OracleConnection", description: "Target Oracle AI Database connection", required: true },
      { name: "query", type: "string", description: "Analysis request in natural language", required: false },
    ],
    outputs: [
      { name: "intelligenceReport", type: "IntelligenceReport", description: "AI-generated database intelligence report" },
    ],
    supportedKits: ["oracle-ai-database-kit"],
    verificationStatus: "Development",
    status: "Development",
    icon: "BrainCircuit",
  },
];

export const getAgentBySlug = (slug: string): Agent | undefined =>
  agents.find((a) => a.slug === slug);

export const getAgentsByCategory = (category: string): Agent[] =>
  agents.filter((a) => a.category === category);

export const getAgentsByKit = (kitId: string): Agent[] =>
  agents.filter((a) => a.supportedKits.includes(kitId));

export const agentCategories = [
  "All",
  "Database Administration",
  "Performance",
  "Security",
  "Schema & Documentation",
  "Migration",
  "Oracle AI Database",
];

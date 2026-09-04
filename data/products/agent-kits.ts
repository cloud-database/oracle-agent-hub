import type { AgentKit } from "@/types";

export const agentKits: AgentKit[] = [
  {
    id: "oracle-dba-agent-kit",
    slug: "oracle-dba-agent-kit",
    name: "Oracle DBA Agent Kit",
    category: "Database Administration",
    shortDescription:
      "Health checks, monitoring, reports & diagnostics for Oracle environments.",
    longDescription:
      "The Oracle DBA Agent Kit is a production-grade collection of agents and skills built for Oracle database administrators. It automates the most time-consuming DBA tasks — from health monitoring and tablespace analysis to lock detection and configuration auditing — so your team can focus on architecture and optimization rather than routine inspection.",
    businessProblem:
      "Oracle database administration involves dozens of routine but critical checks: tablespace utilization, session activity, invalid objects, lock contention, configuration drift, and index health. Performing these manually is slow, error-prone, and scales poorly across environments. The Oracle DBA Agent Kit automates this work.",
    icon: "Database",
    price: { amount: 49, currency: "USD", label: "$49" },
    status: "Development",
    verificationStatus: "Development",
    agentCount: 15,
    skillCount: 25,
    workflowCount: 8,
    featured: true,
    popular: true,
    capabilities: [
      "Database Health Monitoring",
      "Tablespace Analysis",
      "Session Monitoring",
      "Lock Detection & Analysis",
      "Invalid Object Detection",
      "User & Privilege Auditing",
      "Database Inventory",
      "Index Analysis",
      "Configuration Auditing",
      "Performance Diagnostics",
      "Anomaly Detection",
      "Operational Reporting",
    ],
    features: [
      {
        title: "15+ Specialized Agents",
        description:
          "Purpose-built agents for every major DBA responsibility, from health checks to performance diagnostics.",
      },
      {
        title: "25+ Modular Skills",
        description:
          "Reusable skills that agents compose to analyze tablespaces, sessions, locks, objects, and configuration.",
      },
      {
        title: "Actionable Reporting",
        description:
          "Every agent produces structured, readable reports with findings, risk indicators, and recommendations.",
      },
      {
        title: "Oracle Native",
        description:
          "Built against Oracle data dictionary views and performance views — not generic SQL abstractions.",
      },
    ],
    whatIsIncluded: [
      "15+ Agent definitions",
      "25+ Skill definitions",
      "8 Automated workflows",
      "SQL scripts",
      "Configuration files",
      "Deployment documentation",
      "Test suites",
      "Example outputs",
    ],
    agents: [
      "database-health-agent",
      "tablespace-analysis-agent",
      "session-monitoring-agent",
      "lock-analysis-agent",
      "invalid-object-agent",
      "user-privilege-agent",
      "database-inventory-agent",
      "index-analysis-agent",
      "database-config-agent",
      "database-reporting-agent",
      "performance-diagnostic-agent",
      "anomaly-analysis-agent",
    ],
    skills: [
      "instance-analysis",
      "tablespace-analysis",
      "session-analysis",
      "lock-analysis",
      "object-analysis",
      "privilege-analysis",
      "index-analysis",
      "configuration-analysis",
      "performance-metrics",
      "report-generation",
    ],
    compatibility: {
      databases: [
        "Oracle Database 19c",
        "Oracle Database 21c",
        "Oracle Database 23ai",
        "Oracle AI Database 26 AI",
      ],
      deploymentOptions: ["Local", "On-Premise", "Cloud", "Hybrid"],
    },
  },
  {
    id: "sql-performance-agent-kit",
    slug: "sql-performance-agent-kit",
    name: "SQL Performance Agent Kit",
    category: "Performance",
    shortDescription:
      "Query analysis, tuning & optimization for Oracle environments.",
    longDescription:
      "The SQL Performance Agent Kit provides a structured suite of agents and skills for identifying, analyzing, and resolving Oracle SQL performance issues. From execution plan analysis to wait event diagnosis, this kit gives you agentic intelligence over your database workload.",
    businessProblem:
      "SQL performance problems are among the most costly and time-consuming issues in Oracle environments. Identifying problematic queries, reading execution plans, correlating wait events, and forming optimization recommendations requires deep expertise. The SQL Performance Agent Kit encodes that expertise into reusable agents.",
    icon: "Zap",
    price: { amount: 39, currency: "USD", label: "$39" },
    status: "Development",
    verificationStatus: "Development",
    agentCount: 10,
    skillCount: 18,
    workflowCount: 5,
    featured: true,
    popular: false,
    capabilities: [
      "SQL Statement Analysis",
      "Execution Plan Analysis",
      "Query Performance Profiling",
      "Index Utilization Analysis",
      "Wait Event Correlation",
      "SQL Tuning Recommendations",
      "Performance Bottleneck Detection",
      "Query Comparison",
      "Optimization Recommendations",
      "Performance Report Generation",
    ],
    features: [
      {
        title: "Execution Plan Intelligence",
        description:
          "Deep analysis of Oracle execution plans to identify full table scans, inefficient joins, and missing indexes.",
      },
      {
        title: "Wait Event Correlation",
        description:
          "Correlates SQL performance with Oracle wait events to identify systemic bottlenecks.",
      },
      {
        title: "Optimization Recommendations",
        description:
          "Structured, actionable recommendations for SQL tuning rather than raw data dumps.",
      },
      {
        title: "Workload Comparison",
        description:
          "Compare query performance across time periods or environments to detect regressions.",
      },
    ],
    whatIsIncluded: [
      "10+ Agent definitions",
      "18+ Skill definitions",
      "5 Automated workflows",
      "SQL analysis scripts",
      "Configuration files",
      "Deployment documentation",
      "Example reports",
    ],
    agents: [
      "sql-analysis-agent",
      "execution-plan-agent",
      "query-performance-agent",
      "index-analysis-agent",
      "wait-event-agent",
      "sql-tuning-agent",
      "bottleneck-detection-agent",
      "query-comparison-agent",
    ],
    skills: [
      "execution-plan-analysis",
      "wait-event-analysis",
      "sql-statistics",
      "index-utilization",
      "performance-report-generation",
    ],
    compatibility: {
      databases: [
        "Oracle Database 19c",
        "Oracle Database 21c",
        "Oracle Database 23ai",
        "Oracle AI Database 26 AI",
      ],
      deploymentOptions: ["Local", "On-Premise", "Cloud", "Hybrid"],
    },
  },
  {
    id: "oracle-security-agent-kit",
    slug: "oracle-security-agent-kit",
    name: "Security & Compliance Agent Kit",
    category: "Security",
    shortDescription:
      "Privilege audit, user analysis & compliance for Oracle environments.",
    longDescription:
      "The Oracle Security Agent Kit delivers a structured approach to Oracle database security analysis. It audits user privileges, roles, authentication configuration, and access patterns to help identify risk and enforce security standards.",
    businessProblem:
      "Oracle security misconfigurations, excessive privileges, and weak authentication settings are persistent risks in enterprise environments. Security audits are infrequent and manual. The Oracle Security Agent Kit makes security analysis systematic, repeatable, and actionable.",
    icon: "Shield",
    price: { amount: 39, currency: "USD", label: "$39" },
    status: "Development",
    verificationStatus: "Development",
    agentCount: 8,
    skillCount: 14,
    workflowCount: 4,
    featured: true,
    popular: false,
    capabilities: [
      "User Audit",
      "Privilege Analysis",
      "Role Analysis",
      "Access Risk Assessment",
      "Security Configuration Audit",
      "Authentication Analysis",
      "Database Security Audit",
      "Security Reporting",
    ],
    features: [
      {
        title: "Privilege Audit",
        description:
          "Identifies excessive system and object privileges, DBA role grants, and privilege escalation risks.",
      },
      {
        title: "Access Risk Analysis",
        description:
          "Assesses user access patterns and identifies accounts with unnecessary or dangerous permissions.",
      },
      {
        title: "Configuration Security",
        description:
          "Analyzes Oracle security-relevant configuration parameters for deviations from best practices.",
      },
      {
        title: "Structured Risk Reports",
        description:
          "Produces prioritized security findings with risk classifications and remediation guidance.",
      },
    ],
    whatIsIncluded: [
      "8+ Agent definitions",
      "14+ Skill definitions",
      "4 Automated workflows",
      "Security audit scripts",
      "Configuration files",
      "Deployment documentation",
    ],
    agents: [
      "user-audit-agent",
      "privilege-analysis-agent",
      "role-analysis-agent",
      "access-risk-agent",
      "security-config-agent",
      "authentication-analysis-agent",
      "security-audit-agent",
      "security-reporting-agent",
    ],
    skills: [
      "privilege-analysis",
      "role-analysis",
      "authentication-analysis",
      "configuration-analysis",
      "security-report-generation",
    ],
    compatibility: {
      databases: [
        "Oracle Database 19c",
        "Oracle Database 21c",
        "Oracle Database 23ai",
        "Oracle AI Database 26 AI",
      ],
      deploymentOptions: ["Local", "On-Premise", "Cloud", "Hybrid"],
    },
  },
  {
    id: "schema-intelligence-kit",
    slug: "schema-intelligence-kit",
    name: "Schema Documentation Agent Kit",
    category: "Schema & Documentation",
    shortDescription:
      "Auto docs, diagrams & metadata for Oracle schemas.",
    longDescription:
      "The Schema Intelligence Kit automates the analysis and documentation of Oracle database schemas. It discovers object relationships, generates dependency maps, produces data dictionaries, and documents DDL — turning opaque legacy schemas into well-understood, navigable assets.",
    businessProblem:
      "Oracle database schemas accumulate complexity over years of development. Object dependencies, undocumented relationships, and legacy DDL become obstacles to maintenance, migration, and onboarding. The Schema Intelligence Kit makes schema knowledge systematic and accessible.",
    icon: "GitBranch",
    price: { amount: 29, currency: "USD", label: "$29" },
    status: "Development",
    verificationStatus: "Development",
    agentCount: 6,
    skillCount: 12,
    workflowCount: 4,
    featured: false,
    popular: false,
    capabilities: [
      "Schema Documentation",
      "Metadata Analysis",
      "Object Dependency Analysis",
      "ERD Generation",
      "DDL Documentation",
      "Data Dictionary Generation",
      "Object Inventory",
      "Schema Relationship Analysis",
    ],
    features: [
      {
        title: "Automated Documentation",
        description:
          "Generates structured documentation for tables, views, procedures, and all schema objects.",
      },
      {
        title: "Dependency Mapping",
        description:
          "Identifies and visualizes object dependencies to support impact analysis and migration planning.",
      },
      {
        title: "Data Dictionary",
        description:
          "Produces formatted data dictionary reports from Oracle metadata for any schema.",
      },
      {
        title: "ERD Intelligence",
        description:
          "Analyzes foreign key relationships and generates entity relationship descriptions.",
      },
    ],
    whatIsIncluded: [
      "6+ Agent definitions",
      "12+ Skill definitions",
      "4 Automated workflows",
      "Documentation templates",
      "Configuration files",
      "Example documentation outputs",
    ],
    agents: [
      "schema-documentation-agent",
      "metadata-analysis-agent",
      "object-dependency-agent",
      "erd-generation-agent",
      "ddl-documentation-agent",
      "data-dictionary-agent",
    ],
    skills: [
      "metadata-analysis",
      "dependency-analysis",
      "ddl-analysis",
      "object-inventory",
      "documentation-generation",
    ],
    compatibility: {
      databases: [
        "Oracle Database 19c",
        "Oracle Database 21c",
        "Oracle Database 23ai",
        "Oracle AI Database 26 AI",
      ],
      deploymentOptions: ["Local", "On-Premise", "Cloud", "Hybrid"],
    },
  },
  {
    id: "oracle-migration-agent-kit",
    slug: "oracle-migration-agent-kit",
    name: "Data Migration Agent Kit",
    category: "Migration",
    shortDescription:
      "Migration planning & validation for Oracle database environments.",
    longDescription:
      "The Oracle Migration Agent Kit provides agents and skills for assessing, planning, and validating Oracle database migrations. Whether migrating between Oracle versions, to Oracle Cloud, or to Oracle AI Database, this kit delivers structured intelligence at every stage of the migration lifecycle.",
    businessProblem:
      "Oracle database migrations are high-risk projects that require thorough assessment of dependencies, compatibility, data integrity, and operational readiness. Manual assessment is incomplete and slow. The Oracle Migration Agent Kit makes migration analysis systematic and repeatable.",
    icon: "ArrowRightLeft",
    price: { amount: 39, currency: "USD", label: "$39" },
    status: "Development",
    verificationStatus: "Development",
    agentCount: 8,
    skillCount: 14,
    workflowCount: 5,
    featured: false,
    popular: false,
    capabilities: [
      "Migration Assessment",
      "Dependency Analysis",
      "Compatibility Analysis",
      "Migration Planning",
      "DDL Analysis",
      "Data Validation",
      "Risk Analysis",
      "Migration Readiness Reporting",
    ],
    features: [
      {
        title: "Pre-Migration Assessment",
        description:
          "Systematic assessment of database objects, dependencies, and configuration before migration.",
      },
      {
        title: "Risk Classification",
        description:
          "Identifies and classifies migration risks by severity and category.",
      },
      {
        title: "Readiness Reports",
        description:
          "Produces structured migration readiness reports with actionable findings.",
      },
      {
        title: "Compatibility Analysis",
        description:
          "Analyzes deprecated features, syntax changes, and compatibility considerations.",
      },
    ],
    whatIsIncluded: [
      "8+ Agent definitions",
      "14+ Skill definitions",
      "5 Automated workflows",
      "Assessment scripts",
      "Configuration files",
      "Deployment documentation",
    ],
    agents: [
      "migration-assessment-agent",
      "dependency-analysis-agent",
      "compatibility-agent",
      "migration-planning-agent",
      "ddl-analysis-agent",
      "data-validation-agent",
      "risk-analysis-agent",
      "readiness-report-agent",
    ],
    skills: [
      "dependency-analysis",
      "compatibility-analysis",
      "ddl-analysis",
      "data-validation",
      "risk-classification",
      "migration-report-generation",
    ],
    compatibility: {
      databases: [
        "Oracle Database 19c",
        "Oracle Database 21c",
        "Oracle Database 23ai",
        "Oracle AI Database 26 AI",
      ],
      deploymentOptions: ["Local", "On-Premise", "Cloud", "Hybrid"],
    },
  },
  {
    id: "oracle-ai-database-kit",
    slug: "business-intelligence-agent-kit",
    name: "Business Intelligence Agent Kit",
    category: "Business Intelligence",
    shortDescription:
      "Data insights, dashboards & reports for Oracle environments.",
    longDescription:
      "The Business Intelligence Agent Kit delivers data insights, automated reporting, and dashboard-ready analytics for Oracle database environments. It orchestrates agents that extract, analyze, and present operational intelligence in actionable formats for business stakeholders.",
    businessProblem:
      "Business and operations teams need timely, accurate intelligence from Oracle databases without relying on manual SQL queries or dedicated reporting teams. The Business Intelligence Agent Kit packages that analytical capability into automated, repeatable agentic workflows.",
    icon: "BarChart2",
    price: { amount: 49, currency: "USD", label: "$49" },
    status: "Development",
    verificationStatus: "Development",
    agentCount: 12,
    skillCount: 20,
    workflowCount: 6,
    featured: true,
    popular: false,
    new: true,
    capabilities: [
      "Data Insights",
      "Dashboard Generation",
      "Automated Reporting",
      "Chart & Visualization Output",
      "KPI Extraction",
      "Trend Analysis",
      "Executive Summaries",
      "Scheduled Reports",
      "Custom Report Templates",
      "Intelligent Reporting",
    ],
    features: [
      {
        title: "Automated Reports",
        description:
          "Generates structured, readable reports from Oracle data on demand or on schedule.",
      },
      {
        title: "Data Insights",
        description:
          "Extracts meaningful patterns and trends from Oracle operational data.",
      },
      {
        title: "Dashboard Output",
        description:
          "Produces chart-ready and dashboard-compatible data exports for business teams.",
      },
      {
        title: "Intelligent Summaries",
        description:
          "AI-synthesized summaries that translate raw Oracle data into business language.",
      },
    ],
    whatIsIncluded: [
      "12+ Agent definitions",
      "20+ Skill definitions",
      "6 Automated workflows",
      "Report templates",
      "Configuration files",
      "Deployment documentation",
      "Example outputs",
    ],
    agents: [
      "bi-reporting-agent",
      "data-insights-agent",
      "dashboard-generation-agent",
      "kpi-extraction-agent",
      "trend-analysis-agent",
      "executive-summary-agent",
      "scheduled-report-agent",
      "chart-output-agent",
    ],
    skills: [
      "report-generation",
      "data-analysis",
      "chart-generation",
      "trend-detection",
      "intelligent-reporting",
    ],
    compatibility: {
      databases: [
        "Oracle Database 19c",
        "Oracle Database 21c",
        "Oracle Database 23ai",
        "Oracle AI Database 26 AI",
      ],
      deploymentOptions: ["Local", "On-Premise", "Cloud", "Hybrid"],
    },
  },
];

export const getFeaturedKits = (): AgentKit[] =>
  agentKits.filter((k) => k.featured);

export const getKitBySlug = (slug: string): AgentKit | undefined =>
  agentKits.find((k) => k.slug === slug);

export const getKitsByCategory = (category: string): AgentKit[] =>
  agentKits.filter((k) => k.category === category);

import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "instance-analysis",
    name: "Instance Analysis",
    category: "Database Administration",
    description:
      "Analyzes Oracle instance state, availability, startup time, and key instance-level metrics from V$INSTANCE and V$DATABASE.",
    usedBy: ["Database Health Agent", "Database Config Agent"],
    verificationStatus: "Development",
    tags: ["DBA", "monitoring", "instance"],
  },
  {
    id: "tablespace-analysis",
    name: "Tablespace Analysis",
    category: "Database Administration",
    description:
      "Analyzes Oracle tablespace utilization, autoextend configuration, and space management using DBA_TABLESPACES and DBA_DATA_FILES.",
    usedBy: ["Database Health Agent", "Tablespace Analysis Agent"],
    verificationStatus: "Development",
    tags: ["DBA", "storage", "tablespace"],
  },
  {
    id: "session-analysis",
    name: "Session Analysis",
    category: "Database Administration",
    description:
      "Analyzes active database sessions, identifies long-running and blocked sessions using V$SESSION and related views.",
    usedBy: ["Database Health Agent", "Session Monitoring Agent"],
    verificationStatus: "Development",
    tags: ["DBA", "sessions", "monitoring"],
  },
  {
    id: "lock-analysis",
    name: "Lock Analysis",
    category: "Database Administration",
    description:
      "Detects lock contention, blocking session chains, and lock holder/waiter relationships using V$LOCK and V$SESSION.",
    usedBy: ["Session Monitoring Agent", "Lock Analysis Agent"],
    verificationStatus: "Development",
    tags: ["DBA", "locking", "performance"],
  },
  {
    id: "object-analysis",
    name: "Object Analysis",
    category: "Database Administration",
    description:
      "Analyzes database objects, identifies invalid objects, disabled constraints, and object compilation issues.",
    usedBy: ["Database Health Agent", "Invalid Object Agent"],
    verificationStatus: "Development",
    tags: ["DBA", "objects", "validation"],
  },
  {
    id: "privilege-analysis",
    name: "Privilege Analysis",
    category: "Security",
    description:
      "Analyzes system privileges, object privileges, and role grants using DBA_SYS_PRIVS, DBA_TAB_PRIVS, and DBA_ROLE_PRIVS.",
    usedBy: ["User Audit Agent", "Privilege Analysis Agent", "Database Health Agent"],
    verificationStatus: "Development",
    tags: ["security", "privileges", "audit"],
  },
  {
    id: "authentication-analysis",
    name: "Authentication Analysis",
    category: "Security",
    description:
      "Analyzes Oracle user authentication methods, profile configurations, password expiry, and account status.",
    usedBy: ["User Audit Agent", "Authentication Analysis Agent"],
    verificationStatus: "Development",
    tags: ["security", "authentication", "users"],
  },
  {
    id: "execution-plan-analysis",
    name: "Execution Plan Analysis",
    category: "Performance",
    description:
      "Retrieves and interprets Oracle execution plans from V$SQL_PLAN, identifying full table scans, inefficient joins, and plan regressions.",
    usedBy: ["Execution Plan Analysis Agent", "SQL Analysis Agent"],
    verificationStatus: "Development",
    tags: ["performance", "SQL", "execution-plan"],
  },
  {
    id: "wait-event-analysis",
    name: "Wait Event Analysis",
    category: "Performance",
    description:
      "Analyzes Oracle wait events from V$SESSION_WAIT and V$SYSTEM_EVENT to identify performance bottlenecks.",
    usedBy: ["Wait Event Agent", "Performance Diagnostic Agent"],
    verificationStatus: "Development",
    tags: ["performance", "wait-events", "diagnostics"],
  },
  {
    id: "sql-statistics",
    name: "SQL Statistics",
    category: "Performance",
    description:
      "Collects and analyzes SQL execution statistics from V$SQL including elapsed time, CPU, logical reads, and execution counts.",
    usedBy: ["SQL Analysis Agent", "Performance Diagnostic Agent"],
    verificationStatus: "Development",
    tags: ["performance", "SQL", "statistics"],
  },
  {
    id: "index-utilization",
    name: "Index Utilization",
    category: "Performance",
    description:
      "Analyzes index usage patterns, identifies unused and under-used indexes, and assesses index efficiency.",
    usedBy: ["Index Analysis Agent", "Execution Plan Analysis Agent"],
    verificationStatus: "Development",
    tags: ["performance", "indexes", "optimization"],
  },
  {
    id: "configuration-analysis",
    name: "Configuration Analysis",
    category: "Database Administration",
    description:
      "Analyzes Oracle initialization parameters, identifies deviations from recommended settings, and produces configuration reports.",
    usedBy: ["Database Config Agent", "Database Health Agent", "Security Config Agent"],
    verificationStatus: "Development",
    tags: ["DBA", "configuration", "parameters"],
  },
  {
    id: "metadata-analysis",
    name: "Metadata Analysis",
    category: "Schema & Documentation",
    description:
      "Extracts and analyzes Oracle schema metadata from ALL_OBJECTS, ALL_TAB_COLUMNS, ALL_CONSTRAINTS, and related catalog views.",
    usedBy: ["Schema Documentation Agent", "Metadata Analysis Agent"],
    verificationStatus: "Development",
    tags: ["schema", "metadata", "documentation"],
  },
  {
    id: "dependency-analysis",
    name: "Dependency Analysis",
    category: "Schema & Documentation",
    description:
      "Maps Oracle object dependencies using ALL_DEPENDENCIES to identify impact chains and migration risks.",
    usedBy: ["Object Dependency Agent", "Migration Assessment Agent"],
    verificationStatus: "Development",
    tags: ["schema", "dependencies", "migration"],
  },
  {
    id: "ddl-analysis",
    name: "DDL Analysis",
    category: "Migration",
    description:
      "Extracts and analyzes DDL for Oracle objects using DBMS_METADATA, identifying deprecated syntax and compatibility issues.",
    usedBy: ["DDL Documentation Agent", "Migration Assessment Agent"],
    verificationStatus: "Development",
    tags: ["migration", "DDL", "compatibility"],
  },
  {
    id: "compatibility-analysis",
    name: "Compatibility Analysis",
    category: "Migration",
    description:
      "Analyzes Oracle database objects and configuration for version-to-version compatibility considerations.",
    usedBy: ["Compatibility Agent", "Migration Assessment Agent"],
    verificationStatus: "Development",
    tags: ["migration", "compatibility", "versioning"],
  },
  {
    id: "report-generation",
    name: "Report Generation",
    category: "Database Administration",
    description:
      "Generates structured, formatted reports from agent analysis results in text, Markdown, or structured formats.",
    usedBy: ["Database Reporting Agent", "Database Health Agent"],
    verificationStatus: "Development",
    tags: ["reporting", "output", "formatting"],
  },
  {
    id: "ai-database-analysis",
    name: "AI Database Analysis",
    category: "Oracle AI Database",
    description:
      "AI-assisted analysis of Oracle AI Database state, leveraging enhanced metadata and AI-native capabilities.",
    usedBy: ["AI Database Assistant", "Database Intelligence Agent"],
    verificationStatus: "Development",
    tags: ["oracle-ai", "analysis", "intelligence"],
  },
  {
    id: "natural-language-query",
    name: "Natural Language Query",
    category: "Oracle AI Database",
    description:
      "Translates natural language analysis requests into structured Oracle interrogation workflows.",
    usedBy: ["AI Database Assistant", "Natural Language Analysis Agent"],
    verificationStatus: "Development",
    tags: ["oracle-ai", "NLP", "query"],
  },
  {
    id: "intelligent-reporting",
    name: "Intelligent Reporting",
    category: "Oracle AI Database",
    description:
      "AI-generated reporting that interprets analysis results and produces natural language findings with recommendations.",
    usedBy: ["AI Database Assistant", "Database Intelligence Agent"],
    verificationStatus: "Development",
    tags: ["oracle-ai", "reporting", "AI"],
  },
];

export const getSkillsByCategory = (category: string): Skill[] =>
  skills.filter((s) => s.category === category);

export const skillCategories = [
  "All",
  "Database Administration",
  "Performance",
  "Security",
  "Schema & Documentation",
  "Migration",
  "Oracle AI Database",
];

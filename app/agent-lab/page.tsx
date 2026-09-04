"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect, useRef } from "react";
import { WorkflowDiagram } from "@/components/agent-lab/WorkflowDiagram";
import { DemoResult } from "@/components/agent-lab/DemoResult";
import { AlertTriangle, Play, RotateCcw } from "lucide-react";

const WORKFLOWS = [
  {
    id: "db-health",
    label: "Database Health Analysis",
    steps: [
      { label: "User Request", detail: "Analyze Oracle database health" },
      { label: "Database Health Agent", detail: "Initializing health analysis workflow" },
      { label: "Collect Instance Information", detail: "Querying V$INSTANCE, V$DATABASE" },
      { label: "Analyze Tablespaces", detail: "Checking DBA_TABLESPACES, DBA_DATA_FILES" },
      { label: "Analyze Sessions", detail: "Reviewing V$SESSION for active sessions" },
      { label: "Detect Potential Issues", detail: "Evaluating findings against thresholds" },
      { label: "Generate Health Report", detail: "Compiling structured health report" },
    ],
    result: {
      title: "DATABASE HEALTH SUMMARY",
      status: "Healthy",
      items: [
        { label: "Overall Status", value: "Healthy", variant: "success" as const },
        { label: "Tablespace Utilization", value: "Normal (72% avg)", variant: "success" as const },
        { label: "Invalid Objects", value: "2 found", variant: "warning" as const },
        { label: "Long Running Sessions", value: "1 detected", variant: "warning" as const },
        { label: "Active Sessions", value: "14", variant: "neutral" as const },
        { label: "Potential Issues", value: "3 identified", variant: "warning" as const },
      ],
      recommendation:
        "Review the 2 invalid objects and investigate the long-running session. Overall database health is satisfactory.",
    },
  },
  {
    id: "sql-perf",
    label: "SQL Performance Review",
    steps: [
      { label: "User Request", detail: "Identify top SQL performance issues" },
      { label: "SQL Analysis Agent", detail: "Initializing SQL workload analysis" },
      { label: "Query Shared Pool", detail: "Analyzing V$SQL for high-resource statements" },
      { label: "Analyze Execution Plans", detail: "Retrieving plans from V$SQL_PLAN" },
      { label: "Identify Bottlenecks", detail: "Correlating wait events and CPU usage" },
      { label: "Generate Recommendations", detail: "Formulating optimization guidance" },
      { label: "Produce SQL Report", detail: "Compiling structured performance report" },
    ],
    result: {
      title: "SQL PERFORMANCE SUMMARY",
      status: "Issues Found",
      items: [
        { label: "High CPU Statements", value: "3 identified", variant: "warning" as const },
        { label: "Full Table Scans", value: "5 statements", variant: "warning" as const },
        { label: "Missing Index Candidates", value: "2 tables", variant: "warning" as const },
        { label: "Top Wait Event", value: "db file sequential read", variant: "neutral" as const },
        { label: "Optimization Opportunities", value: "7 found", variant: "warning" as const },
        { label: "Immediate Action Items", value: "2 critical", variant: "error" as const },
      ],
      recommendation:
        "Address the 2 critical statements causing full table scans. Review index candidates for the identified tables.",
    },
  },
  {
    id: "security",
    label: "Security Audit",
    steps: [
      { label: "User Request", detail: "Audit Oracle database security posture" },
      { label: "Security Audit Agent", detail: "Initializing security analysis" },
      { label: "Analyze Users & Privileges", detail: "Reviewing DBA_SYS_PRIVS, DBA_TAB_PRIVS" },
      { label: "Check Role Grants", detail: "Reviewing DBA_ROLE_PRIVS for risky roles" },
      { label: "Assess Configuration", detail: "Checking security-relevant init parameters" },
      { label: "Classify Risks", detail: "Applying risk scoring to findings" },
      { label: "Generate Security Report", detail: "Compiling structured audit report" },
    ],
    result: {
      title: "SECURITY AUDIT SUMMARY",
      status: "Review Required",
      items: [
        { label: "Users with DBA Role", value: "4 accounts", variant: "warning" as const },
        { label: "Excessive Privileges", value: "7 findings", variant: "warning" as const },
        { label: "Default Accounts Active", value: "2 detected", variant: "error" as const },
        { label: "Auth Configuration", value: "Reviewed", variant: "neutral" as const },
        { label: "High Risk Findings", value: "3 items", variant: "error" as const },
        { label: "Medium Risk Findings", value: "5 items", variant: "warning" as const },
      ],
      recommendation:
        "Immediately review the 2 active default accounts. Assess DBA role grants for the 4 identified users.",
    },
  },
];

export default function AgentLabPage() {
  const [selectedId, setSelectedId] = useState(WORKFLOWS[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isDone, setIsDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const workflow = WORKFLOWS.find((w) => w.id === selectedId)!;

  function handleRun() {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setIsDone(false);
  }

  function handleReset() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setCurrentStep(-1);
    setIsDone(false);
  }

  function handleSelectWorkflow(id: string) {
    handleReset();
    setSelectedId(id);
  }

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        const next = prev + 1;
        if (next >= workflow.steps.length) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          setIsDone(true);
          return prev;
        }
        return next;
      });
    }, 850);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, workflow.steps.length]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <h1 className="text-4xl font-bold text-navy-950 mb-2">Agent Lab</h1>
          <p className="text-navy-600 max-w-2xl">
            See how agentic workflows operate. Select a workflow, run the demo, and observe how
            agents analyze, reason, and produce structured output.
          </p>
        </div>
      </div>

      <div className="container-wide py-10">
        {/* Demo disclaimer */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-800 text-sm">DEMO ENVIRONMENT</span>
            <p className="text-amber-700 text-sm mt-0.5">
              All workflows use simulated data. No real Oracle database connection is made. Output
              shown is representative sample data for demonstration purposes only.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: workflow selector + controls */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-navy-500 uppercase tracking-wide mb-3">
                Select Workflow
              </h2>
              <div className="space-y-2">
                {WORKFLOWS.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => handleSelectWorkflow(w.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                      selectedId === w.id
                        ? "bg-brand-blue text-white border-brand-blue"
                        : "bg-white text-navy-700 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-blue text-white rounded-lg font-semibold text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Play className="w-4 h-4" />
                Run Demo
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-300 text-navy-600 rounded-lg font-medium text-sm hover:border-slate-400 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {isRunning && (
              <div className="text-sm text-navy-500 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                Executing workflow...
              </div>
            )}
          </div>

          {/* Center/Right: workflow diagram + result */}
          <div className="lg:col-span-2 space-y-6">
            <WorkflowDiagram
              steps={workflow.steps}
              currentStep={currentStep}
              isRunning={isRunning}
            />

            {isDone && (
              <DemoResult result={workflow.result} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

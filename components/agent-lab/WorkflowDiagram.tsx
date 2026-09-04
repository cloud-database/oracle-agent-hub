"use client";

import { cn } from "@/lib/utils";

interface WorkflowStep {
  label: string;
  detail: string;
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
  isRunning: boolean;
  currentStep: number;
}

export function WorkflowDiagram({ steps, isRunning, currentStep }: WorkflowDiagramProps) {
  return (
    <div className="space-y-0" role="list" aria-label="Workflow steps">
      {steps.map((step, i) => {
        const stepNum = i + 1;
        const isDone = currentStep >= stepNum;
        const isActive = currentStep === stepNum - 1 && isRunning;
        const isPending = currentStep < stepNum - 1 && !isActive;

        return (
          <div key={i} role="listitem">
            <div className="flex items-start gap-4">
              {/* Step number circle */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-500 flex-shrink-0",
                    isDone
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : isActive
                      ? "bg-brand-blue border-brand-blue text-white animate-pulse"
                      : "bg-white border-slate-200 text-slate-400"
                  )}
                  aria-hidden="true"
                >
                  {isDone ? "✓" : stepNum}
                </div>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-0.5 h-6 transition-all duration-500",
                      isDone ? "bg-emerald-400" : "bg-slate-200"
                    )}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Step content */}
              <div
                className={cn(
                  "pb-6 flex-1 transition-all duration-500",
                  isActive ? "opacity-100" : isPending ? "opacity-40" : "opacity-100"
                )}
              >
                <p
                  className={cn(
                    "text-sm font-semibold transition-colors duration-300",
                    isActive ? "text-brand-blue" : isDone ? "text-navy-900" : "text-slate-400"
                  )}
                >
                  {step.label}
                  {isActive && (
                    <span className="ml-2 inline-flex gap-0.5" aria-label="processing">
                      <span className="w-1 h-1 rounded-full bg-brand-blue animate-bounce [animation-delay:0ms]" />
                      <span className="w-1 h-1 rounded-full bg-brand-blue animate-bounce [animation-delay:150ms]" />
                      <span className="w-1 h-1 rounded-full bg-brand-blue animate-bounce [animation-delay:300ms]" />
                    </span>
                  )}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{step.detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

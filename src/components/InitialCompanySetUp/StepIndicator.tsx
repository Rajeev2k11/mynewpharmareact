import React from "react";
import { Progress } from "../ui/progress";
import {
  Clock,
  Sparkles,
  CheckCircle2,
  Star,
  Building2,
  MapPin,
  Users,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Company Details",
    icon: Building2,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 2,
    title: "Locations",
    icon: MapPin,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Business Functions",
    icon: Users,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Review & Complete",
    icon: Rocket,
    color: "from-orange-500 to-red-600",
  },
];

export default function StepIndicator({ currentStep, totalSteps, completedSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;
  return (
    <div className="mb-6 relative z-10">
      {/* Progress bar */}
      <div className="mb-4">
        <div className="relative">
          <Progress
            value={progressPercentage}
            className="h-2 bg-[var(--theme-secondary)] rounded-full overflow-hidden"
          />
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-ring)] transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-[var(--theme-muted-foreground)]" />
            <span className="text-xs text-[var(--theme-muted-foreground)]">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[var(--theme-primary)]">
              {Math.round(progressPercentage)}% Complete
            </span>
            <Sparkles className="w-3 h-3 text-[var(--theme-primary)]" />
          </div>
        </div>
      </div>
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = completedSteps.has(step.id);
          const StepIcon = step.icon;
          return (
            <div
              key={step.id}
              className={`flex items-center gap-2 transition-all duration-300 ${
                isActive ? "transform scale-105" : ""
              }`}
            >
              {/* Step circle */}
              <div
                className={`
                relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group cursor-pointer
                ${
                  isActive
                    ? `bg-gradient-to-br ${step.color} text-white shadow-lg`
                    : ""
                }
                ${
                  isCompleted
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md"
                    : ""
                }
                ${
                  !isActive && !isCompleted
                    ? "bg-[var(--theme-card)] border border-[var(--theme-border)] text-[var(--theme-muted-foreground)] hover:border-[var(--theme-primary)]"
                    : ""
                }
              `}
              >
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow">
                  <span className="text-xs font-bold text-[var(--theme-primary)]">
                    {step.id}
                  </span>
                </div>
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <StepIcon className="w-4 h-4" />
                )}
              </div>
              {(isActive || isCompleted) && (
                <div className="text-left">
                  <div
                    className={`text-sm transition-all duration-300 ${
                      isActive
                        ? "text-[var(--theme-foreground)] font-semibold"
                        : isCompleted
                        ? "text-green-600 font-medium"
                        : "text-[var(--theme-muted-foreground)]"
                    }`}
                  >
                    {step.title}
                    {isCompleted && (
                      <Star className="inline w-3 h-3 ml-1 text-yellow-500" />
                    )}
                  </div>
                </div>
              )}
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="w-4 h-0.5 bg-[var(--theme-border)]">
                  <div
                    className={`h-full bg-[var(--theme-primary)] transition-all duration-500 ${
                      currentStep > step.id ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

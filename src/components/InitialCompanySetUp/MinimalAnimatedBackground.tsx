import React, { useState, useEffect } from "react";

export default function MinimalAnimatedBackground({ currentStep }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Step-based color themes
  const getStepTheme = (step) => {
    switch (step) {
      case 1:
        return { primary: "#3b82f6", secondary: "#60a5fa", accent: "#93c5fd" };
      case 2:
        return { primary: "#10b981", secondary: "#34d399", accent: "#6ee7b7" };
      case 3:
        return { primary: "#8b5cf6", secondary: "#a78bfa", accent: "#c4b5fd" };
      case 4:
        return { primary: "#f59e0b", secondary: "#fbbf24", accent: "#fde68a" };
      default:
        return { primary: "#3b82f6", secondary: "#60a5fa", accent: "#93c5fd" };
    }
  };

  const theme = getStepTheme(currentStep);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Gradient Background */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `linear-gradient(135deg, 
            ${theme.primary}08 0%, 
            ${theme.secondary}05 25%, 
            ${theme.accent}03 50%, 
            transparent 75%)`,
        }}
      />
      {/* Minimal Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.primary} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Floating Minimal Particles */}
      <div className="absolute inset-0">
        {/* Large subtle circles */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-5 transition-all duration-1000 animate-company-setup-gentle-float"
          style={{
            background: `radial-gradient(circle, ${theme.primary}20 0%, transparent 70%)`,
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-5 transition-all duration-1000 animate-company-setup-gentle-float-reverse"
          style={{
            background: `radial-gradient(circle, ${theme.secondary}20 0%, transparent 70%)`,
            top: "60%",
            right: "15%",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-5 transition-all duration-1000 animate-company-setup-gentle-float-slow"
          style={{
            background: `radial-gradient(circle, ${theme.accent}20 0%, transparent 70%)`,
            bottom: "20%",
            left: "20%",
          }}
        />
      </div>
      {/* Subtle Dots */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-2 h-2 rounded-full transition-all duration-1000 animate-company-setup-subtle-pulse"
          style={{
            background: theme.primary,
            top: "20%",
            left: "25%",
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full transition-all duration-1000 animate-company-setup-subtle-pulse-delayed"
          style={{
            background: theme.secondary,
            top: "70%",
            right: "30%",
          }}
        />
        <div
          className="absolute w-1 h-1 rounded-full transition-all duration-1000 animate-company-setup-subtle-pulse-slow"
          style={{
            background: theme.accent,
            bottom: "30%",
            left: "60%",
          }}
        />
      </div>
    </div>
  );
}

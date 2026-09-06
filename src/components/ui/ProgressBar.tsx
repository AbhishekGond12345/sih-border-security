import React from 'react';
import { cn } from '../layout/Sidebar';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  className?: string;
}

export function ProgressBar({ 
  value, 
  max = 100, 
  color = "bg-cyan-500", 
  className 
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={cn("w-full bg-slate-800 rounded-full h-2 overflow-hidden", className)}>
      <div 
        className={cn("h-full transition-all duration-500 ease-out", color)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

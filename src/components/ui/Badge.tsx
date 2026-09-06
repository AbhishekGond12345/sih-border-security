import React from 'react';
import { cn } from '../layout/Sidebar';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  const variants = {
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    error: 'bg-red-500/10 text-red-400 border border-red-500/20',
    info: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    default: 'bg-slate-700/30 text-slate-300 border border-slate-600/30',
  };

  return (
    <span 
      className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide", variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}

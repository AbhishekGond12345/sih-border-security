import React from 'react';

export function RiskMeter({ score }: { score: number }) {
  let color = 'text-emerald-400';
  let stroke = 'stroke-emerald-400';
  let level = 'LOW RISK';
  
  if (score > 30) {
    color = 'text-amber-400';
    stroke = 'stroke-amber-400';
    level = 'MEDIUM RISK';
  }
  if (score > 60) {
    color = 'text-orange-500';
    stroke = 'stroke-orange-500';
    level = 'ELEVATED RISK';
  }
  if (score > 80) {
    color = 'text-red-500';
    stroke = 'stroke-red-500';
    level = 'HIGH RISK';
  }

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            className="stroke-slate-800 fill-none"
            strokeWidth="8"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            className={`${stroke} fill-none transition-all duration-1000 ease-out`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className={`text-3xl font-bold ${color}`}>{score}</span>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">/ 100</span>
        </div>
      </div>
      <div className={`mt-2 font-semibold tracking-wider text-sm ${color}`}>
        {level}
      </div>
    </div>
  );
}

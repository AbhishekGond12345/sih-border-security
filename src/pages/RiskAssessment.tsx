import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { RiskMeter } from '../components/ui/RiskMeter';
import { ProgressBar } from '../components/ui/ProgressBar';

const RiskAssessment = () => {
  const breakdown = [
    { name: 'Document Authenticity', score: 18, max: 25, color: 'bg-emerald-500' },
    { name: 'Identity Match', score: 12, max: 25, color: 'bg-amber-500' },
    { name: 'Data Consistency', score: 15, max: 20, color: 'bg-emerald-500' },
    { name: 'Tampering Indicators', score: 17, max: 20, color: 'bg-red-500' },
    { name: 'Validity Status', score: 10, max: 10, color: 'bg-emerald-500' },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">AI Risk Assessment</h1>
        <p className="text-slate-400 mt-1">Aggregated risk scoring based on multi-modal analysis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center justify-center p-8 border-t-4 border-t-red-500">
          <RiskMeter score={82} />
          <p className="text-center text-sm text-slate-400 mt-6">
            Score indicates a high probability of document tampering or identity mismatch. Manual investigation required.
          </p>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Risk Factor Breakdown</CardTitle>
          </CardHeader>
          <div className="space-y-6 mt-4">
            {breakdown.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">{item.name}</span>
                  <span className="text-slate-400 font-mono">
                    <span className="text-slate-200">{item.score}</span> / {item.max}
                  </span>
                </div>
                <ProgressBar value={item.score} max={item.max} color={item.color} />
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-lg font-bold">
            <span className="text-slate-300">Total Calculated Risk:</span>
            <span className="text-red-400">72 / 100</span>
          </div>
          <p className="text-xs text-slate-500 text-right mt-1">* Note: Algorithmic weighting applies a +10 penalty for critical tampering indicators.</p>
        </Card>
      </div>
    </div>
  );
};

export default RiskAssessment;

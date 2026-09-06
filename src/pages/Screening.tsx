import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { UploadCloud, Camera, Loader2, CheckCircle2, AlertTriangle, XCircle, ChevronRight } from 'lucide-react';
import { RiskMeter } from '../components/ui/RiskMeter';

const Screening = () => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);

  const startScreening = () => {
    setStatus('processing');
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setStatus('completed');
          return 100;
        }
        return p + 5;
      });
    }, 150);
  };

  const steps = [
    { name: 'OCR Extraction', progress: 20, status: progress > 20 ? 'completed' : progress > 0 ? 'processing' : 'idle' },
    { name: 'Document Validation', progress: 40, status: progress > 40 ? 'completed' : progress > 20 ? 'processing' : 'idle' },
    { name: 'Tampering Detection', progress: 60, status: progress > 60 ? 'warning' : progress > 40 ? 'processing' : 'idle' },
    { name: 'Face Verification', progress: 80, status: progress > 80 ? 'completed' : progress > 60 ? 'processing' : 'idle' },
    { name: 'Risk Assessment', progress: 100, status: progress >= 100 ? 'completed' : progress > 80 ? 'processing' : 'idle' },
  ];

  const renderStatusIcon = (s: string) => {
    if (s === 'completed') return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    if (s === 'warning') return <AlertTriangle className="w-5 h-5 text-amber-400" />;
    if (s === 'failed') return <XCircle className="w-5 h-5 text-red-400" />;
    if (s === 'processing') return <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />;
    return <div className="w-5 h-5 rounded-full border-2 border-slate-700" />;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Start Document Screening</h1>
        <p className="text-slate-400 mt-1">Upload documents to initiate the AI verification pipeline.</p>
      </div>

      {status === 'idle' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col items-center justify-center p-10 border-dashed border-2 border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer bg-slate-900/30 group">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-cyan-900/30 transition-colors">
              <UploadCloud className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-200">Upload Document</h3>
            <p className="text-sm text-slate-500 mt-2 mb-6">Passport / Visa / ID / Permit</p>
            <div className="text-xs text-slate-500 bg-slate-950 px-3 py-1 rounded-full">JPG, PNG, PDF</div>
          </Card>

          <Card className="flex flex-col items-center justify-center p-10 border-dashed border-2 border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer bg-slate-900/30 group">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-cyan-900/30 transition-colors">
              <Camera className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-200">Person Verification Photo</h3>
            <p className="text-sm text-slate-500 mt-2 mb-6">Upload live/person image</p>
            <Button variant="outline" size="sm">Use Camera</Button>
          </Card>

          <div className="md:col-span-2 flex justify-end mt-4">
            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-cyan-900/50" onClick={startScreening}>
              Start AI Screening
            </Button>
          </div>
        </div>
      )}

      {(status === 'processing' || status === 'completed') && (
        <Card>
          <CardHeader>
            <CardTitle>{status === 'processing' ? 'AI Analysis Pipeline Running...' : 'Screening Result'}</CardTitle>
          </CardHeader>
          
          <div className="py-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center">
                    {renderStatusIcon(step.status)}
                    <span className={`ml-4 text-sm font-medium ${step.status !== 'idle' ? 'text-slate-200' : 'text-slate-500'}`}>
                      {step.name}
                    </span>
                    {step.status === 'processing' && (
                      <span className="ml-auto text-xs text-cyan-400 font-mono">{progress}%</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {status === 'completed' && (
              <div className="flex-1 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8 flex flex-col items-center justify-center">
                <RiskMeter score={82} />
                
                <div className="mt-8 w-full space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">AI Findings</h4>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Passport format:</span>
                    <span className="text-emerald-400 flex items-center"><CheckCircle2 className="w-4 h-4 mr-1"/> Valid</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">OCR consistency:</span>
                    <span className="text-amber-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-1"/> Warning</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Photo integrity:</span>
                    <span className="text-red-400 flex items-center"><XCircle className="w-4 h-4 mr-1"/> Suspicious</span>
                  </div>
                </div>

                <Button className="w-full mt-8" variant="secondary" onClick={() => setStatus('idle')}>
                  Scan Another Document
                </Button>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default Screening;

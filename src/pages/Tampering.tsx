import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { AlertTriangle, ScanEye, Ghost } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

const Tampering = () => {
  const forensicTests = [
    { name: 'Photo Replacement (ELA)', score: 91, status: 'High', description: 'Facial photograph region contains visual characteristics inconsistent with the surrounding document security layer.' },
    { name: 'Text Manipulation (Fonts)', score: 12, status: 'Low', description: 'Consistent typography and spacing across standard MRZ and visual zones.' },
    { name: 'Stamp Forgery (Texture)', score: 8, status: 'Low', description: 'No signs of digital insertion on physical stamps.' },
    { name: 'Document Alteration (Compression)', score: 34, status: 'Medium', description: 'Minor compression artifacts detected near edges, possibly due to scan quality.' },
    { name: 'Metadata Analysis', score: 5, status: 'Low', description: 'No suspicious digital modification software tags found in EXIF data.' },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">AI Tampering Detection</h1>
        <p className="text-slate-400 mt-1">Deep forensic analysis to detect digital or physical document manipulation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="flex flex-col relative overflow-hidden h-[600px]">
          <CardHeader className="z-10 relative">
            <CardTitle>Forensic Overlay</CardTitle>
          </CardHeader>
          <div className="absolute inset-0 top-16 m-4 mt-0 border border-slate-700 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
            <ScanEye className="w-16 h-16 text-slate-600 absolute opacity-20" />
            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            {/* Mock heatmap overlay */}
            <div className="absolute top-[20%] left-[10%] w-32 h-40 bg-red-500/30 blur-2xl rounded-full animate-pulse"></div>
            <div className="absolute top-[20%] left-[10%] border-2 border-red-500 w-32 h-40 rounded-sm">
              <div className="absolute -top-6 left-0 bg-red-500 text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider">
                Anomaly Detected
              </div>
            </div>
            
            <p className="text-slate-500 z-10 bg-slate-900/80 px-4 py-2 rounded text-sm">Visual Forensic Heatmap</p>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="bg-red-950/20 border-red-500/30">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-1">Potential Photo Replacement Detected</h3>
                <p className="text-sm text-slate-300">Confidence: <span className="font-bold text-slate-100">91%</span> | Severity: <span className="font-bold text-slate-100">High</span></p>
                <p className="text-sm text-slate-400 mt-2">Facial photograph region contains visual characteristics inconsistent with the surrounding document security layer. Error Level Analysis (ELA) indicates digital tampering.</p>
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forensic Analysis Breakdown</CardTitle>
            </CardHeader>
            <div className="space-y-5">
              {forensicTests.map((test, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-200">{test.name}</span>
                    <Badge variant={test.status === 'High' ? 'error' : test.status === 'Medium' ? 'warning' : 'success'}>
                      {test.status} Risk
                    </Badge>
                  </div>
                  <ProgressBar 
                    value={test.score} 
                    color={test.score > 70 ? 'bg-red-500' : test.score > 30 ? 'bg-amber-500' : 'bg-emerald-500'} 
                  />
                  <p className="text-xs text-slate-400">{test.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tampering;

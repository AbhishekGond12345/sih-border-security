import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { FileText, ChevronRight } from 'lucide-react';

const OcrExtraction = () => {
  const extractedData = [
    { label: 'Full Name', value: 'Rahul Sharma', confidence: 99.2 },
    { label: 'Passport Number', value: 'P12345678', confidence: 98.8 },
    { label: 'Nationality', value: 'IND', confidence: 99.5 },
    { label: 'Date of Birth', value: '14 Feb 1998', confidence: 97.4 },
    { label: 'Gender', value: 'M', confidence: 99.9 },
    { label: 'Date of Issue', value: '21 Aug 2020', confidence: 96.5 },
    { label: 'Date of Expiry', value: '20 Aug 2030', confidence: 98.1 },
    { label: 'Issuing Authority', value: 'RPO DELHI', confidence: 92.4 },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">OCR Extraction</h1>
        <p className="text-slate-400 mt-1">Review text extracted from the document via Optical Character Recognition.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="h-[600px] flex flex-col items-center justify-center border-dashed border-slate-700 bg-slate-900/30">
          <FileText className="w-16 h-16 text-slate-600 mb-4" />
          <p className="text-slate-500">Document Image Preview</p>
          <div className="mt-4 px-4 py-2 bg-slate-800 rounded text-xs text-slate-400 font-mono">
            Bounding boxes will be overlaid here
          </div>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Extracted Information</CardTitle>
          </CardHeader>
          
          <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {extractedData.map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</span>
                  <span className="text-xs font-mono text-cyan-400">{item.confidence}%</span>
                </div>
                <p className="text-lg font-medium text-slate-100 mb-2">{item.value}</p>
                <ProgressBar 
                  value={item.confidence} 
                  color={item.confidence > 95 ? "bg-emerald-500" : "bg-amber-500"} 
                />
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <Button className="w-full">
              Compare with MRZ <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OcrExtraction;

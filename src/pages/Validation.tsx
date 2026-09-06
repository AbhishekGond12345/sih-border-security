import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const Validation = () => {
  const categories = [
    {
      title: 'Document Structure',
      checks: [
        { name: 'Valid layout detected', status: 'pass' },
        { name: 'Expected dimensions (ID-3 format)', status: 'pass' },
        { name: 'Required fields present', status: 'pass' },
      ]
    },
    {
      title: 'Data Validation',
      checks: [
        { name: 'Date formats are ISO standard', status: 'pass' },
        { name: 'Passport number format valid', status: 'pass' },
        { name: 'Nationality code exists (ISO 3166-1)', status: 'pass' },
        { name: 'Expiry date is in the future', status: 'pass' },
      ]
    },
    {
      title: 'Cross-Field Validation',
      checks: [
        { name: 'DOB consistent across visual and MRZ', status: 'pass' },
        { name: 'Name consistent across visual and MRZ', status: 'pass' },
        { name: 'Passport number matches MRZ checksum', status: 'fail', error: 'Machine-readable zone does not match the OCR-extracted passport number.' },
        { name: 'Gender code matches MRZ', status: 'pass' },
      ]
    },
    {
      title: 'Status Validation',
      checks: [
        { name: 'Document not marked expired', status: 'pass' },
        { name: 'Document not in INTERPOL SLTD database', status: 'warning', error: 'Database response delayed, proceeding with caution.' },
        { name: 'Document not flagged in local watchlist', status: 'pass' },
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'pass': return <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />;
      case 'fail': return <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Document Validation</h1>
        <p className="text-slate-400 mt-1">Cross-referencing extracted data with standard document rules and checksums.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <div className="space-y-4 mt-4">
              {category.checks.map((check, cIdx) => (
                <div key={cIdx} className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="flex items-start">
                    {getStatusIcon(check.status)}
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${
                        check.status === 'pass' ? 'text-slate-200' : 
                        check.status === 'warning' ? 'text-amber-400' : 'text-red-400'
                      }`}>
                        {check.name}
                      </p>
                      {check.error && (
                        <p className="text-xs text-slate-400 mt-1 bg-slate-950 p-2 rounded border border-slate-800">
                          {check.error}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Validation;

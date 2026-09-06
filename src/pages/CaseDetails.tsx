import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowLeft, CheckCircle2, Flag, FileWarning, Edit3 } from 'lucide-react';

const CaseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="px-2" onClick={() => navigate('/history')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Case Details</h1>
            <Badge variant="error" className="text-sm">High Risk</Badge>
          </div>
          <p className="text-slate-400 font-mono mt-1">{id || 'SSB-2026-004821'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Subject Information (Demo Data)</CardTitle>
            </CardHeader>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Name</p>
                <p className="text-slate-200 font-medium">Rahul Sharma</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Nationality</p>
                <p className="text-slate-200 font-medium">IND</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">DOB</p>
                <p className="text-slate-200 font-medium">14 Feb 1998</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Gender</p>
                <p className="text-slate-200 font-medium">Male</p>
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Findings Summary</CardTitle>
            </CardHeader>
            <div className="space-y-3">
              <div className="flex items-start p-3 bg-red-950/20 border border-red-500/30 rounded-lg">
                <FileWarning className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-400">Photo Replacement Detected</p>
                  <p className="text-sm text-slate-400 mt-1">91% confidence of digital tampering in the facial photograph region via Error Level Analysis.</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-red-950/20 border border-red-500/30 rounded-lg">
                <FileWarning className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-400">MRZ Checksum Mismatch</p>
                  <p className="text-sm text-slate-400 mt-1">Machine-readable zone checksum does not validate against extracted passport number.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Evidence</CardTitle>
            </CardHeader>
            <div className="grid grid-cols-2 gap-4 h-48">
              <div className="bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-slate-500 text-sm">
                [Document Image Blocked for Demo]
              </div>
              <div className="bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-slate-500 text-sm">
                [Face Match Overlay Blocked for Demo]
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-cyan-500/30">
            <CardHeader>
              <CardTitle>Officer Action Required</CardTitle>
            </CardHeader>
            <div className="space-y-3 mt-4">
              <Button className="w-full justify-start" variant="primary">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Mark as Verified
              </Button>
              <Button className="w-full justify-start border-red-500/50 text-red-400 hover:bg-red-500/10" variant="outline">
                <Flag className="w-4 h-4 mr-2" /> Flag for Investigation
              </Button>
              <Button className="w-full justify-start" variant="secondary">
                <FileWarning className="w-4 h-4 mr-2" /> Request Manual Review
              </Button>
              <Button className="w-full justify-start" variant="secondary">
                <Edit3 className="w-4 h-4 mr-2" /> Add Investigation Note
              </Button>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Case Metadata</CardTitle>
            </CardHeader>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Screening Date</span>
                <span className="text-slate-300">06 Sep 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Checkpoint</span>
                <span className="text-slate-300">Demo Checkpoint</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Document Type</span>
                <span className="text-slate-300">Passport</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;

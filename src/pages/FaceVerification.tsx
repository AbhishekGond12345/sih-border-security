import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { UserCircle, Fingerprint, Info } from 'lucide-react';

const FaceVerification = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Face Verification</h1>
        <p className="text-slate-400 mt-1">Biometric comparison between document photograph and live captured image.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center p-8">
          <CardHeader className="w-full justify-center mb-6">
            <CardTitle className="text-center text-slate-400">Document Photo</CardTitle>
          </CardHeader>
          <div className="w-48 h-64 bg-slate-800 rounded-lg border-2 border-slate-700 flex items-center justify-center relative overflow-hidden">
            <UserCircle className="w-20 h-20 text-slate-600" />
            {/* Mock bounding box */}
            <div className="absolute inset-4 border border-cyan-500/50 rounded-sm"></div>
          </div>
          <div className="mt-6 w-full space-y-2">
            <div className="flex justify-between text-xs text-slate-400"><span>Quality</span> <span className="text-emerald-400">Good</span></div>
            <div className="flex justify-between text-xs text-slate-400"><span>Lighting</span> <span className="text-emerald-400">Pass</span></div>
          </div>
        </Card>

        <Card className="flex flex-col items-center justify-center bg-slate-900/50 border-slate-800 shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]">
          <Fingerprint className="w-12 h-12 text-cyan-500/50 mb-4" />
          <h2 className="text-5xl font-extrabold text-cyan-400 mb-2">87.4<span className="text-2xl text-cyan-600">%</span></h2>
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Similarity Score</p>
          <Badge variant="success" className="text-sm px-4 py-1">MATCH</Badge>
          
          <div className="mt-8 px-4 w-full text-center">
            <p className="text-xs text-slate-500 flex items-start justify-center">
              <Info className="w-3 h-3 mr-1 flex-shrink-0 mt-0.5" />
              This is a decision-support indicator. Final verification requires authorized human review.
            </p>
          </div>
        </Card>

        <Card className="flex flex-col items-center p-8">
          <CardHeader className="w-full justify-center mb-6">
            <CardTitle className="text-center text-slate-400">Presented Person</CardTitle>
          </CardHeader>
          <div className="w-48 h-64 bg-slate-800 rounded-lg border-2 border-slate-700 flex items-center justify-center relative overflow-hidden">
            <UserCircle className="w-20 h-20 text-slate-600" />
            {/* Mock facial landmarks */}
            <div className="absolute top-[40%] left-[35%] w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute top-[40%] right-[35%] w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute top-[60%] left-[45%] w-8 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          <div className="mt-6 w-full space-y-2">
            <div className="flex justify-between text-xs text-slate-400"><span>Liveness</span> <span className="text-emerald-400">Verified</span></div>
            <div className="flex justify-between text-xs text-slate-400"><span>Pose</span> <span className="text-emerald-400">Direct</span></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FaceVerification;

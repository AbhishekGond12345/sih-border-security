import React from 'react';
import { Card } from '../components/ui/Card';
import { ShieldCheck, Link } from 'lucide-react';

const AuditLogs = () => {
  const auditData = [
    { time: '06 Sep 2026 11:42:15', user: 'Officer-01', action: 'Screening Completed', caseId: 'SSB-2026-004821', result: 'High Risk', ip: '10.24.1.55' },
    { time: '06 Sep 2026 11:42:01', user: 'System', action: 'Face Match API Call', caseId: 'SSB-2026-004821', result: 'Success', ip: 'Internal' },
    { time: '06 Sep 2026 11:41:55', user: 'Officer-01', action: 'Started Screening', caseId: 'SSB-2026-004821', result: 'Success', ip: '10.24.1.55' },
    { time: '06 Sep 2026 11:35:42', user: 'Officer-01', action: 'Screening Completed', caseId: 'SSB-2026-004820', result: 'Low Risk', ip: '10.24.1.55' },
    { time: '06 Sep 2026 10:15:00', user: 'Admin-Sys', action: 'Settings Updated', caseId: 'N/A', result: 'Success', ip: '192.168.1.10' },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">System Audit Logs</h1>
        <p className="text-slate-400 mt-1">Immutable record of all system interactions and AI decisions.</p>
      </div>

      <Card className="bg-gradient-to-r from-slate-900 to-slate-950 border-cyan-900/50">
        <div className="flex items-start">
          <ShieldCheck className="w-10 h-10 text-cyan-500 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-slate-200 flex items-center">
              Blockchain Audit Verification <span className="ml-3 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">Prototype Demo</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1 mb-4">Current Block Hash: <span className="font-mono text-xs text-slate-500 break-all">0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</span></p>
            <div className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded w-fit border border-emerald-500/20">
              <Link className="w-3 h-3 mr-2" /> Integrity: VERIFIED
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden border-slate-700">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="text-xs text-slate-500 uppercase bg-slate-900/80 border-b border-slate-800">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Timestamp</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">User</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Action</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Case ID</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Result</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">IP / Device</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              {auditData.map((row, idx) => (
                <tr key={idx} className="bg-slate-950/50 border-b border-slate-800 hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-3">{row.time}</td>
                  <td className="px-6 py-3 text-slate-300">{row.user}</td>
                  <td className="px-6 py-3">{row.action}</td>
                  <td className="px-6 py-3 text-cyan-500">{row.caseId}</td>
                  <td className={`px-6 py-3 ${row.result.includes('High') ? 'text-red-400' : 'text-emerald-400'}`}>{row.result}</td>
                  <td className="px-6 py-3 text-slate-500">{row.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AuditLogs;

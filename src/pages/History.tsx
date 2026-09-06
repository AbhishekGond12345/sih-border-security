import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Search, Filter, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const History = () => {
  const navigate = useNavigate();
  
  const historyData = [
    { id: 'SSB-2026-004821', date: '06 Sep 2026 11:42', type: 'Passport', nationality: 'IND', score: 82, status: 'High Risk', officer: 'Officer 01' },
    { id: 'SSB-2026-004820', date: '06 Sep 2026 11:35', type: 'Visa', nationality: 'USA', score: 12, status: 'Low Risk', officer: 'Officer 01' },
    { id: 'SSB-2026-004819', date: '06 Sep 2026 11:28', type: 'National ID', nationality: 'NPL', score: 25, status: 'Low Risk', officer: 'Officer 01' },
    { id: 'SSB-2026-004818', date: '06 Sep 2026 11:15', type: 'Passport', nationality: 'GBR', score: 65, status: 'Elevated Risk', officer: 'Officer 02' },
    { id: 'SSB-2026-004817', date: '06 Sep 2026 11:02', type: 'Driving License', nationality: 'IND', score: 45, status: 'Medium Risk', officer: 'Officer 02' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Screening History</h1>
          <p className="text-slate-400 mt-1">Review past document screenings and investigations.</p>
        </div>
      </div>

      <Card className="p-0 overflow-hidden border-slate-700">
        <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search Case ID..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-md bg-slate-950 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 sm:text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" className="px-3">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="text-xs text-slate-500 uppercase bg-slate-900/80 border-b border-slate-800">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Case ID</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Date & Time</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Document Type</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Nationality</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Risk Score</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Status</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Officer</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((row, idx) => (
                <tr key={idx} className="bg-slate-950/50 border-b border-slate-800 hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-cyan-400">{row.id}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4 text-slate-300">{row.type}</td>
                  <td className="px-6 py-4">{row.nationality}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${row.score > 80 ? 'text-red-400' : row.score > 60 ? 'text-orange-400' : row.score > 30 ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {row.score}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={row.status === 'High Risk' ? 'error' : row.status === 'Elevated Risk' ? 'warning' : row.status === 'Medium Risk' ? 'warning' : 'success'}>
                      {row.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">{row.officer}</td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/case/${row.id}`)}>
                      <Eye className="w-4 h-4 mr-1" /> View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default History;

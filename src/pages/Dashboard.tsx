import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { FileScan, AlertOctagon, AlertTriangle, UserCheck, Clock, ShieldCheck, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: 'Documents Screened', value: '12,846', icon: FileScan, color: 'text-cyan-400' },
    { title: 'High Risk Cases', value: '147', icon: AlertOctagon, color: 'text-red-400' },
    { title: 'Suspicious Documents', value: '326', icon: AlertTriangle, color: 'text-amber-400' },
    { title: 'Face Verification Success', value: '98.7%', icon: UserCheck, color: 'text-emerald-400' },
    { title: 'Avg Screening Time', value: '4.2 sec', icon: Clock, color: 'text-purple-400' },
    { title: 'System Status', value: 'Operational', icon: ShieldCheck, color: 'text-emerald-500' },
  ];

  const recentAlerts = [
    { id: 'SSB-2026-004821', type: 'High Risk', desc: 'Possible photo replacement detected', time: '12 mins ago' },
    { id: 'SSB-2026-004818', type: 'Warning', desc: 'MRZ checksum mismatch', time: '45 mins ago' },
    { id: 'SSB-2026-004812', type: 'High Risk', desc: 'Face verification failed (23% match)', time: '2 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Border Security Screening Dashboard</h1>
          <p className="text-slate-400 mt-1">Overview of system operations and recent screening alerts.</p>
        </div>
        <Button 
          className="mt-4 sm:mt-0 shadow-lg shadow-cyan-900/50" 
          onClick={() => navigate('/screening')}
        >
          <Plus className="w-5 h-5 mr-2" />
          Start New Screening
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-4 hover:border-slate-700 transition-colors">
            <div className="flex flex-col items-center justify-center text-center">
              <stat.icon className={`w-8 h-8 mb-3 ${stat.color}`} />
              <p className="text-sm font-medium text-slate-400 mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-100">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 min-h-[300px]">
          <CardHeader>
            <CardTitle>Recent Screenings Activity</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-center h-[200px] border border-dashed border-slate-700 rounded-lg bg-slate-900/30">
            <p className="text-slate-500">Analytics chart placeholder (Navigate to Analytics for detailed charts)</p>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Critical Alerts</CardTitle>
          </CardHeader>
          <div className="space-y-4">
            {recentAlerts.map((alert, idx) => (
              <div key={idx} className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 flex flex-col cursor-pointer hover:bg-slate-800 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-cyan-400">{alert.id}</span>
                  <Badge variant={alert.type === 'High Risk' ? 'error' : 'warning'}>{alert.type}</Badge>
                </div>
                <p className="text-sm text-slate-300 font-medium">{alert.desc}</p>
                <span className="text-[10px] text-slate-500 mt-2">{alert.time}</span>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4 text-sm" onClick={() => navigate('/history')}>
            View All History
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

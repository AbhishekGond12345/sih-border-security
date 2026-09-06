import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ScanLine, 
  FileText, 
  CheckSquare, 
  AlertTriangle, 
  UserCheck, 
  Activity, 
  History, 
  BarChart3, 
  Settings, 
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Document Screening', path: '/screening', icon: ScanLine },
  { name: 'OCR & Extracted Data', path: '/ocr', icon: FileText },
  { name: 'Document Validation', path: '/validation', icon: CheckSquare },
  { name: 'Tampering Detection', path: '/tampering', icon: AlertTriangle },
  { name: 'Face Verification', path: '/face-verification', icon: UserCheck },
  { name: 'Risk Assessment', path: '/risk-assessment', icon: Activity },
  { name: 'Verification History', path: '/history', icon: History },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'System Audit Logs', path: '/audit-logs', icon: ShieldCheck },
  { name: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col h-full hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900/50">
        <ShieldAlert className="w-6 h-6 text-cyan-400 mr-3" />
        <span className="text-slate-100 font-semibold tracking-wide text-sm truncate">SSB • SECURE PORTAL</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200',
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                )
              }
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-xs border border-slate-600">
            O1
          </div>
          <div className="ml-3">
            <p className="text-xs font-medium text-slate-200">Officer 01</p>
            <p className="text-[10px] text-slate-500">Border Checkpoint Alpha</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

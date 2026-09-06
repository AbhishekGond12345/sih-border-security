import React from 'react';
import { Bell, Search, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="h-16 flex-shrink-0 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 z-10 shadow-sm">
      <div className="flex items-center flex-1">
        <button className="md:hidden p-2 -ml-2 text-slate-400 hover:text-slate-200">
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="hidden md:flex items-center max-w-md w-full ml-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search Case ID / Passport Number..."
              className="block w-full pl-10 pr-3 py-1.5 border border-slate-700 rounded-md leading-5 bg-slate-950 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 sm:text-sm transition-colors"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center hidden sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">System Operational</span>
        </div>
        
        <button className="relative p-2 text-slate-400 hover:text-slate-200 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-900"></span>
        </button>
        
        <div className="h-6 w-px bg-slate-700 mx-1"></div>
        
        <button 
          onClick={handleLogout}
          className="flex items-center text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopNav;

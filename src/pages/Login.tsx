import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Fingerprint, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
          <div className="h-16 w-16 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-900/20">
            <ShieldAlert className="h-10 w-10 text-cyan-400" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100 tracking-tight">
          AI-Based Fake Identity & Document Screening System
        </h2>
        <p className="mt-2 text-center text-sm text-cyan-400 font-medium uppercase tracking-widest">
          Secure Border Document Verification Platform
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl py-8 px-4 shadow-[0_0_40px_rgba(6,182,212,0.1)] border border-slate-800 sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="officerId" className="block text-sm font-medium text-slate-300">
                Officer ID
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Fingerprint className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  id="officerId"
                  name="officerId"
                  type="text"
                  required
                  defaultValue="SSB-OFFICER-01"
                  className="appearance-none block w-full pl-10 px-3 py-2 border border-slate-700 rounded-lg bg-slate-950/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  defaultValue="password123"
                  className="appearance-none block w-full pl-10 px-3 py-2 border border-slate-700 rounded-lg bg-slate-950/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-device"
                  name="remember-device"
                  type="checkbox"
                  className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-700 rounded bg-slate-950"
                />
                <label htmlFor="remember-device" className="ml-2 block text-sm text-slate-400">
                  Remember device
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                Authenticate & Login
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
              SSB • Ministry of Home Affairs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

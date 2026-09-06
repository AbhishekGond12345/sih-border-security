import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Settings = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">System Settings</h1>
        <p className="text-slate-400 mt-1">Configure screening parameters and security preferences.</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-200">Session Timeout</p>
                <p className="text-xs text-slate-500 mt-1">Automatically log out inactive users.</p>
              </div>
              <select className="bg-slate-950 border border-slate-700 text-slate-300 text-sm rounded focus:ring-cyan-500 focus:border-cyan-500 block p-2">
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
              </select>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-200">Two-Factor Authentication</p>
                <p className="text-xs text-slate-500 mt-1">Require biometrics or OTP for login.</p>
              </div>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-700 appearance-none cursor-pointer transition-transform duration-200 ease-in-out translate-x-6 bg-cyan-500" defaultChecked/>
                <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-cyan-900 cursor-pointer"></label>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Screening Parameters</CardTitle>
          </CardHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-200">Face Verification Threshold</p>
                <p className="text-xs text-slate-500 mt-1">Minimum confidence score to trigger auto-approval.</p>
              </div>
              <input type="range" min="50" max="99" defaultValue="85" className="w-48 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-200">Risk Threshold</p>
                <p className="text-xs text-slate-500 mt-1">Score required to mark a document as High Risk.</p>
              </div>
              <input type="range" min="50" max="100" defaultValue="80" className="w-48 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System & API</CardTitle>
          </CardHeader>
          <div className="space-y-4">
             <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-200">AI Model Environment</p>
                <p className="text-xs text-slate-500 mt-1">Select backend AI processing environment.</p>
              </div>
              <select className="bg-slate-950 border border-slate-700 text-slate-300 text-sm rounded focus:ring-cyan-500 focus:border-cyan-500 block p-2">
                <option>Production V1 (Stable)</option>
                <option>Production V2 (Beta)</option>
                <option>Mock Demo Server</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="ghost">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

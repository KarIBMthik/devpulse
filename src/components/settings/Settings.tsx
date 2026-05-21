import { Bell, Shield, Users, Database } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Configure your DevPulse workspace</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Bell size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Notifications</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-gray-300">Risk Alerts</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300">Sprint Updates</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300">AI Suggestions</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-600 rounded-lg">
              <Shield size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Security</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-gray-300">Two-Factor Auth</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300">Session Timeout</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300">Audit Logs</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Team</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Team Members</span>
              <span className="text-white font-semibold">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Active Sprints</span>
              <span className="text-white font-semibold">3</span>
            </div>
            <button className="w-full mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Manage Team
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-600 rounded-lg">
              <Database size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Data & Privacy</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-gray-300">Analytics</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300">Data Retention</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
            <button className="w-full mt-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Made with Bob

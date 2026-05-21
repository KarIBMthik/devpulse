import { LayoutDashboard, Bot, Settings } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Sidebar = ({ currentView, setCurrentView }: SidebarProps) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', view: 'dashboard' },
    { icon: Bot, label: 'Agent Actions', view: 'agent' },
    { icon: Settings, label: 'Settings', view: 'settings' },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 text-white flex flex-col">
      <div className="flex items-center h-16 px-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">DevPulse</h1>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.view;
            return (
              <li key={item.label}>
                <button
                  onClick={() => setCurrentView(item.view)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <div className="text-xs text-gray-400">
          Sprint 14 • Week 2
        </div>
      </div>
    </aside>
  );
};

// Made with Bob

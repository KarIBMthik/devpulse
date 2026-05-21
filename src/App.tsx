import { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './components/dashboard/Dashboard';
import { ActionPanel } from './components/agent/ActionPanel';
import { Settings } from './components/settings/Settings';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'agent':
        return <ActionPanel />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout currentView={currentView} setCurrentView={setCurrentView}>
      {renderView()}
    </MainLayout>
  );
}

export default App;

// Made with Bob

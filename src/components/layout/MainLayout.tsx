import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface MainLayoutProps {
  children: ReactNode;
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const MainLayout = ({ children, currentView, setCurrentView }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 flex flex-col overflow-hidden w-full min-h-screen pl-20">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

// Made with Bob

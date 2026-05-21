import { Lock, Sparkles } from 'lucide-react';

interface AgentAction {
  id: string;
  targetFile: string;
  suggestion: string;
  estimatedTime: string;
  type: 'Refactor' | 'Decouple';
}

interface ActionPanelProps {
  actions?: AgentAction[];
}

export const ActionPanel = ({ actions }: ActionPanelProps) => {
  if (!actions || actions.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            AI Agent Actions
          </h1>
          <p className="text-gray-400">
            Intelligent code refactoring recommendations
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="relative">
              <Lock size={64} className="text-gray-600 animate-pulse" />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-300">
                Awaiting Repository Context
              </h3>
              <p className="text-gray-500 max-w-md">
                Scan a codebase to unlock AI-driven refactoring strategies
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles size={16} className="animate-pulse" />
              <span>AI-powered analysis ready to activate</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          AI Agent Actions
        </h1>
        <p className="text-gray-400">
          Intelligent code refactoring recommendations
        </p>
      </div>

      <div className="space-y-4">
        {actions.map((action) => (
          <div
            key={action.id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    action.type === 'Refactor' 
                      ? 'bg-blue-900/30 text-blue-300 border border-blue-800' 
                      : 'bg-purple-900/30 text-purple-300 border border-purple-800'
                  }`}>
                    {action.type}
                  </span>
                  <span className="text-sm text-gray-400">
                    Est. {action.estimatedTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {action.targetFile}
                </h3>
                <p className="text-gray-300">
                  {action.suggestion}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Apply Refactor
              </button>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-lg transition-colors">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Made with Bob

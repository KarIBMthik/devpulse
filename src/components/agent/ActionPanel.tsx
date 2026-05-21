import { useState } from 'react';
import { CheckCircle, AlertTriangle, Clock, FileCode, Sparkles, Loader2 } from 'lucide-react';
import mockData from '../../data/mockData.json';

export const ActionPanel = () => {
  const proposal = mockData.agentProposals[0];
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleAnalyzeClick = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 3000);
  };

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

      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-semibold text-white">
                  {proposal.title}
                </h2>
                <span className="px-3 py-1 bg-red-900/30 text-red-300 text-xs font-semibold rounded-full border border-red-800">
                  {proposal.priority.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Related Risk ID: <span className="font-medium text-red-400">{proposal.riskId}</span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Status</div>
              <div className="text-lg font-bold text-orange-400">{proposal.status}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-900 rounded-lg">
            <div className="flex items-center gap-2">
              <FileCode size={16} className="text-gray-500" />
              <div>
                <div className="text-xs text-gray-400">File Path</div>
                <div className="text-sm font-medium text-white truncate">{proposal.filePath}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-gray-500" />
              <div>
                <div className="text-xs text-gray-400">Proposal ID</div>
                <div className="text-sm font-medium text-white">{proposal.id}</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
            <div className="text-sm font-medium text-blue-300 mb-1">Business Impact</div>
            <div className="text-sm text-blue-400">{proposal.businessImpact}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-gray-700">
          <div className="p-6 bg-gray-900">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wide">
                Current Monolith
              </h3>
              <span className="px-2 py-1 bg-red-900 text-red-200 text-xs rounded">
                Problematic
              </span>
            </div>
            <pre className="bg-gray-950 rounded-lg p-4 overflow-x-auto border border-gray-800">
              <code className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre">
{proposal.currentCodeSnippet}
              </code>
            </pre>
          </div>

          <div className="p-6 bg-gray-900">
            {!isAnalyzing && !hasAnalyzed && (
              <div className="flex items-center justify-center h-full">
                <button
                  onClick={handleAnalyzeClick}
                  className="flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Sparkles size={48} className="animate-pulse" />
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">
                      Analyze Monolith with IBM DevPulse Agent
                    </div>
                    <div className="text-sm text-blue-100">
                      AI-powered code decomposition
                    </div>
                  </div>
                </button>
              </div>
            )}

            {isAnalyzing && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <Loader2 size={48} className="text-blue-400 animate-spin mx-auto" />
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-blue-400 animate-pulse">
                      DevPulse Agent analyzing 450+ lines of code...
                    </div>
                    <div className="text-sm text-gray-400">
                      Generating decoupled architecture...
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            {hasAnalyzed && (
              <>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide">
                    AI Refactor
                  </h3>
                  <span className="px-2 py-1 bg-green-900 text-green-200 text-xs rounded">
                    Optimized
                  </span>
                </div>
                <pre className="bg-gray-950 rounded-lg p-4 overflow-x-auto border border-green-900/50">
                  <code className="text-xs text-green-300 font-mono leading-relaxed whitespace-pre">
{proposal.proposedCodeSnippet}
                  </code>
                </pre>
              </>
            )}
          </div>
        </div>

        {hasAnalyzed && (
          <div className="p-6 bg-gray-900 border-t border-gray-700">
            <div className="mb-4 p-4 bg-green-900/20 border border-green-800 rounded-lg">
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-green-300 mb-1">
                    Key Benefits
                  </div>
                  <ul className="text-sm text-green-400 space-y-1">
                    <li>• Eliminates merge conflicts between 3 developers</li>
                    <li>• Improves code maintainability and testability</li>
                    <li>• Reduces component complexity by 70%</li>
                    <li>• Enables parallel feature development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg">
                Accept AI Refactor
              </button>
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-lg transition-colors">
                Review Later
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Made with Bob

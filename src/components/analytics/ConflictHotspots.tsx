import { useState } from 'react';
import { Search, AlertTriangle, GitPullRequest, Users, FileCode, Zap } from 'lucide-react';

interface FileHotspot {
  id: string;
  filepath: string;
  riskScore: number;
  activePRs: number;
  uniqueDevelopers: number;
  dependentFiles: string[];
}

interface ConflictHotspotsProps {
  hotspots: FileHotspot[];
}

export const ConflictHotspots = ({ hotspots }: ConflictHotspotsProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const criticalFile = hotspots.find(f => f.riskScore > 90) || hotspots[0];
  const [selectedFile, setSelectedFile] = useState<FileHotspot>(criticalFile);

  if (!hotspots || hotspots.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700 bg-gradient-to-r from-red-900/20 to-purple-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-600 rounded-lg">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Merge Conflict Hotspots</h2>
              <p className="text-sm text-gray-400">Real-time risk analysis across your codebase</p>
            </div>
          </div>
        </div>
        <div className="p-12 text-center">
          <p className="text-gray-400">No conflict hotspots detected</p>
        </div>
      </div>
    );
  }

  const filteredFiles = hotspots.filter(file =>
    file.filepath.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRiskColor = (score: number) => {
    if (score > 80) return 'text-red-300 bg-red-900/30 border-red-800';
    if (score > 60) return 'text-orange-300 bg-orange-900/30 border-orange-800';
    return 'text-yellow-300 bg-yellow-900/30 border-yellow-800';
  };

  const getRiskBadge = (score: number) => {
    if (score > 80) return 'CRITICAL';
    if (score > 60) return 'HIGH';
    return 'MEDIUM';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-700 bg-gradient-to-r from-red-900/20 to-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-600 rounded-lg">
            <AlertTriangle size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Merge Conflict Hotspots</h2>
            <p className="text-sm text-gray-400">Real-time risk analysis across your codebase</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search files by path..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-700">
        <div className="p-4 bg-gray-900/50">
          <div className="mb-3 px-2">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Risk Roster</h3>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {filteredFiles.map((file) => {
              const isSelected = selectedFile.id === file.id;
              const isCritical = file.riskScore > 80;
              
              return (
                <button
                  key={file.id}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    isSelected
                      ? 'bg-blue-600 border-2 border-blue-400 shadow-lg'
                      : isCritical
                      ? 'bg-gray-800 border-2 border-red-500/50 hover:border-red-500 hover:bg-gray-750'
                      : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-750'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <FileCode size={16} className={isSelected ? 'text-white' : 'text-gray-400'} />
                      <span className={`text-sm font-mono truncate ${isSelected ? 'text-white font-semibold' : 'text-gray-300'}`}>
                        {file.filepath}
                      </span>
                    </div>
                    {isCritical && !isSelected && (
                      <AlertTriangle size={16} className="text-red-500 flex-shrink-0 ml-2" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <span className={`font-bold ${isSelected ? 'text-white' : getRiskColor(file.riskScore).split(' ')[0]}`}>
                        {file.riskScore}
                      </span>
                      <span className={isSelected ? 'text-blue-200' : 'text-gray-500'}>risk</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitPullRequest size={12} className={isSelected ? 'text-blue-200' : 'text-gray-500'} />
                      <span className={isSelected ? 'text-white' : 'text-gray-400'}>{file.activePRs} PRs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={12} className={isSelected ? 'text-blue-200' : 'text-gray-500'} />
                      <span className={isSelected ? 'text-white' : 'text-gray-400'}>{file.uniqueDevelopers} devs</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 bg-gray-900">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Blast Radius Analysis</h3>
            <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 ${getRiskColor(selectedFile.riskScore)}`}>
              {getRiskBadge(selectedFile.riskScore)}
            </span>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <FileCode size={20} className="text-blue-400" />
                <h4 className="text-lg font-semibold text-white font-mono">{selectedFile.filepath}</h4>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap size={16} className="text-red-400" />
                    <span className="text-xs text-gray-400">Risk Score</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">{selectedFile.riskScore}</div>
                </div>

                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-1">
                    <GitPullRequest size={16} className="text-purple-400" />
                    <span className="text-xs text-gray-400">Active PRs</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">{selectedFile.activePRs}</div>
                </div>

                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={16} className="text-blue-400" />
                    <span className="text-xs text-gray-400">Developers</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{selectedFile.uniqueDevelopers}</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg border border-red-800/50">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} className="text-red-400" />
                <h5 className="text-sm font-semibold text-red-300 uppercase tracking-wide">Dependent Files</h5>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Changes to this file will impact {selectedFile.dependentFiles.length} other files
              </p>
              <div className="space-y-2">
                {selectedFile.dependentFiles.map((depFile, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-gray-900/50 rounded border border-gray-700"
                  >
                    <div className="w-1 h-8 bg-red-500 rounded"></div>
                    <FileCode size={14} className="text-gray-500" />
                    <span className="text-sm font-mono text-gray-300">{depFile}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
              <div className="text-xs text-blue-300 font-semibold mb-1">Recommendation</div>
              <div className="text-sm text-gray-300">
                {selectedFile.riskScore > 80
                  ? 'Immediate refactoring required. Consider decomposing this monolith to reduce merge conflict risk.'
                  : selectedFile.riskScore > 60
                  ? 'Schedule refactoring in next sprint. Monitor active PRs closely.'
                  : 'Low risk. Continue monitoring for changes in PR activity.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Made with Bob

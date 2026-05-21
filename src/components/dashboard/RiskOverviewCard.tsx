import { AlertTriangle, Users, Clock } from 'lucide-react';

interface Risk {
  title: string;
  description: string;
  severity: string;
  probability: number;
  developers: string[];
  affectedFile: string;
  suggestedAction: string;
}

interface RiskOverviewCardProps {
  risks: Risk[];
}

export const RiskOverviewCard = ({ risks }: RiskOverviewCardProps) => {
  if (!risks || risks.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Active Risks</h3>
        <p className="text-gray-400">No risks detected</p>
      </div>
    );
  }

  const highestRisk = risks[0];

  const severityColors = {
    critical: 'bg-red-900/30 text-red-300 border-red-800',
    high: 'bg-orange-900/30 text-orange-300 border-orange-800',
    medium: 'bg-yellow-900/30 text-yellow-300 border-yellow-800',
  };

  const severityColor = severityColors[highestRisk.severity as keyof typeof severityColors] || severityColors.medium;

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Active Risks</h3>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${severityColor}`}>
          {highestRisk.severity.toUpperCase()}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-red-900/30 rounded-lg">
            <AlertTriangle className="text-red-400" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white mb-1">
              {highestRisk.title}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {highestRisk.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-gray-400" />
            <div>
              <div className="text-xs text-gray-400">Affected Developers</div>
              <div className="text-sm font-medium text-white">
                {highestRisk.developers.length} developers
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-400" />
            <div>
              <div className="text-xs text-gray-400">Probability</div>
              <div className="text-sm font-medium text-white">
                {highestRisk.probability}%
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-900/20 border border-blue-800 rounded-lg">
          <div className="text-xs font-medium text-blue-300 mb-1">
            Suggested Action
          </div>
          <div className="text-sm text-blue-400">
            {highestRisk.suggestedAction}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Affected File</div>
          <code className="text-sm bg-gray-900 px-3 py-2 rounded border border-gray-700 block text-gray-300">
            {highestRisk.affectedFile}
          </code>
        </div>
      </div>
    </div>
  );
};

// Made with Bob

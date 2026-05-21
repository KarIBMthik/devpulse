import { TrendingDown } from 'lucide-react';
import mockData from '../../data/mockData.json';

export const VelocityCard = () => {
  const sprint14 = mockData.velocityData.find(sprint => sprint.sprintName === 'Sprint 14');
  
  if (!sprint14) return null;

  const completionRate = Math.round((sprint14.completedPoints / sprint14.plannedPoints) * 100);
  const pointsGap = sprint14.plannedPoints - sprint14.completedPoints;

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Team Velocity</h3>
        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-800">
          {sprint14.sprintName}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-end gap-4">
          <div>
            <div className="text-4xl font-bold text-white">{sprint14.completedPoints}</div>
            <div className="text-sm text-gray-400">Completed Points</div>
          </div>
          <div className="text-gray-400 text-2xl mb-2">/</div>
          <div>
            <div className="text-2xl font-semibold text-gray-300">{sprint14.plannedPoints}</div>
            <div className="text-sm text-gray-400">Planned Points</div>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-800 rounded-lg">
          <TrendingDown className="text-red-400" size={20} />
          <div className="flex-1">
            <div className="text-sm font-medium text-red-300">
              Critical Velocity Drop
            </div>
            <div className="text-xs text-red-400">
              {pointsGap} points behind • {completionRate}% completion rate
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Team Health Score</span>
            <span className={`font-semibold ${sprint14.teamHealthScore < 70 ? 'text-red-400' : 'text-green-400'}`}>
              {sprint14.teamHealthScore}%
            </span>
          </div>
          <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${sprint14.teamHealthScore < 70 ? 'bg-red-500' : 'bg-green-500'}`}
              style={{ width: `${sprint14.teamHealthScore}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Made with Bob

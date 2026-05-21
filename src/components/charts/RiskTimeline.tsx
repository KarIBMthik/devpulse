import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart } from 'recharts';

export const RiskTimeline = () => {
  const riskData = [
    { sprint: 'Sprint 10', riskScore: 15 },
    { sprint: 'Sprint 11', riskScore: 22 },
    { sprint: 'Sprint 12', riskScore: 28 },
    { sprint: 'Sprint 13', riskScore: 35 },
    { sprint: 'Sprint 14', riskScore: 95 },
  ];

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">Risk Forecast</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={riskData}>
          <defs>
            <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="sprint"
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            stroke="#4b5563"
          />
          <YAxis
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            stroke="#4b5563"
            domain={[0, 100]}
            label={{ value: 'Risk Score', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              color: '#f3f4f6'
            }}
          />
          <Area
            type="monotone"
            dataKey="riskScore"
            stroke="#ef4444"
            strokeWidth={3}
            fill="url(#riskGradient)"
          />
          <Line
            type="monotone"
            dataKey="riskScore"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ fill: '#ef4444', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-4 p-3 bg-red-900/20 border border-red-800 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-red-300">
            Critical risk spike detected in Sprint 14
          </span>
        </div>
      </div>
    </div>
  );
};

// Made with Bob

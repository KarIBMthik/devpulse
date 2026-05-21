import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import mockData from '../../data/mockData.json';

export const VelocityChart = () => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">Velocity Trend</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mockData.velocityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="sprintName"
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            stroke="#4b5563"
          />
          <YAxis
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            stroke="#4b5563"
            label={{ value: 'Story Points', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
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
          <Legend
            wrapperStyle={{ paddingTop: '20px', color: '#d1d5db' }}
            iconType="rect"
          />
          <Bar
            dataKey="plannedPoints"
            fill="#93c5fd"
            name="Planned Points"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="completedPoints"
            fill="#3b82f6"
            name="Completed Points"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Made with Bob

import { useState } from 'react';
import { RiskOverviewCard } from './RiskOverviewCard';
import { ConflictHotspots } from '../analytics/ConflictHotspots';

export const Dashboard = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanData, setScanData] = useState<any>(null);

  const handleScan = async () => {
    setIsScanning(true);
    try {
      const response = await fetch('http://localhost:3001/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: repoUrl }),
      });
      const data = await response.json();
      setScanData(data);
    } catch (error) {
      console.error('Scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Sprint Dashboard
        </h1>
        <p className="text-gray-400">
          AI-powered insights for Sprint 14
        </p>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            disabled={isScanning}
            placeholder="https://github.com/organization/repository"
            className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning ? 'Scanning...' : 'Scan Repository'}
          </button>
        </div>
      </div>

      {scanData ? (
        <>
          <div className="grid grid-cols-1 gap-6">
            <RiskOverviewCard risks={scanData.risks} />
          </div>

          <div className="mt-6">
            <ConflictHotspots hotspots={scanData.hotspots} />
          </div>
        </>
      ) : (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 text-center">
          <p className="text-gray-400 text-lg">
            Enter a GitHub repository URL and click "Scan Repository" to begin analysis
          </p>
        </div>
      )}
    </div>
  );
};

// Made with Bob

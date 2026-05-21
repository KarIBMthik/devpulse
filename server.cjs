// Backend API Server for DevPulse Repository Scanner
// Prerequisites: Run "npm install express cors" before starting
// To start: Run "node server.js" in a separate terminal

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/scan', (req, res) => {
  const { url } = req.body;
  
  console.log(`Scanning repository: ${url}`);
  
  setTimeout(() => {
    const risks = [
      {
        title: 'Critical Merge Conflict Risk',
        description: 'Multiple developers are simultaneously modifying the authentication module, creating a high probability of merge conflicts and integration issues.',
        severity: 'critical',
        probability: 92,
        developers: ['alice@company.com', 'bob@company.com', 'charlie@company.com'],
        affectedFile: 'src/auth/AuthService.ts',
        suggestedAction: 'Coordinate with team to establish clear ownership boundaries. Consider splitting the module into smaller, focused components.'
      },
      {
        title: 'High Complexity in Core Module',
        description: 'The payment processing module has accumulated significant technical debt with cyclomatic complexity exceeding recommended thresholds.',
        severity: 'high',
        probability: 78,
        developers: ['david@company.com', 'eve@company.com'],
        affectedFile: 'src/payments/PaymentProcessor.ts',
        suggestedAction: 'Schedule refactoring sprint to decompose complex methods and improve testability.'
      }
    ];

    const hotspots = [
      {
        id: 'file-001',
        filepath: 'src/components/Dashboard.tsx',
        riskScore: 95,
        activePRs: 7,
        uniqueDevelopers: 5,
        dependentFiles: [
          'src/components/MetricsPanel.tsx',
          'src/hooks/useDashboardData.ts',
          'src/utils/chartHelpers.ts'
        ]
      },
      {
        id: 'file-002',
        filepath: 'src/services/AuthService.ts',
        riskScore: 88,
        activePRs: 4,
        uniqueDevelopers: 3,
        dependentFiles: [
          'src/components/LoginForm.tsx',
          'src/middleware/authMiddleware.ts'
        ]
      },
      {
        id: 'file-003',
        filepath: 'src/components/DataGrid.tsx',
        riskScore: 72,
        activePRs: 3,
        uniqueDevelopers: 2,
        dependentFiles: [
          'src/components/TableRow.tsx',
          'src/hooks/useVirtualization.ts',
          'src/utils/dataFormatters.ts'
        ]
      },
      {
        id: 'file-004',
        filepath: 'src/api/endpoints.ts',
        riskScore: 65,
        activePRs: 5,
        uniqueDevelopers: 4,
        dependentFiles: [
          'src/services/ApiClient.ts',
          'src/hooks/useApiCall.ts'
        ]
      },
      {
        id: 'file-005',
        filepath: 'src/components/NavigationBar.tsx',
        riskScore: 58,
        activePRs: 2,
        uniqueDevelopers: 2,
        dependentFiles: [
          'src/components/NavItem.tsx',
          'src/hooks/useNavigation.ts'
        ]
      }
    ];

    const highestRiskHotspot = hotspots.reduce((max, hotspot) =>
      hotspot.riskScore > max.riskScore ? hotspot : max
    );

    const agentActions = [
      {
        id: 'action-001',
        targetFile: highestRiskHotspot.filepath,
        suggestion: 'Extract state management into a separate custom hook to reduce cognitive complexity',
        estimatedTime: '2-3 hours',
        type: 'Refactor'
      },
      {
        id: 'action-002',
        targetFile: highestRiskHotspot.filepath,
        suggestion: 'Decouple data fetching logic from component rendering to improve testability',
        estimatedTime: '1-2 hours',
        type: 'Decouple'
      }
    ];
    
    res.json({ hotspots, risks, agentActions });
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`DevPulse API Server running on http://localhost:${PORT}`);
  console.log(`Ready to receive repository scan requests`);
});

// Made with Bob

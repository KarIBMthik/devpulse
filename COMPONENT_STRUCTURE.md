# DevPulse Component File Structure

## Overview
This document outlines the complete file structure for the DevPulse: AI-Powered Sprint Orchestrator dashboard MVP.

## File Structure Tree

```
devpulse/src/
├── data/
│   └── mockData.json                    # Comprehensive mock data for Team Velocity, Sprint Risks, and AI Refactor Proposals
│
├── types/
│   └── index.ts                         # TypeScript interfaces and types for all data models (Sprint, Risk, Refactor, etc.)
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx                  # Left navigation sidebar with menu items and branding
│   │   ├── Header.tsx                   # Top header bar with user info, notifications, and search
│   │   └── MainLayout.tsx               # Main layout wrapper that combines Sidebar, Header, and content area
│   │
│   ├── dashboard/
│   │   ├── Dashboard.tsx                # Main dashboard grid layout orchestrating all dashboard widgets
│   │   ├── VelocityCard.tsx             # Card displaying team velocity metrics and trends
│   │   ├── RiskOverviewCard.tsx         # Card showing high-level sprint risk summary
│   │   └── MetricsGrid.tsx              # Grid container for key performance indicator cards
│   │
│   ├── charts/
│   │   ├── RiskTimeline.tsx             # Recharts line/area chart showing risk trends over time
│   │   ├── VelocityChart.tsx            # Recharts bar chart displaying sprint velocity history
│   │   ├── BurndownChart.tsx            # Recharts line chart for sprint burndown visualization
│   │   └── ChartContainer.tsx           # Reusable wrapper component for consistent chart styling
│   │
│   ├── agent/
│   │   ├── ActionPanel.tsx              # Main panel displaying AI-generated refactor suggestions
│   │   ├── RefactorCard.tsx             # Individual card for each refactor proposal with details
│   │   ├── CodePreview.tsx              # Syntax-highlighted code diff preview component
│   │   └── ActionButton.tsx             # Reusable button for accepting/rejecting AI suggestions
│   │
│   └── common/
│       ├── Card.tsx                     # Reusable card component with consistent styling
│       ├── Badge.tsx                    # Status badge component for risk levels, priorities, etc.
│       ├── LoadingSpinner.tsx           # Loading state indicator component
│       └── EmptyState.tsx               # Empty state placeholder for sections with no data
│
├── hooks/
│   ├── useDashboardData.ts              # Custom hook to fetch and manage dashboard data from mockData.json
│   ├── useRiskAnalysis.ts               # Custom hook for processing and analyzing risk data
│   └── useRefactorSuggestions.ts        # Custom hook for managing AI refactor proposal state
│
├── utils/
│   ├── formatters.ts                    # Utility functions for formatting dates, numbers, percentages
│   ├── calculations.ts                  # Helper functions for velocity and risk calculations
│   └── constants.ts                     # Application-wide constants (colors, thresholds, labels)
│
├── App.tsx                              # Root application component with routing setup
├── main.tsx                             # Application entry point
└── index.css                            # Global styles with Tailwind imports
```

## Data Structure Requirements

### mockData.json Schema
The mock data file should include:

1. **Team Velocity Data**
   - Sprint numbers/dates
   - Planned vs actual story points
   - Velocity trends over time
   - Team capacity metrics

2. **Predicted Sprint Risks**
   - Risk ID and title
   - Risk level (Low, Medium, High, Critical)
   - Probability percentage
   - Impact assessment
   - Affected sprint/epic
   - Mitigation suggestions
   - Timeline data for trend visualization

3. **AI Code Refactor Proposals**
   - Proposal ID and title
   - File path and line numbers
   - Current code snippet
   - Proposed refactored code
   - Reasoning/benefits
   - Estimated impact (performance, maintainability)
   - Priority level
   - Status (Pending, Accepted, Rejected)

## Component Responsibilities

### Layout Components
- **Sidebar.tsx**: Navigation menu, logo, user profile section
- **Header.tsx**: Search bar, notifications bell, user avatar dropdown
- **MainLayout.tsx**: Responsive grid layout combining sidebar and main content

### Dashboard Components
- **Dashboard.tsx**: Main orchestrator rendering all dashboard sections in a responsive grid
- **VelocityCard.tsx**: Displays current sprint velocity with comparison to historical average
- **RiskOverviewCard.tsx**: Summary of active risks with quick filters
- **MetricsGrid.tsx**: KPI cards for completion rate, blocked items, team health

### Chart Components
- **RiskTimeline.tsx**: Time-series visualization of risk levels across sprints
- **VelocityChart.tsx**: Bar chart comparing planned vs actual velocity
- **BurndownChart.tsx**: Sprint progress tracking with ideal vs actual burndown
- **ChartContainer.tsx**: Provides consistent padding, titles, and responsive behavior

### Agent Components
- **ActionPanel.tsx**: List view of all AI refactor suggestions with filtering
- **RefactorCard.tsx**: Expandable card showing refactor details and code preview
- **CodePreview.tsx**: Side-by-side diff view with syntax highlighting
- **ActionButton.tsx**: Accept/Reject/Defer actions with confirmation states

### Common Components
- **Card.tsx**: Base card with shadow, padding, and optional header/footer
- **Badge.tsx**: Colored pill badges for statuses (risk levels, priorities)
- **LoadingSpinner.tsx**: Animated spinner for async operations
- **EmptyState.tsx**: Friendly message with icon when no data is available

## Implementation Notes

1. All components use TypeScript with strict typing from `types/index.ts`
2. Tailwind CSS v4 utility classes for all styling (no CSS modules)
3. Recharts library for all data visualizations
4. Lucide-react for consistent iconography
5. Mock data loaded via custom hooks, simulating API calls
6. Responsive design: mobile-first approach with breakpoints
7. Accessibility: ARIA labels, keyboard navigation, semantic HTML

## Next Steps

After approval of this structure:
1. Create the `mockData.json` file with comprehensive sample data
2. Define TypeScript interfaces in `types/index.ts`
3. Implement custom hooks for data management
4. Build layout components (Sidebar, Header, MainLayout)
5. Create dashboard components and integrate charts
6. Implement AI agent action panel with refactor cards
7. Add common/utility components for reusability
8. Test responsive behavior and accessibility
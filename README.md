# 🚀 DevPulse - Repository Scanner Dashboard

**DevPulse** is an AI-powered repository analysis dashboard that helps development teams identify merge conflict risks and code hotspots before they become critical issues. Built with modern web technologies and featuring a sleek dark mode interface, DevPulse provides real-time insights into your codebase health.

![DevPulse Dashboard](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-19.2.6-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178c6)

---

## ✨ Features

### 🔍 Repository Analysis
- **URL-based Scanning**: Analyze any GitHub repository by simply providing its URL
- **Real-time Risk Detection**: Identify potential merge conflicts before they happen
- **Conflict Hotspots**: Visualize files with the highest risk of conflicts
- **Developer Activity Tracking**: Monitor which developers are working on which files

### 📊 Visual Analytics
- **Risk Timeline**: Track risk trends over time with interactive charts
- **Velocity Metrics**: Monitor team velocity and sprint performance
- **Hotspot Visualization**: See at-a-glance which files need attention
- **Dependency Mapping**: Understand file dependencies and their impact

### 🎨 User Experience
- **Dark Mode UI**: Eye-friendly dark theme optimized for long coding sessions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Charts**: Powered by Recharts for smooth, engaging visualizations
- **Modern Icons**: Beautiful Lucide React icons throughout the interface

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.6** - Modern UI library with latest features
- **TypeScript 6.0.2** - Type-safe development
- **Vite 8.0.12** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.3.0** - Utility-first CSS framework
- **Recharts 3.8.1** - Composable charting library
- **Lucide React 1.16.0** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.2.1** - Fast, minimalist web framework
- **CORS 2.8.6** - Cross-origin resource sharing middleware

### Development Tools
- **ESLint 10.3.0** - Code linting and quality
- **TypeScript ESLint 8.59.2** - TypeScript-specific linting rules
- **PostCSS 8.5.15** - CSS transformation tool
- **Autoprefixer 10.5.0** - Automatic vendor prefixing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for cloning the repository)

Check your versions:
```bash
node --version
npm --version
```

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/devpulse.git
cd devpulse
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required dependencies for both frontend and backend.

---

## 🎯 Usage

### Development Mode

You'll need to run both the frontend and backend servers simultaneously.

#### Terminal 1: Start the Backend Server
```bash
node server.cjs
```
The backend API will start on `http://localhost:3001`

#### Terminal 2: Start the Frontend Development Server
```bash
npm run dev
```
The frontend will start on `http://localhost:5173`

### Access the Application
Open your browser and navigate to:
```
http://localhost:5173
```

### Scanning a Repository
1. Enter a GitHub repository URL in the input field
2. Click the "Scan Repository" button
3. Wait for the analysis to complete (typically 3-5 seconds)
4. View the risk analysis and conflict hotspots

---

## 📁 Project Structure

```
devpulse/
├── public/                      # Static assets
│   ├── favicon.svg             # Application favicon
│   └── icons.svg               # SVG icon sprites
│
├── src/                        # Source code
│   ├── assets/                 # Images and static files
│   │   └── hero.png           # Hero image
│   │
│   ├── components/            # React components
│   │   ├── agent/            # AI agent components
│   │   │   └── ActionPanel.tsx
│   │   │
│   │   ├── analytics/        # Analytics components
│   │   │   └── ConflictHotspots.tsx
│   │   │
│   │   ├── charts/           # Chart components
│   │   │   ├── RiskTimeline.tsx
│   │   │   └── VelocityChart.tsx
│   │   │
│   │   ├── dashboard/        # Dashboard components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── RiskOverviewCard.tsx
│   │   │   └── VelocityCard.tsx
│   │   │
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   └── Sidebar.tsx
│   │   │
│   │   └── settings/         # Settings components
│   │       └── Settings.tsx
│   │
│   ├── context/              # React context providers
│   ├── data/                 # Mock data
│   │   └── mockData.json
│   │
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
│
├── server.cjs                # Express backend server
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

---

## 🔌 API Endpoints

### POST `/api/scan`
Analyzes a GitHub repository and returns risk assessment data.

**Request Body:**
```json
{
  "url": "https://github.com/username/repository"
}
```

**Response:**
```json
{
  "risks": [
    {
      "title": "Critical Merge Conflict Risk",
      "description": "Multiple developers modifying the same module",
      "severity": "critical",
      "probability": 92,
      "developers": ["alice@company.com", "bob@company.com"],
      "affectedFile": "src/auth/AuthService.ts",
      "suggestedAction": "Coordinate with team to establish boundaries"
    }
  ],
  "hotspots": [
    {
      "id": "file-001",
      "filepath": "src/components/Dashboard.tsx",
      "riskScore": 95,
      "activePRs": 7,
      "uniqueDevelopers": 5,
      "dependentFiles": ["src/components/MetricsPanel.tsx"]
    }
  ]
}
```

---

## 🔧 Development Workflow

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Building for Production

1. **Build the application:**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist/` directory.

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist/` folder** to your hosting service of choice.

### Code Quality

The project uses ESLint for code quality and consistency:
```bash
npm run lint
```

Fix auto-fixable issues:
```bash
npm run lint -- --fix
```

---

## 🎨 Customization

### Tailwind CSS Configuration
Modify `tailwind.config.js` to customize colors, spacing, and other design tokens.

### Environment Variables
Create a `.env` file in the root directory for environment-specific configuration:
```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=DevPulse
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 or 3001 is already in use:

**Frontend:**
```bash
# Vite will automatically try the next available port
npm run dev
```

**Backend:**
Edit `server.cjs` and change the PORT constant:
```javascript
const PORT = 3002; // or any available port
```

### Dependencies Issues
If you encounter dependency conflicts:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Ensure you're using the correct TypeScript version:
```bash
npm install typescript@~6.0.2
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Development Team** - Initial work and ongoing maintenance

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Charts by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)

---

## 📞 Support

For support, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

## 🗺️ Roadmap

- [ ] GitHub API integration for real repository analysis
- [ ] User authentication and team management
- [ ] Historical data tracking and trends
- [ ] Slack/Teams notifications for critical risks
- [ ] Custom risk threshold configuration
- [ ] Export reports to PDF/CSV
- [ ] Multi-repository dashboard view
- [ ] AI-powered refactoring suggestions

---

**Made with ❤️ by the DevPulse Team**

*Empowering developers to build better software, together.*

# 🤝 Contributing to DevPulse

First off, thank you for considering contributing to DevPulse! It's people like you that make DevPulse such a great tool for development teams worldwide. We welcome contributions from everyone, whether you're fixing a typo, reporting a bug, or implementing a major feature.

This document provides guidelines for contributing to DevPulse. Following these guidelines helps communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Git Workflow](#git-workflow)
- [Commit Message Conventions](#commit-message-conventions)
- [Testing Requirements](#testing-requirements)
- [Documentation Requirements](#documentation-requirements)
- [Review Process](#review-process)
- [Community and Communication](#community-and-communication)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

---

## 🚀 How Can I Contribute?

### Reporting Bugs

Bugs are tracked as GitHub issues. Before creating a bug report, please check the existing issues to avoid duplicates.

#### Before Submitting a Bug Report

- **Check the documentation** - You might be able to find the cause of the problem and fix it yourself
- **Search existing issues** - Check if the issue has already been reported
- **Update to the latest version** - Your issue may already be fixed
- **Collect information** - Gather details about your environment and the bug

#### How to Submit a Good Bug Report

Create an issue and provide the following information:

**Use a clear and descriptive title** for the issue to identify the problem.

**Describe the exact steps to reproduce the problem** in as much detail as possible:
```markdown
## Bug Description
A clear and concise description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Screenshots
If applicable, add screenshots to help explain your problem.

## Environment
- OS: [e.g., Windows 11, macOS 14, Ubuntu 22.04]
- Browser: [e.g., Chrome 120, Firefox 121]
- Node.js version: [e.g., 18.17.0]
- DevPulse version: [e.g., 1.0.0]

## Additional Context
Add any other context about the problem here.
```

### Suggesting Features

Feature requests are welcome! Before creating a feature request, please check existing issues to see if someone has already suggested it.

#### How to Submit a Good Feature Request

Create an issue with the following information:

```markdown
## Feature Description
A clear and concise description of the feature you'd like to see.

## Problem Statement
Describe the problem this feature would solve. Ex. I'm always frustrated when [...]

## Proposed Solution
Describe how you envision this feature working.

## Alternatives Considered
Describe any alternative solutions or features you've considered.

## Additional Context
Add any other context, mockups, or screenshots about the feature request here.

## Benefits
- Who would benefit from this feature?
- How would it improve DevPulse?
```

### Submitting Pull Requests

We actively welcome your pull requests! Here's how to contribute code:

1. **Discuss first** - For major changes, please open an issue first to discuss what you would like to change
2. **Fork the repository** - Create your own fork of the code
3. **Create a branch** - Make your changes in a new git branch
4. **Make your changes** - Follow our coding standards
5. **Test your changes** - Ensure all tests pass
6. **Update documentation** - Update relevant documentation
7. **Submit a pull request** - Open a PR with a clear description

---

## 💻 Development Setup

### Prerequisites

Ensure you have the following installed:
- **Node.js** v18.0.0 or higher
- **npm** v9.0.0 or higher (or **yarn** v1.22.0 or higher)
- **Git** for version control

Verify your installations:
```bash
node --version
npm --version
git --version
```

### Initial Setup

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/devpulse.git
   cd devpulse
   ```

3. **Add upstream remote** to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/devpulse.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Development Environment

You need to run both the frontend and backend servers:

**Terminal 1 - Backend Server:**
```bash
node server.cjs
```
Backend runs on `http://localhost:3001`

**Terminal 2 - Frontend Development Server:**
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

### Project Structure

```
devpulse/
├── src/
│   ├── components/      # React components
│   │   ├── agent/      # AI agent components
│   │   ├── analytics/  # Analytics components
│   │   ├── charts/     # Chart components
│   │   ├── dashboard/  # Dashboard components
│   │   ├── layout/     # Layout components
│   │   └── settings/   # Settings components
│   ├── context/        # React context providers
│   ├── data/           # Mock data
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── server.cjs          # Express backend
└── package.json        # Dependencies
```

---

## 📝 Coding Standards

### TypeScript Guidelines

- **Use TypeScript** for all new code
- **Define interfaces** for all props and data structures
- **Avoid `any` type** - Use proper typing or `unknown` if necessary
- **Use type inference** where possible to reduce verbosity

**Example:**
```typescript
// Good
interface DashboardProps {
  title: string;
  data: RiskData[];
  onRefresh: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ title, data, onRefresh }) => {
  // Component implementation
};

// Avoid
const Dashboard = (props: any) => {
  // Component implementation
};
```

### React Best Practices

- **Use functional components** with hooks
- **Keep components small** and focused on a single responsibility
- **Use meaningful component names** that describe their purpose
- **Extract reusable logic** into custom hooks
- **Memoize expensive computations** with `useMemo` and `useCallback`

**Example:**
```typescript
// Good - Small, focused component
const RiskBadge: React.FC<{ severity: string }> = ({ severity }) => {
  const color = severity === 'critical' ? 'red' : 'yellow';
  return <span className={`badge-${color}`}>{severity}</span>;
};

// Avoid - Component doing too much
const Dashboard = () => {
  // 500 lines of code handling everything
};
```

### CSS and Styling

- **Use Tailwind CSS** utility classes for styling
- **Follow mobile-first** responsive design approach
- **Use consistent spacing** from Tailwind's spacing scale
- **Maintain dark mode** compatibility for all components

**Example:**
```tsx
// Good
<div className="flex items-center gap-4 p-6 bg-gray-800 rounded-lg">
  <h2 className="text-xl font-semibold text-white">Title</h2>
</div>

// Avoid inline styles
<div style={{ display: 'flex', padding: '24px' }}>
  <h2 style={{ fontSize: '20px' }}>Title</h2>
</div>
```

### Code Organization

- **One component per file** (except for small, tightly coupled components)
- **Group related files** in appropriate directories
- **Use index files** for cleaner imports
- **Keep files under 300 lines** - split larger files into smaller modules

### Naming Conventions

- **Components**: PascalCase (e.g., `DashboardCard.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useRiskData.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Interfaces/Types**: PascalCase (e.g., `RiskData`, `ChartProps`)

### Code Quality

- **Run ESLint** before committing:
  ```bash
  npm run lint
  ```

- **Fix auto-fixable issues**:
  ```bash
  npm run lint -- --fix
  ```

- **Write self-documenting code** - Use clear variable and function names
- **Add comments** for complex logic, but prefer clear code over comments
- **Remove console.logs** before committing (use proper logging if needed)

---

## 🔀 Git Workflow

### Branching Strategy

We use a feature branch workflow:

1. **Main branch** (`main`) - Production-ready code
2. **Feature branches** - New features or enhancements
3. **Bugfix branches** - Bug fixes
4. **Hotfix branches** - Critical production fixes

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/` - New features (e.g., `feature/add-export-functionality`)
- `bugfix/` - Bug fixes (e.g., `bugfix/fix-chart-rendering`)
- `hotfix/` - Critical fixes (e.g., `hotfix/security-vulnerability`)
- `docs/` - Documentation updates (e.g., `docs/update-contributing-guide`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-api-client`)
- `test/` - Test additions or fixes (e.g., `test/add-dashboard-tests`)

### Workflow Steps

1. **Sync your fork** with upstream:
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   git push origin main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit regularly:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

4. **Keep your branch updated** with main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

5. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

### Pull Request Guidelines

**Before submitting:**
- [ ] Code follows the style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated and passing
- [ ] Dependent changes merged

**PR Title Format:**
```
<type>: <short description>

Examples:
feat: add export to CSV functionality
fix: resolve chart rendering issue on mobile
docs: update installation instructions
refactor: simplify risk calculation logic
```

**PR Description Template:**
```markdown
## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Related Issue
Fixes #(issue number)

## How Has This Been Tested?
Describe the tests you ran and how to reproduce them.

## Screenshots (if applicable)
Add screenshots to demonstrate the changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

---

## 💬 Commit Message Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for clear and structured commit messages.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, missing semi-colons, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to build process or auxiliary tools
- **ci**: Changes to CI configuration files and scripts

### Scope (Optional)

The scope should be the name of the component or module affected:
- `dashboard`
- `charts`
- `api`
- `auth`
- `ui`

### Subject

- Use imperative, present tense: "add" not "added" nor "adds"
- Don't capitalize first letter
- No period (.) at the end
- Limit to 50 characters

### Body (Optional)

- Use imperative, present tense
- Include motivation for the change
- Contrast with previous behavior
- Wrap at 72 characters

### Footer (Optional)

- Reference issues: `Fixes #123`, `Closes #456`
- Note breaking changes: `BREAKING CHANGE: description`

### Examples

**Simple commit:**
```bash
git commit -m "feat: add export to CSV functionality"
```

**Commit with scope:**
```bash
git commit -m "fix(dashboard): resolve chart rendering on mobile devices"
```

**Commit with body:**
```bash
git commit -m "feat(api): add rate limiting to scan endpoint

Implement rate limiting to prevent API abuse and ensure fair usage.
Uses express-rate-limit middleware with 100 requests per 15 minutes.

Fixes #234"
```

**Breaking change:**
```bash
git commit -m "refactor(api)!: change response format for scan endpoint

BREAKING CHANGE: The scan endpoint now returns data in a different format.
Update your API clients to handle the new response structure."
```

---

## 🧪 Testing Requirements

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Writing Tests

- **Write tests** for all new features and bug fixes
- **Aim for high coverage** - Target 80%+ code coverage
- **Test edge cases** and error conditions
- **Use descriptive test names** that explain what is being tested

**Example test structure:**
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { RiskBadge } from './RiskBadge';

describe('RiskBadge', () => {
  it('renders critical severity with red color', () => {
    render(<RiskBadge severity="critical" />);
    const badge = screen.getByText('critical');
    expect(badge).toHaveClass('badge-red');
  });

  it('renders warning severity with yellow color', () => {
    render(<RiskBadge severity="warning" />);
    const badge = screen.getByText('warning');
    expect(badge).toHaveClass('badge-yellow');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<RiskBadge severity="critical" onClick={handleClick} />);
    fireEvent.click(screen.getByText('critical'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Test Categories

1. **Unit Tests** - Test individual functions and components in isolation
2. **Integration Tests** - Test how components work together
3. **E2E Tests** - Test complete user workflows (future implementation)

---

## 📚 Documentation Requirements

Good documentation is crucial for project success. Please update documentation when making changes.

### What to Document

- **New features** - Add usage examples and explanations
- **API changes** - Update API documentation
- **Configuration changes** - Update setup instructions
- **Breaking changes** - Clearly document migration steps

### Documentation Standards

- **Use clear, concise language**
- **Include code examples** where appropriate
- **Add screenshots** for UI changes
- **Keep README.md updated** with new features
- **Update inline code comments** for complex logic

### Documentation Files

- `README.md` - Project overview, setup, and usage
- `CONTRIBUTING.md` - This file
- `ARCHITECTURE.md` - System architecture and design decisions
- `API.md` - API endpoint documentation
- Inline comments - Complex code explanations

### JSDoc Comments

Use JSDoc for functions and components:

```typescript
/**
 * Calculates the risk score for a given file based on activity metrics.
 * 
 * @param filepath - The path to the file being analyzed
 * @param metrics - Activity metrics including PR count and developer count
 * @returns A risk score between 0 and 100
 * 
 * @example
 * ```typescript
 * const score = calculateRiskScore('src/App.tsx', {
 *   activePRs: 5,
 *   uniqueDevelopers: 3
 * });
 * ```
 */
function calculateRiskScore(filepath: string, metrics: ActivityMetrics): number {
  // Implementation
}
```

---

## 👀 Review Process

### What to Expect

1. **Initial Review** - A maintainer will review your PR within 2-3 business days
2. **Feedback** - You may receive requests for changes or clarifications
3. **Iteration** - Make requested changes and push updates
4. **Approval** - Once approved, your PR will be merged
5. **Recognition** - You'll be added to our contributors list!

### Review Criteria

Reviewers will check for:

- **Code quality** - Follows coding standards and best practices
- **Functionality** - Works as intended and solves the problem
- **Tests** - Adequate test coverage for changes
- **Documentation** - Updated and clear documentation
- **Performance** - No significant performance regressions
- **Security** - No security vulnerabilities introduced
- **Compatibility** - Works across supported browsers and environments

### Responding to Feedback

- **Be responsive** - Reply to comments and questions promptly
- **Be open to suggestions** - Reviewers want to help improve your code
- **Ask questions** - If feedback is unclear, ask for clarification
- **Make changes** - Address all feedback before requesting re-review
- **Be patient** - Reviews take time, especially for large changes

### After Your PR is Merged

- **Delete your branch** - Clean up your fork
- **Update your fork** - Sync with upstream main
- **Celebrate** - You've contributed to DevPulse! 🎉

---

## 💬 Community and Communication

### Where to Get Help

- **GitHub Issues** - For bug reports and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Pull Request Comments** - For code-specific questions
- **Email** - Contact maintainers for sensitive issues

### Communication Guidelines

- **Be respectful** - Treat everyone with respect and kindness
- **Be patient** - Maintainers are often volunteers with limited time
- **Be clear** - Provide context and details in your communications
- **Be constructive** - Focus on solutions, not just problems
- **Search first** - Check if your question has already been answered

### Getting Involved

Beyond code contributions, you can help by:

- **Answering questions** - Help other users in discussions
- **Improving documentation** - Fix typos, add examples, clarify instructions
- **Testing** - Try new features and report issues
- **Spreading the word** - Share DevPulse with others
- **Providing feedback** - Share your experience and suggestions

### Recognition

We value all contributions! Contributors will be:

- Listed in our `CONTRIBUTORS.md` file
- Mentioned in release notes for significant contributions
- Eligible for special contributor badges (coming soon)

---

## 🎯 First-Time Contributors

New to open source? Welcome! Here are some tips:

### Good First Issues

Look for issues labeled `good first issue` - these are specifically chosen for newcomers:
- Well-defined scope
- Clear acceptance criteria
- Guidance provided
- Mentorship available

### Learning Resources

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Getting Started Checklist

- [ ] Read this CONTRIBUTING.md file
- [ ] Set up your development environment
- [ ] Find a `good first issue` to work on
- [ ] Ask questions if you're stuck
- [ ] Submit your first PR
- [ ] Celebrate your contribution! 🎉

---

## 📞 Questions?

If you have questions that aren't covered in this guide:

1. Check the [README.md](README.md) for general project information
2. Search [existing issues](https://github.com/yourusername/devpulse/issues) for similar questions
3. Open a new issue with the `question` label
4. Reach out to maintainers via email

---

## 🙏 Thank You!

Thank you for taking the time to contribute to DevPulse! Every contribution, no matter how small, makes a difference. We're excited to see what you'll bring to the project.

**Happy coding!** 🚀

---

*This contributing guide is inspired by open source best practices and is continuously improved based on community feedback.*

**Last Updated:** May 2026
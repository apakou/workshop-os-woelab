# Contributing to Workshop OS WoeLab

Thank you for your interest in contributing to our HTML Hello World project! This document provides guidelines to help you contribute effectively.

## How to Contribute

### 1. Fork the Repository

1. Click the "Fork" button at the top right of this repository
2. Clone your fork to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/workshop-os-woelab.git
   cd workshop-os-woelab
   ```

### 2. Set Up Your Development Environment

**Prerequisites:**
- Git installed on your computer
- A text editor (VS Code, Sublime Text, etc.)
- A modern web browser
- Basic knowledge of HTML (helpful but not required)

**Setup:**
1. Navigate to the project directory
2. Open `index.html` in your browser to see the current state
3. Open the project in your preferred text editor

### 3. Make Your Changes

**Types of contributions we welcome:**
- Bug fixes in HTML markup
- Improvements to styling or layout
- Better documentation
- Code examples and tutorials
- Accessibility improvements
- Cross-browser compatibility fixes

**Before making changes:**
1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make sure your changes work by testing in a browser
3. Keep changes small and focused

### 4. Test Your Changes

1. Open `index.html` in multiple browsers if possible
2. Verify the page displays correctly
3. Check that any new HTML is valid
4. Ensure accessibility standards are maintained

### 5. Commit Your Changes

1. Add your changes:
   ```bash
   git add .
   ```
2. Commit with a clear message:
   ```bash
   git commit -m "Add: Brief description of what you changed"
   ```

**Commit Message Guidelines:**
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests when applicable

### 6. Submit a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Go to the original repository on GitHub
3. Click "New Pull Request"
4. Select your fork and branch
5. Fill out the pull request template with:
   - Clear title describing your changes
   - Detailed description of what you changed and why
   - Any testing you performed
   - Screenshots if applicable

## Code Guidelines

### HTML Best Practices
- Use semantic HTML elements
- Ensure proper indentation (2 or 4 spaces consistently)
- Include appropriate meta tags
- Follow accessibility guidelines (WCAG 2.1)
- Validate HTML using [W3C Markup Validator](https://validator.w3.org/)

### File Structure
```
workshop-os-woelab/
├── index.html          # Main HTML file
├── assets/             # Images (if added)
├── docs/               # Additional documentation
├── README.md           # Project overview
├── CONTRIBUTING.md     # This file
└── LICENSE            # Project license
```

## What We Look For

✅ **Good contributions:**
- Clear, well-documented code
- Tested changes that work across browsers
- Improvements that enhance learning value
- Bug fixes with explanations
- Documentation improvements

❌ **Avoid:**
- Large, unfocused changes
- Breaking existing functionality
- Removing educational value
- Changes without testing
- Incomplete or unclear descriptions

## Getting Help

**If you need help:**
- Check existing issues and pull requests
- Create an issue describing your question
- Tag maintainers in your pull request if needed
- Be patient and respectful in all interactions

## Recognition

All contributors will be acknowledged in our project! Your GitHub username will be added to our contributors list.

## Quick Start Checklist

- [ ] Fork the repository
- [ ] Clone your fork locally
- [ ] Create a new branch
- [ ] Make and test your changes
- [ ] Commit with clear messages
- [ ] Push to your fork
- [ ] Create a pull request
- [ ] Respond to feedback promptly

Thank you for contributing to our learning community! 🎉

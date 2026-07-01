# Cheema Lab Website

A modern, elegant academic research lab website built with React, Vite, and Tailwind CSS. The site showcases research areas, publications, team members, and lab news for the Cheema Lab at Georgetown University.

## Features

- **Modern Design**: Clean, minimal, and sophisticated aesthetic inspired by top-tier academic labs
- **Fully Responsive**: Desktop-first approach with excellent mobile experience
- **Performance**: Built with Vite for lightning-fast development and production builds
- **Smooth Animations**: Subtle fade-ins and transitions for polished feel
- **Component-Based**: Reusable React components for maintainability
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first styling with custom configuration

## Pages Included

1. **Home** - Hero section, research highlights, recent news, and call-to-action
2. **Research** - Expandable research areas with detailed descriptions and methodology
3. **People** - Team members, PI bio, and alumni section
4. **Publications** - Searchable/filterable publication list with DOI links
5. **News** - Chronological updates and lab announcements
6. **Contact** - Contact form, location information, and quick links

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Next generation frontend tooling
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- GitHub account with repository access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/cheema-lab.github.io.git
cd cheema-lab-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Windows-Specific Setup

If you're on Windows and encounter issues:

1. Make sure Node.js is installed and in your PATH
2. If npm commands don't work, try using PowerShell as Administrator
3. For deployment, use either:
   - `npm run deploy:windows` (npm script)
   - `deploy.bat` (batch file)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Navbar.tsx       # Navigation bar with mobile menu
│   ├── Footer.tsx       # Footer with contact info
│   ├── Card.tsx         # Reusable card component
│   ├── Button.tsx       # Button with variants
│   └── SectionHeader.tsx # Section header component
├── pages/               # Page components
│   ├── Home.tsx         # Home page
│   ├── Research.tsx     # Research areas page
│   ├── People.tsx       # Team members page
│   ├── Publications.tsx # Publications listing
│   ├── News.tsx         # News and updates
│   └── Contact.tsx      # Contact page
├── App.tsx              # Main App component with routing
├── index.css            # Global styles and Tailwind
└── main.tsx             # Entry point

public/                  # Static assets
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'georgetown-blue': '#003366',
  'accent': '#D81B60',
}
```

### Content

Update the placeholder content in each page component to reflect your lab's actual:
- Research areas and descriptions
- Team member information
- Publications and DOI links
- News items and announcements
- Contact information

### Fonts

The project uses the "Inter" font family from Google Fonts. To change it:

1. Update the font import in `index.html`
2. Modify the fontFamily in `tailwind.config.js`

## Deployment

### GitHub Pages (Automatic via GitHub Actions)

The site automatically deploys to GitHub Pages when you push to `main` or `master`:

1. Ensure your repository is set to public (or GitHub Pages is enabled for your account)
2. Go to **Settings → Pages** in your repository
3. Set "Build and deployment" to:
   - **Source**: GitHub Actions
   - **Branch**: (should auto-detect)
4. Push your code:
```bash
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- Installs dependencies
- Builds the project
- Deploys to GitHub Pages

### Local Deployment to GitHub Pages

**On Windows:**
```bash
npm install  # Install dependencies (including gh-pages)
npm run build
npm run deploy:windows
```

Or use the batch file:
```bash
deploy.bat
```

**On Mac/Linux:**
```bash
npm install
npm run build
npm run deploy
```

Or use the shell script:
```bash
bash deploy.sh
```

### Vercel (Alternative)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Vite and deploys
4. Your site is live at `your-project.vercel.app`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Code splitting by route
- Lazy loading of components
- Optimized images
- Minified CSS and JavaScript
- Fast page transitions

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios
- Focus indicators on interactive elements

## Contributing

To contribute to this project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is maintained by the Cheema Lab at Georgetown University.

## Support

For questions or issues, contact: akc27@georgetown.edu

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Georgetown Visual Identity](https://www.georgetown.edu/visual-identity-for-the-web/)

# Deployment Guide

## 🚀 GitHub Pages Deployment

### Method 1: Using npm script (Recommended)

1. **Build and deploy:**
   ```powershell
   npm run deploy
   ```
   
   This will:
   - Build your React app
   - Deploy to GitHub Pages
   - Your site will be available at: `https://sudhirgomase.github.io/Portfolio_SudhirGomase`

2. **Enable GitHub Pages in repository settings:**
   - Go to: https://github.com/SudhirGomase/Portfolio_SudhirGomase/settings/pages
   - Source: Select `gh-pages` branch
   - Folder: `/ (root)`
   - Click "Save"

### Method 2: Using GitHub Actions (Automatic)

The repository includes a GitHub Actions workflow that automatically deploys on every push to `main` branch.

1. **Push your code to GitHub** (with authentication token)
2. **Enable GitHub Pages:**
   - Go to: https://github.com/SudhirGomase/Portfolio_SudhirGomase/settings/pages
   - Source: Select `GitHub Actions`
   - Your site will auto-deploy on every push!

## 🌐 Vercel Deployment

### Quick Deploy:

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy:**
   ```powershell
   vercel
   ```
   
   Follow the prompts:
   - Login to Vercel
   - Link to your GitHub repository
   - Deploy!

### Or Deploy via Vercel Website:

1. Go to: https://vercel.com/new
2. Import your GitHub repository: `SudhirGomase/Portfolio_SudhirGomase`
3. Configure:
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Click "Deploy"

Your site will be live at: `https://portfolio-sudhir-gomase.vercel.app` (or custom domain)

## Important Notes:

- **GitHub Pages:** Free, but uses `gh-pages` branch
- **Vercel:** Free tier available, better performance, custom domains
- Both support automatic deployments on git push
- Vercel provides better performance and CDN

## Troubleshooting:

### GitHub Pages 404 Error:
- Make sure `homepage` in `package.json` matches your repository name
- Check that `gh-pages` branch exists
- Verify GitHub Pages is enabled in repository settings

### Vercel Build Errors:
- Make sure `package.json` has correct build scripts
- Check that all dependencies are listed in `package.json`


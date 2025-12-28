# GitHub Repository Setup Guide

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or any name you prefer)
3. Description: "Modern portfolio website with glassmorphism, animations, and theme support"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Copy the Repository URL

After creating the repository, GitHub will show you the repository URL. It will look like:
- `https://github.com/YOUR_USERNAME/portfolio-website.git` (HTTPS)
- `git@github.com:YOUR_USERNAME/portfolio-website.git` (SSH)

## Step 3: Run These Commands

After you have the repository URL, run these commands in your terminal:

```bash
cd C:\portfolio-website
git remote add origin YOUR_REPOSITORY_URL
git branch -M main
git push -u origin main
```

Replace `YOUR_REPOSITORY_URL` with the actual URL from Step 2.

## Alternative: Quick Setup Script

If you prefer, you can run this PowerShell script (replace YOUR_USERNAME and REPO_NAME):

```powershell
cd C:\portfolio-website
$repoUrl = "https://github.com/YOUR_USERNAME/REPO_NAME.git"
git remote add origin $repoUrl
git branch -M main
git push -u origin main
```

## Troubleshooting

If you get authentication errors:
- For HTTPS: You may need to use a Personal Access Token instead of password
- For SSH: Make sure your SSH key is added to GitHub

## After Pushing

Your code will be available at: `https://github.com/YOUR_USERNAME/portfolio-website`


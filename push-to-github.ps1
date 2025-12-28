# PowerShell script to push portfolio website to GitHub
# Run this AFTER creating a repository on GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Push Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get repository URL from user
$repoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git)"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "Error: Repository URL cannot be empty!" -ForegroundColor Red
    exit 1
}

# Validate URL format
if (-not ($repoUrl -match "github\.com")) {
    Write-Host "Warning: URL doesn't look like a GitHub URL. Continuing anyway..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Setting up remote and pushing to GitHub..." -ForegroundColor Green

try {
    # Check if remote already exists
    $existingRemote = git remote get-url origin 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Remote 'origin' already exists. Updating..." -ForegroundColor Yellow
        git remote set-url origin $repoUrl
    } else {
        Write-Host "Adding remote 'origin'..." -ForegroundColor Green
        git remote add origin $repoUrl
    }
    
    # Rename branch to main if needed
    Write-Host "Ensuring branch is named 'main'..." -ForegroundColor Green
    git branch -M main
    
    # Push to GitHub
    Write-Host "Pushing to GitHub..." -ForegroundColor Green
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "Success! Your code has been pushed to GitHub!" -ForegroundColor Green
        Write-Host "Repository: $repoUrl" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "Error: Push failed. Please check:" -ForegroundColor Red
        Write-Host "1. Repository URL is correct" -ForegroundColor Yellow
        Write-Host "2. You have access to the repository" -ForegroundColor Yellow
        Write-Host "3. Your GitHub credentials are set up correctly" -ForegroundColor Yellow
    }
} catch {
    Write-Host ""
    Write-Host "Error occurred: $_" -ForegroundColor Red
    Write-Host "Please check your repository URL and try again." -ForegroundColor Yellow
}


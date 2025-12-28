# Push to GitHub with Personal Access Token

## Quick Steps:

1. **Create Personal Access Token:**
   - Go to: https://github.com/settings/tokens/new
   - Token name: `Portfolio Push`
   - Expiration: Choose your preference
   - Scopes: Check **`repo`** (full control of private repositories)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Push using the token:**

   When prompted for password, use your **Personal Access Token** instead of your GitHub password.

   Run this command:
   ```powershell
   git push -u origin main
   ```
   
   When asked for username: Enter your GitHub username (`SudhirGomase`)
   When asked for password: Paste your Personal Access Token

## Alternative: Use Token in URL (One-time)

You can also use the token directly in the URL (replace YOUR_TOKEN):

```powershell
git remote set-url origin https://YOUR_TOKEN@github.com/SudhirGomase/Portfolio_SudhirGomase.git
git push -u origin main
```

**Note:** This stores the token in your git config. For security, consider using SSH keys instead.

## Using SSH (More Secure - Recommended for Future)

If you prefer SSH (more secure):

1. Generate SSH key (if you don't have one):
   ```powershell
   ssh-keygen -t ed25519 -C "sudhirgomase2109@gmail.com"
   ```

2. Add SSH key to GitHub:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste your key and save

3. Change remote to SSH:
   ```powershell
   git remote set-url origin git@github.com:SudhirGomase/Portfolio_SudhirGomase.git
   git push -u origin main
   ```


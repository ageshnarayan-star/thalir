# Deploying THALIR to Git & Vercel

The THALIR prototype is fully configured for deployment on Git (GitHub, GitLab, Bitbucket) and Vercel with zero configuration required.

---

## Method 1: Push to GitHub & Deploy on Vercel (Recommended)

### Step 1: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter repository name: `thalir-prototype` (or `thalir`).
3. Set visibility to **Public** or **Private**.
4. Click **Create repository** (do not initialize with README, as it already exists).

### Step 2: Link Remote and Push
In your terminal (from `C:\Users\AJEESH\.gemini\antigravity\scratch\thalir-prototype`):
```bash
# Add your GitHub repository as the remote
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/thalir-prototype.git

# Push the main branch
git push -u origin main
```

### Step 3: Deploy on Vercel (30 seconds)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** → **"Project"**.
3. Select your `thalir-prototype` GitHub repository from the list.
4. Vercel will automatically detect the static project and `vercel.json` configuration:
   - **Framework Preset:** Other / None
   - **Root Directory:** `./`
   - **Build Command:** *(Leave default or `npm run build`)*
   - **Output Directory:** `.`
5. Click **"Deploy"**.
6. In ~15 seconds, Vercel will provide your live URL (e.g., `https://thalir-prototype.vercel.app`).

---

## Method 2: Deploy Directly via Vercel CLI

If you have Node.js and prefer deploying directly from your terminal:
```bash
# Run Vercel CLI directly
npx vercel
```
- When prompted:
  - `Set up and deploy?` → **Y**
  - `Which scope?` → Select your Vercel account
  - `Link to existing project?` → **N**
  - `What's your project's name?` → `thalir` (or press Enter)
  - `In which directory is your code located?` → `./`
- To deploy to production:
```bash
npx vercel --prod
```

---

## Configuration Details Included

- **`vercel.json`**:
  - `cleanUrls: true` for clean browser routing
  - `trailingSlash: false`
  - HTTP security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection`)
- **`.gitignore`**:
  - Excludes `.vercel`, `node_modules`, system files, and caches
- **`package.json`**:
  - Provides `npm start` / `npm run dev` with local HTTP server (`npx serve`)

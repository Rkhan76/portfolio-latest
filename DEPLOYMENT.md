# Deployment Guide - Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

1. **GitHub Account**: Make sure your code is pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect to GitHub**:

   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"

2. **Import Repository**:

   - Select your portfolio repository from the list
   - Vercel will automatically detect it's a Vite project

3. **Configure Project**:

   - **Framework Preset**: Vite (should be auto-detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `dist` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables** (if needed):

   - Add any environment variables in the Vercel dashboard
   - For this portfolio, no environment variables are required

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at the provided URL

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Configuration Files

### `vercel.json`

This file is already configured for your project with:

- Build settings for Vite
- Security headers
- Asset caching
- SPA routing support

### Environment Variables

No environment variables are required for this portfolio.

## Custom Domain (Optional)

1. **Add Custom Domain**:

   - Go to your project in Vercel dashboard
   - Navigate to "Settings" → "Domains"
   - Add your custom domain

2. **Configure DNS**:
   - Follow Vercel's DNS configuration instructions
   - Update your domain's nameservers or add DNS records

## Performance Optimization

Your project is already optimized with:

- ✅ Code splitting in `vite.config.js`
- ✅ Terser minification
- ✅ Asset optimization
- ✅ Security headers
- ✅ Proper caching headers

## Troubleshooting

### Build Errors

- Check that all dependencies are in `package.json`
- Ensure `npm install` runs successfully locally
- Check the build logs in Vercel dashboard

### Favicon Issues

- Ensure favicon is in the `public` directory
- Check the path in `index.html` is correct (`/favicon1.png`)

### Routing Issues

- The `vercel.json` includes SPA routing configuration
- All routes should redirect to `index.html`

## Post-Deployment

1. **Test Your Site**:

   - Check all pages load correctly
   - Test responsive design
   - Verify all links work

2. **Analytics** (Optional):

   - Your project includes `@vercel/analytics`
   - Enable analytics in Vercel dashboard if desired

3. **Monitor Performance**:
   - Use Vercel's built-in analytics
   - Monitor Core Web Vitals
   - Check for any performance issues

## Updates

To update your deployed site:

1. Push changes to your GitHub repository
2. Vercel will automatically redeploy
3. Or manually trigger a redeploy from the Vercel dashboard

---

Your portfolio is now ready for deployment! 🚀

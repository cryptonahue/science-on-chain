#!/bin/bash

# Cloudflare Pages build script
echo "Starting Cloudflare build..."

# Remove any existing lock files and node_modules
rm -rf node_modules package-lock.json yarn.lock bun.lockb

# Clear npm cache
npm cache clean --force

# Install dependencies with force to handle optional deps
npm install --force --production=false

# Manually install the problematic rollup package
npm install @rollup/rollup-linux-x64-gnu --optional

# Verify installations
echo "Checking rollup installation..."
npm list rollup
npm list @rollup/rollup-linux-x64-gnu

# Build the project
npm run build

echo "Build completed!"
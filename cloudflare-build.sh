#!/bin/bash

# Cloudflare Pages build script
echo "Starting Cloudflare build..."

# Remove any existing lock files and node_modules
rm -rf node_modules package-lock.json yarn.lock bun.lockb

# Clear npm cache
npm cache clean --force

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps --production=false

# Verify rollup installation
npm list rollup

# Build the project
npm run build

echo "Build completed!"
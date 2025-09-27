#!/bin/bash

# Clean npm cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm cache clean --force
npm install --legacy-peer-deps

# Build the project
npm run astro build
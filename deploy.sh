#!/bin/bash

# DentiMap Production Deployment Script
echo "🚀 Starting DentiMap Production Deployment..."

# Build the production version
echo "📦 Building production bundle..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Production files are in the 'dist' folder"
    echo ""
    echo "🌐 Your application is configured for:"
    echo "   - Frontend: https://map.paninsight.org"
    echo "   - Backend API: https://map.paninsight.org"
    echo "   - Google OAuth: https://map.paninsight.org/login/oauth2/code/google"
    echo ""
    echo "🔧 Next steps:"
    echo "   1. Upload the 'dist' folder contents to your web server"
    echo "   2. Ensure your backend is running on the EC2 instance"
    echo "   3. Update Google OAuth console with the new redirect URI"
    echo "   4. Test the authentication flow"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

// next.config.js
const nextConfig = {
    async headers() {
      return [
        {
          // source: '/:path*',
          source: '/(.*)', // Apply to all routes
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
                script-src 'self' 'unsafe-inline' 'unsafe-eval' 
                https://www.googletagmanager.com 
                https://connect.facebook.net 
                https://www.google.com 
                https://www.gstatic.com;
                frame-src 'self' https://www.google.com;
                img-src 'self' https://www.facebook.com data:;
                connect-src 'self' https://www.google.com https://www.gstatic.com;
              `.replace(/\s{2,}/g, ' ').trim(), // Clean up whitespace for better readability
            },
          ],
        }
      ];
    },
    images: {
      domains: ['www.facebook.com'],
      unoptimized: true
    }
  };
  
  export default nextConfig;
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
              value: `frame-ancestors 'self' https://www.youtube.com https://youtube.com`
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
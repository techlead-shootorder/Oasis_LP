// next.config.js
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net; img-src 'self' https://www.facebook.com data:;"
            }
          ]
        }
      ];
    },
    images: {
      domains: ['www.facebook.com'],
      unoptimized: true
    }
  };
  
  export default nextConfig;
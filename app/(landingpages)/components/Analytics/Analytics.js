"use client"
import { createContext, useContext, useEffect } from "react";
import Script from "next/script";

// Analytics Context
const AnalyticsContext = createContext({});

export default function AnalyticsProvider({ gtmId, metaPixelId, children }) {
  useEffect(() => {
    // Initialize Meta Pixel on mount
    if (metaPixelId && typeof window !== 'undefined') {
      window.fbq = window.fbq || function() {
        if(window.fbq.callMethod){
          window.fbq.callMethod.apply(window.fbq, arguments)
        }
        else{
          window.fbq.queue.push(arguments)
        }
        
      };
      window.fbq('init', metaPixelId);
      window.fbq('track', 'PageView');
    }

    // Initialize GTM DataLayer
    if (gtmId && typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  }, [gtmId, metaPixelId]);

  const trackEvent = (eventName, params = {}) => {
    // Track in GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }

    // Track in Meta Pixel
    if (window.fbq) {
      window.fbq('track', eventName, params);
    }
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {/* Meta Pixel Script */}
      {metaPixelId && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `
            }}
          />
          <noscript>
            <img 
              height="1" 
              width="1" 
              className="hidden"
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* GTM Script */}
      {gtmId && (
        <>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              className="hidden"
            />
          </noscript>
        </>
      )}

      {children}
    </AnalyticsContext.Provider>
  );
}

// Custom hook to use analytics
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

// Page tracking component
export function PageViewTracker() {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackEvent('page_view', {
        page_path: url,
        page_title: document.title,
      });
    };

    if (typeof window !== 'undefined') {
      handleRouteChange(window.location.pathname);
    }

    // Listen for route changes
    window.addEventListener('popstate', () => 
      handleRouteChange(window.location.pathname)
    );

    return () => {
      window.removeEventListener('popstate', () => 
        handleRouteChange(window.location.pathname)
      );
    };
  }, [trackEvent]);

  return null;
}
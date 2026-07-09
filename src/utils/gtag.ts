export const GTAG_ID = 'AW-18242435618';

// Extend the window interface for Google Tag attributes
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Dynamically loads and initializes Google Tag gtag.js on the page.
 */
export const initGtag = () => {
  if (typeof window === 'undefined') return;

  // Prevent duplicate script tag injection
  if (document.getElementById('google-ads-gtag')) return;

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  // Inject the required gtag script
  const script = document.createElement('script');
  script.id = 'google-ads-gtag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  
  document.head.appendChild(script);

  // Initial config
  window.gtag('js', new Date());
  window.gtag('config', GTAG_ID, {
    send_page_view: false // Configured false initially so we track it via our React route listener
  });
};

/**
 * Tracks a pageview event for a given path.
 * @param path The URL path (e.g. '/servicos' or '/contato')
 */
export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
    send_to: GTAG_ID,
  });
};

/**
 * Sends a custom conversion or general tracking event to Google Ads.
 * @param action Event name (e.g., 'conversion', 'contact_click')
 * @param params Custom event parameters or conversion values
 */
export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    ...params,
    send_to: GTAG_ID,
  });
};

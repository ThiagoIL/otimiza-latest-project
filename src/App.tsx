import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';
import { initGtag, trackPageView } from './utils/gtag';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const BlogFeed = lazy(() => import('./pages/BlogFeed').then(m => ({ default: m.BlogFeed })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Cases = lazy(() => import('./pages/Cases').then(m => ({ default: m.Cases })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse').then(m => ({ default: m.TermsOfUse })));
const ObrigadoWhatsApp = lazy(() => import('./pages/ObrigadoWhatsApp').then(m => ({ default: m.ObrigadoWhatsApp })));
const LandingBI = lazy(() => import('./pages/LandingBI').then(m => ({ default: m.LandingBI })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(pathname);
  }, [pathname]);
  return null;
};

// Dedicated ad-campaign landing pages (e.g. /lp/bi) skip the global site
// navigation and footer on purpose — a paid-traffic landing page should
// only offer a single conversion path, not an exit into the full site menu.
const AppShell = () => {
  const { pathname } = useLocation();
  const isStandaloneLanding = pathname.startsWith('/lp/');

  return (
    <div className="flex flex-col min-h-screen">
      {!isStandaloneLanding && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/blog" element={<BlogFeed />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/servicos/:slug" element={<ServiceDetail />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/casos" element={<Cases />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/obrigado-whatsapp" element={<ObrigadoWhatsApp />} />
            <Route path="/lp/bi" element={<LandingBI />} />
          </Routes>
        </Suspense>
      </main>
      {!isStandaloneLanding && <Footer />}
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default function App() {
  useEffect(() => {
    initGtag();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppShell />
      </Router>
    </HelmetProvider>
  );
}

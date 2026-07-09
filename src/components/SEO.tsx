import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  preloadHero?: boolean;
}

const DEFAULT_KEYWORDS = "implantação de sistemas, consultoria empresarial, automação de processos, dashboards power bi, business intelligence, Dashboard Financeiro, Dashboard Produção, Dashboard Comercial, Dashboard Em estoque, Planilha Financeira, Api, API conta azul, API omie, empresa de BI, otimização de processos, sistemas empresariais, consultoria em dados, implantação de ERP, Natal RN, João Pessoa PB, Mossoró RN, Fortaleza CE";
const DEFAULT_DESCRIPTION = "Especialistas em transformar dados em decisões inteligentes. Implantação de sistemas, automação de processos e BI para empresas que buscam crescimento e eficiência operacional.";
const SITE_URL = "https://otimizamaisgestao.com";
const DEFAULT_IMAGE = `${SITE_URL}/image/banner/hero.webp`;

export const SEO = ({ 
  title, 
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  preloadHero = false
}: SEOProps) => {
  const fullTitle = `${title} | Otimiza+ Gestão`;
  const currentUrl = canonical || SITE_URL;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="theme-color" content="#1a3a52" />

      {/* Performance Optimization */}
      {preloadHero && (
        <link rel="preload" as="image" href="/image/banner/hero.webp" fetchPriority="high" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

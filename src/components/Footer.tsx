import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import { SERVICES } from '../data';
import { ContactInfo } from './ContactInfo';
import { CONTACT_INFO } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-primary text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Institutional */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3" aria-label="Ir para a página inicial">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/image/brand/logo.webp" 
                  alt="Otimiza+ Logo" 
                  width="40"
                  height="40"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tighter">
                Otimiza+
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-200">
              Especialistas em transformar dados em decisões inteligentes. 
              Implantação de sistemas, automação de processos e inteligência de dados para empresas que querem crescer com eficiência.
            </p>
            <div className="flex space-x-5">
              <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" 
                aria-label="Seguir no LinkedIn"
                className="text-slate-200 hover:text-accent transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
              <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" 
                aria-label="Seguir no Instagram"
                className="text-slate-200 hover:text-accent transition-all hover:scale-110"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Menu Rápido</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors" aria-label="Ir para a página inicial"><span>Início</span></Link></li>
              <li><Link to="/sobre" className="hover:text-accent transition-colors" aria-label="Conheça mais Sobre Nós">Sobre Nós</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors" aria-label="Acompanhe nosso Blog e Insights">Blog & Insights</Link></li>
              <li><Link to="/contato" className="hover:text-accent transition-colors" aria-label="Entre em contato conosco">Contato</Link></li>
              <li><Link to="/privacidade" className="hover:text-accent transition-colors" aria-label="Ver Política de Privacidade">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-4 text-sm">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/servicos/${service.slug}`} className="hover:text-accent transition-colors" aria-label={`Ver detalhes sobre ${service.title}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Fale Conosco</h3>
            <ContactInfo variant="footer" />
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold">
          <p>© {new Date().getFullYear()} Otimiza+. Todos os direitos reservados.</p>
          <p>Natal - RN</p>
        </div>
      </div>
    </footer>
  );
};

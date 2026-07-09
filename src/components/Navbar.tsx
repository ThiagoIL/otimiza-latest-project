import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '../utils/cn';
import { SERVICES } from '../data';
import { CONTACT_INFO } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Soluções', href: '/servicos' },
    { name: 'Cases', href: '/casos' },
    { name: 'Quem Somos', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        location.pathname !== '/' || isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3" aria-label="Ir para a página inicial">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/image/brand/logo.webp" 
                alt="Otimiza+ Logo" 
                width="48"
                height="48"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className={cn(
              "font-display font-bold text-2xl tracking-tighter transition-colors",
              location.pathname !== '/' || isScrolled ? "text-primary" : "text-white"
            )}>
              Otimiza+
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                aria-label={`Ir para a página ${link.name}`}
                className={cn(
                  "font-medium text-sm lg:text-base transition-all hover:scale-105",
                  isScrolled ? "text-text-main hover:text-secondary" : (location.pathname === '/' ? "text-white/90 hover:text-white drop-shadow-sm" : "text-text-main hover:text-secondary")
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/obrigado-whatsapp"
              aria-label="Falar com um Especialista no WhatsApp"
              className="bg-accent text-white px-8 py-3 rounded-xl font-bold text-sm lg:text-base hover:bg-emerald-600 transition-all shadow-[0_10px_20px_-5px_rgba(39,174,96,0.45)] hover:shadow-[0_15px_25px_-5px_rgba(39,174,96,0.55)] active:scale-95"
            >
              Falar com um Especialista
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link to="/obrigado-whatsapp" 
              aria-label="Falar conosco no WhatsApp"
              className={cn(
              isScrolled ? "text-green-600" : (location.pathname === '/' ? "text-white" : "text-green-600")
            )}>
              <MessageCircle className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isOpen}
              className={cn(
                "focus:outline-none p-1",
                isScrolled ? "text-slate-900" : (location.pathname === '/' ? "text-white" : "text-slate-900")
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden bg-white border-t border-slate-100 transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-[1000px] py-4 shadow-lg' : 'max-h-0'
        )}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              aria-label={`Ir para a página ${link.name}`}
              className="block text-slate-700 hover:text-primary font-bold py-2 text-lg"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <p className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Soluções Especializadas
            </p>
            {SERVICES.slice(0, 4).map((service) => (
              <Link
                key={service.id}
                to={`/servicos/${service.slug}`}
                aria-label={`Ver detalhes sobre ${service.title}`}
                className="block text-slate-600 hover:text-primary py-2.5 pl-2 font-medium"
              >
                {service.title}
              </Link>
            ))}
          </div>
          <Link
            to="/obrigado-whatsapp"
            aria-label="Falar com um Especialista no WhatsApp"
            className="block w-full bg-accent text-white text-center px-6 py-5 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-md active:scale-[0.98]"
          >
            Falar com um Especialista
          </Link>
        </div>
      </div>
    </nav>
  );
};

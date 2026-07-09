import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ContactInfoProps {
  variant?: 'footer' | 'contact-page';
}

export const ContactInfo = ({ variant = 'contact-page' }: ContactInfoProps) => {
  if (variant === 'footer') {
    return (
      <ul className="space-y-4 text-sm">
        <li className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-accent shrink-0" />
          <span>
            {CONTACT_INFO.address.full}
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-accent shrink-0" />
          <a href={`tel:${CONTACT_INFO.phone.value}`} className="hover:text-accent transition-colors">
            {CONTACT_INFO.phone.display}
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-accent shrink-0" />
          <a href={`mailto:${CONTACT_INFO.email.value}`} className="hover:text-accent transition-colors">
            {CONTACT_INFO.email.display}
          </a>
        </li>
      </ul>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex items-start space-x-6">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
          <MessageCircle className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
          <p className="text-slate-600 mb-4">Atendimento rápido e direto com nossos consultores.</p>
          <Link 
            to="/obrigado-whatsapp" 
            className="text-primary font-bold text-lg hover:text-accent hover:underline transition-colors"
          >
            {CONTACT_INFO.phone.display}
          </Link>
        </div>
      </div>

      <div className="flex items-start space-x-6">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
          <Mail className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">E-mail</h3>
          <p className="text-slate-600 mb-4">Para propostas formais e parcerias.</p>
          <a 
            href={`mailto:${CONTACT_INFO.email.value}`} 
            className="text-primary font-bold text-lg hover:text-accent hover:underline transition-colors"
          >
            {CONTACT_INFO.email.display}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-6">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
          <MapPin className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Localização</h3>
          <p className="text-slate-600">
            {CONTACT_INFO.address.full}
          </p>
        </div>
      </div>
    </div>
  );
};

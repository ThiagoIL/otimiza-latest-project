import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function ObrigadoWhatsApp() {
  const [countdown, setCountdown] = useState(2);
  const [searchParams] = useSearchParams();
  const textMsg = searchParams.get('text');

  const finalWhatsappUrl = textMsg
    ? `${CONTACT_INFO.phone.whatsappUrl}?text=${encodeURIComponent(textMsg)}`
    : CONTACT_INFO.phone.whatsappUrl;

  useEffect(() => {
    // Countdown timer for user feedback
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Automatic redirect to WhatsApp
    const redirectTimeout = setTimeout(() => {
      window.location.href = finalWhatsappUrl;
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [finalWhatsappUrl]);

  return (
    <>
      <Helmet>
        <title>Obrigado! Redirecionando para o WhatsApp | Otimiza+</title>
        <meta name="description" content="Agradecemos seu contato. Você está sendo redirecionado para o WhatsApp de nosso especialista." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 text-center relative overflow-hidden">
          {/* Top aesthetic accent */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-accent" />

          {/* Icon Circle */}
          <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100 animate-pulse">
            <CheckCircle className="w-8 h-8 text-emerald-500" />
          </div>

          {/* Content */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-display">
            Agradecemos o seu contato!
          </h1>
          <p className="text-slate-600 mb-8 font-sans">
            Sua solicitação foi registrada. Estamos preparando a sua conexão com um especialista para otimizar a sua gestão.
          </p>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100/80 mb-8">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <p className="text-sm font-semibold text-slate-700 font-sans">
                Redirecionando em {countdown} segundo{countdown !== 1 ? 's' : ''}...
              </p>
            </div>
            
            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${((3 - countdown) / 2) * 100}%` }}
              />
            </div>
          </div>

          {/* Manual Action Button */}
          <a
            href={finalWhatsappUrl}
            className="w-full flex items-center justify-center space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Ir para o WhatsApp agora</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <p className="text-[11px] text-slate-400 font-sans mt-6">
            Caso o redirecionamento automático não ocorra em instantes, por favor clique no botão acima para iniciar sua conversa.
          </p>
        </div>
      </div>
    </>
  );
}

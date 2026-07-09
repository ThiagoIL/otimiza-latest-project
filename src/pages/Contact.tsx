import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { IMaskInput } from 'react-imask';
import { Send, CheckCircle2, Linkedin, Instagram, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ContactInfo } from '../components/ContactInfo';
import { CONTACT_INFO } from '../constants';
import { cn } from '../utils/cn';

const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(14, 'Telefone inválido'),
  subject: z.string().min(1, 'Selecione um assunto'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
  consent: z.boolean().refine(val => val === true, 'Você deve aceitar a política de privacidade')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      // Formatação da mensagem para o WhatsApp
      const message = `*Nova Mensagem de Contato - Otimiza+*\n\n` +
        `*Nome:* ${data.name}\n` +
        `*E-mail:* ${data.email}\n` +
        `*Telefone:* ${data.phone}\n` +
        `*Assunto:* ${data.subject}\n\n` +
        `*Mensagem:* \n${data.message}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.value}?text=${encodedMessage}`;

      // Pequeno delay para simular processamento e melhorar UX
      await new Promise(resolve => setTimeout(resolve, 800));

      // Abre o WhatsApp em uma nova aba
      window.open(whatsappUrl, '_blank');

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (error) {
      setServerError('Ocorreu um erro ao preparar sua mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <SEO title="Contato" description="Entre em contato com a Otimiza+ Gestão e agende uma consultoria especializada para transformar os dados da sua empresa em resultados reais." />
      {/* Header */}
      <section className="relative py-24 bg-primary overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-full h-px bg-white/20 -rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-full h-px bg-white/20 rotate-12" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Contato</h4>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-[1.1]">
                Fale com um <span className="text-accent italic">Especialista</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans font-normal">
                Estamos prontos para ouvir seus desafios e propor soluções inteligentes para o seu negócio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10">Fale Conosco</h2>
              
              <ContactInfo />

              {/* Social Links */}
              <div className="mt-16 pt-16 border-t border-slate-100">
                <h3 className="text-slate-900 font-bold mb-6">Siga-nos nas redes sociais</h3>
                <div className="flex space-x-4">
                  <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 relative">
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-10 bg-slate-50/90 backdrop-blur-sm rounded-[3rem] flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                  <p className="text-slate-600">Agradecemos o contato. Nossa equipe retornará em breve.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={cn(
                        "w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                        errors.name ? "border-red-500" : "border-slate-200 focus:border-primary"
                      )}
                      placeholder="Seu nome"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">E-mail Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={cn(
                        "w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                        errors.email ? "border-red-500" : "border-slate-200 focus:border-primary"
                      )}
                      placeholder="seu@email.com.br"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700">Telefone / WhatsApp</label>
                    <Controller
                      control={control}
                      name="phone"
                      render={({ field: { onChange, value } }) => (
                        <IMaskInput
                          mask="(00) 00000-0000"
                          id="phone"
                          value={value}
                          onAccept={(value) => onChange(value)}
                          className={cn(
                            "w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                            errors.phone ? "border-red-500" : "border-slate-200 focus:border-primary"
                          )}
                          placeholder="(00) 00000-0000"
                        />
                      )}
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-700">Assunto</label>
                    <select
                      id="subject"
                      {...register('subject')}
                      className={cn(
                        "w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                        errors.subject ? "border-red-500" : "border-slate-200 focus:border-primary"
                      )}
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Implantação de Sistemas">Implantação de Sistemas</option>
                      <option value="Business Intelligence">Business Intelligence</option>
                      <option value="Assessoria em Dados">Assessoria em Dados</option>
                      <option value="Automação de Processos">Automação de Processos</option>
                      <option value="Outros">Outros</option>
                    </select>
                    {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Mensagem</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={cn(
                      "w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none",
                      errors.message ? "border-red-500" : "border-slate-200 focus:border-primary"
                    )}
                    placeholder="Como podemos ajudar sua empresa?"
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      {...register('consent')}
                      className="mt-1 w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                      Concordo com a <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a> e autorizo o uso dos meus dados para contato comercial da Otimiza+ Gestão.
                    </label>
                  </div>
                  {errors.consent && <p className="text-xs text-red-500">{errors.consent.message}</p>}
                </div>

                {serverError && (
                  <p className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Enviando...' : 'Agendar Reunião com Especialista'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-slate-200 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127020.22866890412!2d-35.304608901385116!3d-5.8015817909925484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3aaac26460531%3A0x5d8b404cf00fed69!2sNatal%2C%20RN!5e0!3m2!1spt-BR!2sbr!4v1773533411812!5m2!1spt-BR!2sbr%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Localização Otimiza+ Gestão"
        ></iframe>
      </section>
    </div>
  );
};

import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidade</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Última atualização: 11 de Março de 2026
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introdução</h2>
            <p>
              A Otimiza+ Gestão valoriza a privacidade dos seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Dados Coletados</h2>
            <p>Coletamos dados que você nos fornece voluntariamente através de nossos formulários de contato, tais como:</p>
            <ul>
              <li>Nome completo</li>
              <li>E-mail corporativo</li>
              <li>Assunto de interesse</li>
              <li>Mensagem enviada</li>
            </ul>
            <p>Também coletamos dados de navegação de forma automatizada através de cookies para análise de performance e melhoria da experiência do usuário.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalidade do Uso</h2>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul>
              <li>Responder a solicitações de contato e orçamentos;</li>
              <li>Enviar comunicações de marketing e newsletters (quando autorizado);</li>
              <li>Melhorar a navegabilidade e conteúdo do nosso site;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Armazenamento e Segurança</h2>
            <p>
              Seus dados são armazenados em servidores seguros com protocolos de criptografia e acesso restrito. Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Seus Direitos</h2>
            <p>Conforme a LGPD, você tem o direito de:</p>
            <ul>
              <li>Confirmar a existência de tratamento de dados;</li>
              <li>Acessar seus dados;</li>
              <li>Corrigir dados incompletos ou inexatos;</li>
              <li>Solicitar a exclusão de seus dados;</li>
              <li>Revogar seu consentimento a qualquer momento.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contato</h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com nosso Encarregado de Dados (DPO) através do e-mail: <strong>dpo@otimizamaisgestao.com.br</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

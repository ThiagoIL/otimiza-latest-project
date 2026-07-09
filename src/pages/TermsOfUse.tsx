import React from 'react';

export const TermsOfUse = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Termos de Uso</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Última atualização: 11 de Março de 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Otimiza+ Gestão, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso do Conteúdo</h2>
            <p>
              Todo o conteúdo disponibilizado neste site, incluindo textos, gráficos, logotipos, ícones e imagens, é de propriedade exclusiva da Otimiza+ Gestão ou de seus licenciadores e está protegido pelas leis de direitos autorais.
            </p>
            <p>É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia por escrito.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Responsabilidades</h2>
            <p>
              A Otimiza+ Gestão se esforça para manter as informações do site precisas e atualizadas, porém não garante a total isenção de erros técnicos ou tipográficos. O uso das informações é de inteira responsabilidade do usuário.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Links para Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência. Não temos controle sobre o conteúdo desses sites e não assumimos responsabilidade por suas práticas de privacidade ou termos de uso.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio. Recomendamos a revisão periódica desta página para estar ciente de quaisquer atualizações.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Lei Aplicável</h2>
            <p>
              Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

import { BlogPost, Service, Partner, SuccessCase } from './types';

export const SUCCESS_CASES: SuccessCase[] = [
  {
    id: '1',
    title: 'Transformação do BI Financeiro',
    company: 'Bee Christian School',
    clientName: 'Mateus',
    sector: 'Educação / Ensino',
    size: 'Escola Bilíngue',
    challenge: 'Dificuldade em visualizar dados financeiros consolidados de forma clara e ágil para auxiliar na tomada de decisão estratégica.',
    solution: 'Desenvolvimento de um BI Financeiro completo e personalizado de alta visão analítica.',
    results: [
      'Dados complexos transformados em informações claras e estratégicas',
      'Visualização de fluxos e indicadores em tempo real para a gestão',
      'Decisões orientadas com excelência para organização e crescimento'
    ],
    testimonial: 'Quero destacar o excelente trabalho que o João vem desenvolvendo na construção do BI financeiro da empresa. Além da dedicação e do comprometimento, ele tem demonstrado muita competência em transformar dados complexos em informações claras e estratégicas para a gestão. O cuidado nos detalhes e a visão analítica fazem toda diferença, e esse projeto certamente será um grande apoio para o crescimento e a organização da empresa. Parabéns pelo trabalho e pela excelência que vem entregando!'
  },
  {
    id: '2',
    title: 'Cultura Orientada por Dados',
    company: 'BNB',
    clientName: 'Felipe Mello',
    sector: 'Hotelaria',
    size: 'Médio Porte',
    challenge: 'Decisões operacionais sem clareza estatística, dependendo de relatórios manuais de feedback lento.',
    solution: 'Implantação de uma infraestrutura de inteligência de dados com BI e painéis inteligentes.',
    results: [
      'Empresa transformada em um negócio 100% dirigido por dados',
      'Estabelecimento de um pilar central para o sucesso comercial',
      'Aumento substancial na agilidade e assertividade operacional'
    ],
    testimonial: 'A Otimiza+ hoje representa um dos pilares de sucesso do meu negócio. Foi por meio dela que consegui transformar minha empresa em um negócio dirigido por dados'
  },
  {
    id: '3',
    title: 'Ferramenta e Solução Personalizada',
    company: 'VSG',
    clientName: 'Diogo',
    sector: 'Saúde',
    size: 'Soluções Sob Medida',
    challenge: 'Necessidade de ferramentas ajustadas especificamente ao ecossistema e fluxo operacional do negócio.',
    solution: 'Análise profunda de necessidades e entrega de solução automatizada sob medida com acompanhamento de evolução.',
    results: [
      'Entrega de ferramenta personalizada para resolução de gargalos',
      'Acompanhamento profissional contínuo de ponta a ponta',
      'Desenvolvimento e evolução ágil de novas funcionalidades'
    ],
    testimonial: 'A Otimiza vem fazendo um ótimo trabalho, buscaram inicialmente entender nossas necessidades e posteriormente nos apresentaram uma ferramenta personalizada para resolução e vem acompanhando o desenvolvimento e evolução dela.'
  },
  {
    id: '4',
    title: 'Decisões Inteligentes e Expansão de Ganhos',
    company: 'Lavpop',
    clientName: 'Marcus',
    sector: 'Lavanderia / Serviços',
    size: 'Rede de Franquias',
    challenge: 'Dificuldade em compilar e enxergar padrões em um mar de dados espalhados, limitando o descobrimento de novas frentes de faturamento.',
    solution: 'Centralização de dados analíticos comerciais e identificação de padrões de comportamento de consumo.',
    results: [
      'Maior controle sobre os indicadores operacionais críticos do negócio',
      'Ampliação do faturamento ao explorar oportunidades ocultas nos dados',
      'Decisões comerciais rápidas pautadas em clareza estatística'
    ],
    testimonial: 'A Otimiza+  me ajudou a ter um maior controle sobre os dados do meu negócio e a trazer uma maior precisão nas informações necessárias à tomada de decisão. Isso me ajudou a ampliar o faturamento a partir do momento em que eu comecei a explorar oportunidades de negócio que estavam escondidas na imensidão dos dados. Isso foi muito positivo e por conta disso eu super recomendo os serviços da Otimiza+ .'
  },
  {
    id: '5',
    title: 'Integração de Sistemas e BI de Alta Performance',
    company: 'Haute Ambientes',
    clientName: 'Gustavo',
    sector: 'Arquitetura / Ambientes',
    size: 'Móveis & Projetos',
    challenge: 'Sistemas desconectados gerando relatórios confusos e decisões de gestão baseadas em sentimentos e percepções.',
    solution: 'Integração ponta a ponta dos sistemas internos e construção de painéis inteligentes de BI personalizados.',
    results: [
      'Integração de sistemas legados de forma harmônica e automatizada',
      'Informações analíticas extremamente claras e de uso diário prático',
      'Decisões guiadas 100% por indicadores reais de faturamento e margem'
    ],
    testimonial: 'Quero agradecer ao João, da Otimiza+, pelo excelente trabalho que vem realizando junto à Haute Ambientes. Através da integração dos nossos sistemas e da construção de painéis de BI, ele tem transformado dados em informações claras e práticas, permitindo que nossas decisões sejam cada vez mais orientadas por indicadores reais e não apenas por percepções. Empresa extremamente competente e comprometida com os resultados do cliente.'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Implantação de Sistemas',
    slug: 'implantacao-de-sistemas',
    description: 'Implementamos sistemas empresariais que organizam processos, aumentam produtividade e trazem controle para a gestão.',
    fullDescription: 'Nossa implantação de sistemas foca em organizar o fluxo de trabalho da sua empresa. Trabalhamos com os principais ERPs do mercado, garantindo que a tecnologia sirva ao negócio e não o contrário.',
    benefits: [
      'Organização de processos internos',
      'Aumento real de produtividade',
      'Controle total da gestão financeira e operacional',
      'Redução de erros manuais'
    ],
    examples: [
      'Implantação de ERP para indústrias',
      'Configuração de CRM para equipes de vendas',
      'Integração de sistemas de estoque e logística'
    ],
    icon: 'Settings',
    image: '/image/servicos/implantacao-de-sistemas.jpg'
  },
  {
    id: '2',
    title: 'Business Intelligence (BI)',
    slug: 'business-intelligence',
    description: 'Transformamos dados em dashboards inteligentes que auxiliam a tomada de decisão estratégica.',
    fullDescription: 'O BI da Otimiza+ vai além de gráficos bonitos. Criamos uma cultura orientada a dados, onde cada decisão é baseada em fatos e indicadores precisos em tempo real.',
    benefits: [
      'Visualização clara de indicadores (KPIs)',
      'Identificação de gargalos e oportunidades',
      'Dashboards interativos e automatizados',
      'Previsibilidade de faturamento e custos'
    ],
    examples: [
      'Dashboard de performance de vendas',
      'Relatório automatizado de DRE',
      'Análise de comportamento de clientes'
    ],
    icon: 'BarChart3',
    image: '/image/servicos/business-intelligence.jpg'
  },
  {
    id: '3',
    title: 'Assessoria em Dados',
    slug: 'assessoria-em-dados',
    description: 'Acompanhamento especializado para estruturar dados, indicadores e relatórios estratégicos.',
    fullDescription: 'Nossa assessoria ajuda sua empresa a estruturar a base de dados necessária para o crescimento. Modelamos seus dados para que sejam confiáveis e fáceis de consumir.',
    benefits: [
      'Estruturação de indicadores estratégicos',
      'Modelagem de dados eficiente',
      'Acompanhamento mensal de resultados',
      'Treinamento de equipes para análise de dados'
    ],
    examples: [
      'Saneamento de base de dados legada',
      'Criação de dicionário de dados empresarial',
      'Consultoria para escolha de ferramentas de dados'
    ],
    icon: 'Database',
    image: '/image/servicos/assessoria-em-dados.jpg',
    videoUrl: 'https://www.instagram.com/reel/DQCmA0tjrqJ/'
  },
  {
    id: '4',
    title: 'Automação de Processos',
    slug: 'automacao-de-processos',
    description: 'Automação de tarefas repetitivas, integrações via API e entre ferramentas para ganho de escala.',
    fullDescription: 'Eliminamos o trabalho manual repetitivo através de automações inteligentes. Utilizamos ferramentas poderosas como n8n, Make e integrações diretas via API (REST/Webhooks) para conectar suas ferramentas favoritas, garantindo que os dados fluam sem intervenção humana e com máxima confiabilidade.',
    benefits: [
      'Eliminação de tarefas manuais repetitivas',
      'Integração via API com sistemas proprietários',
      'Integração fluida entre differentes softwares',
      'Redução drástica de custos operacionais',
      'Escalabilidade do negócio'
    ],
    examples: [
      'Automação de fluxo de aprovação de pedidos',
      'Integração de sistemas legados via API',
      'Integração entre site e CRM',
      'Envio automatizado de relatórios por e-mail'
    ],
    icon: 'Zap',
    image: '/image/servicos/automacao-de-processos.jpg'
  },
  {
    id: '5',
    title: 'Automação',
    slug: 'automacao',
    description: 'Soluções inteligentes para automatizar fluxos de trabalho, integrações via API e aumento da eficiência operacional.',
    fullDescription: 'Desenvolvemos automações personalizadas utilizando plataformas como n8n, Make e integrações diretas via API (REST/Webhooks) para conectar suas ferramentas e eliminar tarefas manuais, permitindo que sua equipe foque no que realmente importa.',
    benefits: [
      'Redução de erros humanos',
      'Economia de tempo e recursos',
      'Integração via API com sistemas legados e proprietários',
      'Padronização de processos',
      'Escalabilidade operacional'
    ],
    examples: [
      'Automação de marketing e vendas',
      'Conexão entre sistemas via API REST e Webhooks',
      'Fluxos de aprovação automáticos',
      'Sincronização de dados entre sistemas'
    ],
    icon: 'Zap',
    image: '/image/servicos/automacao.jpg'
  },
  {
    id: '6',
    title: 'Site',
    slug: 'site',
    description: 'Criação de sites profissionais, otimizados e focados em conversão para sua empresa.',
    fullDescription: 'Desenvolvemos sites modernos, responsivos e otimizados para mecanismos de busca (SEO), garantindo uma presença digital forte e profissional para seu negócio.',
    benefits: [
      'Design moderno e responsivo',
      'Otimização para SEO',
      'Foco em conversão de leads',
      'Alta performance e velocidade'
    ],
    examples: [
      'Landing pages de alta conversão',
      'Sites institucionais',
      'Portais de conteúdo'
    ],
    icon: 'Globe',
    image: '/image/servicos/site.jpg'
  },
  {
    id: '7',
    title: 'Criação de Sistemas WEB',
    slug: 'criacao-de-sistemas-web',
    description: 'Desenvolvimento de sistemas de gerenciamento e plataformas web exclusivas, criadas sob medida a gosto do cliente.',
    fullDescription: 'Desenvolvemos sistemas web e plataformas completas, 100% personalizados sob demanda para atender as necessidades exatas do seu negócio. Seja um Sistema de Gestão da Qualidade (SGQ) ou uma plataforma operacional exclusiva, nossa equipe cria soluções robustas, seguras e focadas na agilidade das suas operações, moldadas a gosto do cliente e com total flexibilidade funcional.',
    benefits: [
      'Sistemas criados a gosto de cada cliente',
      'Plataformas desenvolvidas 100% sob demanda',
      'Controle operacional total com hierarquização segura de acessos',
      'Interface moderna, ágil, intuitiva e totalmente responsiva'
    ],
    examples: [
      'Sistemas de Gestão da Qualidade (SGQ) Personalizados',
      'Portais operacionais corporativos e integrados',
      'Sistemas para controle de estoque e catálogos comerciais',
      'Painéis administrativos e dashboards sob demanda'
    ],
    icon: 'LayoutGrid',
    image: '/image/servicos/sistemas/painel_geral.jpg',
    additionalImages: [
      '/image/servicos/sistemas/planejamentos.jpg',
      '/image/servicos/sistemas/giro_home.jpg',
      '/image/servicos/sistemas/giro_catalogo.jpg'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Como o BI pode transformar sua pequena empresa',
    slug: 'como-bi-transforma-pequena-empresa',
    excerpt: 'Descubra como a inteligência de dados não é exclusividade de grandes corporações e como ela pode salvar seu negócio.',
    content: 'O Business Intelligence (BI) é muitas vezes visto como algo complexo e caro, mas a realidade é que pequenas empresas são as que mais se beneficiam de decisões rápidas baseadas em dados...',
    author: 'Equipe Otimiza+',
    date: '10 Mar 2026',
    category: 'Business Intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    readTime: '5 min'
  },
  {
    id: '2',
    title: '5 Sinais que sua empresa precisa de um novo ERP',
    slug: '5-sinais-novo-erp',
    excerpt: 'Planilhas excessivas e falta de confiança nos dados são apenas o começo. Veja se está na hora de mudar.',
    content: 'Muitas empresas seguram sistemas antigos por medo da mudança, mas o custo da ineficiência pode ser muito maior do que o investimento em um novo sistema...',
    author: 'Equipe Otimiza+',
    date: '08 Mar 2026',
    category: 'Sistemas de Gestão',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=600',
    readTime: '7 min'
  },
  {
    id: '3',
    title: 'O futuro da automação com IA em 2026',
    slug: 'futuro-automacao-ia-2026',
    excerpt: 'A inteligência artificial mudou o jogo da automação. Saiba o que esperar para este ano.',
    content: 'A automação de processos não é mais apenas sobre "se isso, então aquilo". Com a integração de ferramentas como n8n, Make e o poder da IA, os sistemas agora podem tomar decisões contextuais e executar fluxos complexos de forma autônoma...',
    author: 'Equipe Otimiza+',
    date: '05 Mar 2026',
    category: 'Automação',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600',
    readTime: '6 min'
  }
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'Parceiro 1', logo: '/image/partners/logo1.png' },
  { id: '2', name: 'Parceiro 2', logo: '/image/partners/logo2.png' },
  { id: '3', name: 'Parceiro 3', logo: '/image/partners/logo3.png' },
  { id: '4', name: 'Parceiro 4', logo: '/image/partners/logo4.png' },
  { id: '5', name: 'Parceiro 5', logo: '/image/partners/logo5.png' },
  { id: '6', name: 'Parceiro 6', logo: '/image/partners/logo6.png' },
  { id: '7', name: 'Parceiro 7', logo: '/image/partners/logo7.png' },
  { id: '9', name: 'Parceiro 9', logo: '/image/partners/logo9.png' },
  { id: '10', name: 'Parceiro 10', logo: '/image/partners/logo10.png' },
  { id: '12', name: 'Parceiro 12', logo: '/image/partners/logo12.png' },
  { id: '13', name: 'Parceiro 13', logo: '/image/partners/logo13.png' },
  { id: '14', name: 'Parceiro 14', logo: '/image/partners/logo14.png' },
  { id: '15', name: 'Parceiro 15', logo: '/image/partners/logo15.png' },
  { id: '17', name: 'Parceiro 17', logo: '/image/partners/logo17.png' },
  { id: '18', name: 'Parceiro 18', logo: '/image/partners/logo18.png' },
  { id: '19', name: 'Parceiro 19', logo: '/image/partners/logo19.png' },
  { id: '20', name: 'Parceiro 20', logo: '/image/partners/logo20.png' },
  { id: '21', name: 'VSG', logo: '/image/partners/logo21.png' },
];

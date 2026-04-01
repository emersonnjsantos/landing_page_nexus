import { motion } from "motion/react";
import { ExternalLink, TrendingUp, Users, Zap, Star } from "lucide-react";

const cases = [
  {
    title: "FinTech Banking App",
    client: "Confidencial",
    category: "Fintech",
    description: "Aplicativo bancário completo com foco em segurança e performance para gerenciamento de contas, transferências e investimentos.",
    image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stats: [
      { label: "Usuários Ativos", value: "500K+" },
      { label: "Transações/dia", value: "1M+" },
      { label: "Rating", value: "4.8★" },
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    results: [
      "Redução de 40% no tempo de carregamento",
      "99.99% de uptime em 12 meses",
      "Aumento de 60% em conversão",
    ]
  },
  {
    title: "E-commerce Fashion",
    client: "Confidencial",
    category: "Varejo",
    description: "Plataforma de e-commerce mobile com experiência de compra personalizada, AR para experimentação virtual e checkout simplificado.",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stats: [
      { label: "Downloads", value: "1M+" },
      { label: "GMV Mensal", value: "R$ 5M" },
      { label: "Rating", value: "4.7★" },
    ],
    tech: ["Flutter", "Firebase", "Stripe", "Google Cloud"],
    results: [
      "Aumento de 85% nas vendas mobile",
      "Redução de 50% em carrinho abandonado",
      "ROI de 300% em 6 meses",
    ]
  },
  {
    title: "Health & Fitness Tracker",
    client: "Confidencial",
    category: "Saúde",
    description: "App de monitoramento de saúde integrado com wearables, com IA para análise de dados e recomendações personalizadas.",
    image: "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stats: [
      { label: "Usuários", value: "300K+" },
      { label: "Dados/dia", value: "10M+" },
      { label: "Rating", value: "4.9★" },
    ],
    tech: ["Swift", "Kotlin", "HealthKit", "Google Fit"],
    results: [
      "Integração com 15+ wearables",
      "Precisão de 95% nas métricas",
      "Engajamento de 80% após 30 dias",
    ]
  },
  {
    title: "Food Delivery Platform",
    client: "Confidencial",
    category: "Food Tech",
    description: "Aplicativo de delivery com rastreamento em tempo real, múltiplas formas de pagamento e gamificação para fidelização.",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stats: [
      { label: "Pedidos/dia", value: "50K+" },
      { label: "Restaurantes", value: "5K+" },
      { label: "Rating", value: "4.6★" },
    ],
    tech: ["React Native", "GraphQL", "MongoDB", "Mapbox"],
    results: [
      "Tempo médio de entrega: 28min",
      "Taxa de retenção de 65%",
      "Crescimento de 120% ano/ano",
    ]
  },
  {
    title: "EdTech Learning App",
    client: "Confidencial",
    category: "Educação",
    description: "Plataforma educacional mobile com vídeo aulas, exercícios interativos e sistema de gamificação para engajamento.",
    image: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stats: [
      { label: "Estudantes", value: "200K+" },
      { label: "Cursos", value: "1K+" },
      { label: "Rating", value: "4.8★" },
    ],
    tech: ["Flutter", "AWS", "Vimeo", "Firebase"],
    results: [
      "Taxa de conclusão de 72%",
      "Engajamento diário de 45min",
      "NPS de 75 pontos",
    ]
  },
  {
    title: "Social Music App",
    client: "Confidencial",
    category: "Entretenimento",
    description: "Rede social focada em música com streaming, playlists colaborativas e descoberta de novos artistas.",
    image: "https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stats: [
      { label: "Usuários", value: "800K+" },
      { label: "Streams/mês", value: "50M+" },
      { label: "Rating", value: "4.7★" },
    ],
    tech: ["Swift", "Kotlin", "Spotify SDK", "AWS"],
    results: [
      "Crescimento orgânico de 200%",
      "Tempo médio de sessão: 45min",
      "Viral coefficient de 1.5",
    ]
  },
];

const CasesPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-medium text-soft-text mb-6">
            Cases de Sucesso
          </h1>
          <p className="text-xl text-soft-muted max-w-3xl mx-auto leading-relaxed">
            Transformamos desafios complexos em produtos digitais excepcionais que geram resultados reais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-soft-text">
                  {caseItem.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold text-soft-text mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-soft-muted mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseItem.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-display font-bold text-soft-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-soft-muted">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {caseItem.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-soft-bg rounded-full text-soft-text font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {caseItem.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-soft-text">{result}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-soft-bg text-soft-text py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-soft-text hover:text-white transition-all">
                  Ver Detalhes do Case
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-display font-medium mb-4">
            Pronto para o próximo case de sucesso?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Vamos transformar sua ideia em um produto digital de alta performance que seus usuários vão adorar.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Começar Meu Projeto
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CasesPage;

import { motion } from "motion/react";
import { Smartphone, Layers, Globe, Code as Code2, Zap, LayoutGrid as Layout, ArrowRight, CircleCheck as CheckCircle } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Nativo",
    description: "Apps iOS (Swift) e Android (Kotlin) de alta performance com acesso total às APIs do sistema.",
    icon: Smartphone,
    color: "bg-blue-50 text-blue-600",
    features: [
      "Desenvolvimento nativo iOS com Swift e SwiftUI",
      "Desenvolvimento nativo Android com Kotlin e Jetpack Compose",
      "Integração completa com APIs nativas do sistema",
      "Performance otimizada para cada plataforma",
      "Acesso a recursos exclusivos de hardware",
      "Publicação nas lojas Apple App Store e Google Play"
    ],
    pricing: "A partir de R$ 80.000"
  },
  {
    title: "Cross-Platform",
    description: "Soluções robustas com React Native e Flutter, mantendo 95% de compartilhamento de código.",
    icon: Layers,
    color: "bg-purple-50 text-purple-600",
    features: [
      "Desenvolvimento com React Native ou Flutter",
      "Compartilhamento de código entre iOS e Android",
      "Performance próxima ao nativo",
      "Hot reload para desenvolvimento ágil",
      "Integração com APIs nativas quando necessário",
      "Redução de custos e tempo de desenvolvimento"
    ],
    pricing: "A partir de R$ 50.000"
  },
  {
    title: "Arquitetura de Sistemas",
    description: "Design de infraestrutura escalável e resiliente para suportar milhões de usuários simultâneos.",
    icon: Globe,
    color: "bg-green-50 text-green-600",
    features: [
      "Arquitetura de microserviços escalável",
      "Design de APIs RESTful e GraphQL",
      "Implementação de caching estratégico",
      "Load balancing e auto-scaling",
      "Estratégias de backup e disaster recovery",
      "Documentação técnica completa"
    ],
    pricing: "A partir de R$ 40.000"
  },
  {
    title: "Otimização de Performance",
    description: "Auditoria e refatoração de código para garantir tempos de resposta instantâneos.",
    icon: Zap,
    color: "bg-orange-50 text-orange-600",
    features: [
      "Auditoria completa de performance",
      "Profiling e identificação de gargalos",
      "Otimização de renderização e memory leaks",
      "Redução de bundle size",
      "Implementação de lazy loading",
      "Relatório detalhado com métricas"
    ],
    pricing: "A partir de R$ 25.000"
  },
  {
    title: "UI/UX Design Mobile",
    description: "Interfaces modernas focadas em usabilidade e micro-interações fluidas.",
    icon: Layout,
    color: "bg-pink-50 text-pink-600",
    features: [
      "Design System personalizado",
      "Prototipagem interativa em Figma",
      "Testes de usabilidade com usuários reais",
      "Animações e micro-interações",
      "Design responsivo para todos os tamanhos",
      "Acessibilidade (WCAG 2.1)"
    ],
    pricing: "A partir de R$ 30.000"
  },
  {
    title: "Backend for Frontend",
    description: "APIs otimizadas especificamente para consumo mobile, reduzindo o tráfego de dados.",
    icon: Code2,
    color: "bg-gray-50 text-gray-600",
    features: [
      "APIs REST ou GraphQL otimizadas",
      "Implementação de BFF pattern",
      "Redução de payload e tráfego de dados",
      "Caching inteligente",
      "Autenticação e autorização segura",
      "Monitoramento e logging avançado"
    ],
    pricing: "A partir de R$ 35.000"
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-medium text-soft-text mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-soft-muted max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas de engenharia mobile, desde o design até a implementação e otimização contínua.
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-semibold text-soft-text mb-3">
                        {service.title}
                      </h2>
                      <p className="text-lg text-soft-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-soft-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:border-l lg:border-gray-100 lg:pl-8">
                  <div className="bg-soft-bg rounded-2xl p-6">
                    <div className="text-sm font-bold uppercase tracking-wider text-soft-muted mb-2">
                      Investimento
                    </div>
                    <div className="text-3xl font-display font-bold text-soft-text mb-6">
                      {service.pricing}
                    </div>
                    <button className="w-full bg-soft-text text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      Solicitar Proposta
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-soft-text">
                      <strong>Garantia:</strong> Suporte técnico incluso por 3 meses após o lançamento.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-soft-text text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-display font-medium mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Oferecemos soluções personalizadas para desafios específicos. Entre em contato e vamos discutir seu projeto.
          </p>
          <button className="bg-white text-soft-text px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Falar com Especialista
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;

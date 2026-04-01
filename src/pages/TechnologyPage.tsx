import { motion } from "motion/react";
import { Code as Code2, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react";

const techCategories = [
  {
    title: "Mobile Nativo",
    icon: Smartphone,
    color: "bg-blue-50 text-blue-600",
    technologies: [
      { name: "Swift", description: "Linguagem oficial para iOS", level: "Expert" },
      { name: "SwiftUI", description: "Framework moderno de UI da Apple", level: "Expert" },
      { name: "Kotlin", description: "Linguagem oficial para Android", level: "Expert" },
      { name: "Jetpack Compose", description: "Toolkit moderno de UI Android", level: "Expert" },
      { name: "Xcode", description: "IDE oficial para desenvolvimento iOS", level: "Expert" },
      { name: "Android Studio", description: "IDE oficial para Android", level: "Expert" },
    ]
  },
  {
    title: "Cross-Platform",
    icon: Code2,
    color: "bg-purple-50 text-purple-600",
    technologies: [
      { name: "React Native", description: "Framework JavaScript da Meta", level: "Expert" },
      { name: "Flutter", description: "Framework Dart do Google", level: "Expert" },
      { name: "Expo", description: "Plataforma para React Native", level: "Advanced" },
      { name: "TypeScript", description: "JavaScript com tipagem estática", level: "Expert" },
      { name: "Dart", description: "Linguagem para Flutter", level: "Advanced" },
    ]
  },
  {
    title: "Backend & APIs",
    icon: Database,
    color: "bg-green-50 text-green-600",
    technologies: [
      { name: "Node.js", description: "Runtime JavaScript server-side", level: "Expert" },
      { name: "GraphQL", description: "Linguagem de consulta para APIs", level: "Advanced" },
      { name: "REST API", description: "Arquitetura de APIs web", level: "Expert" },
      { name: "PostgreSQL", description: "Banco de dados relacional", level: "Expert" },
      { name: "MongoDB", description: "Banco de dados NoSQL", level: "Advanced" },
      { name: "Redis", description: "Cache e message broker", level: "Advanced" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "bg-orange-50 text-orange-600",
    technologies: [
      { name: "AWS", description: "Amazon Web Services", level: "Expert" },
      { name: "Firebase", description: "Plataforma do Google", level: "Expert" },
      { name: "Docker", description: "Containerização de aplicações", level: "Advanced" },
      { name: "Kubernetes", description: "Orquestração de containers", level: "Advanced" },
      { name: "GitHub Actions", description: "CI/CD automation", level: "Expert" },
      { name: "Terraform", description: "Infrastructure as Code", level: "Advanced" },
    ]
  },
  {
    title: "Segurança",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    technologies: [
      { name: "OAuth 2.0", description: "Protocolo de autorização", level: "Expert" },
      { name: "JWT", description: "JSON Web Tokens", level: "Expert" },
      { name: "SSL/TLS", description: "Criptografia de transporte", level: "Expert" },
      { name: "Biometria", description: "Touch ID, Face ID", level: "Advanced" },
      { name: "Keychain", description: "Armazenamento seguro iOS", level: "Expert" },
      { name: "Keystore", description: "Armazenamento seguro Android", level: "Expert" },
    ]
  },
  {
    title: "Performance & Testing",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
    technologies: [
      { name: "Jest", description: "Framework de testes JavaScript", level: "Expert" },
      { name: "Detox", description: "Testes E2E para React Native", level: "Advanced" },
      { name: "XCTest", description: "Framework de testes iOS", level: "Expert" },
      { name: "Espresso", description: "Framework de testes Android", level: "Advanced" },
      { name: "Lighthouse", description: "Auditoria de performance", level: "Expert" },
      { name: "New Relic", description: "Monitoramento de performance", level: "Advanced" },
    ]
  },
];

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "50+", label: "Tecnologias Dominadas" },
  { value: "100+", label: "Projetos Entregues" },
  { value: "99.9%", label: "Uptime Médio" },
];

const TechnologyPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-medium text-soft-text mb-6">
            Nossa Stack Tecnológica
          </h1>
          <p className="text-xl text-soft-muted max-w-3xl mx-auto leading-relaxed">
            Utilizamos as melhores ferramentas e frameworks da indústria para garantir aplicações de alta qualidade e performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100"
            >
              <div className="text-4xl font-display font-bold text-soft-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-soft-muted font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-semibold text-soft-text">
                  {category.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-display font-semibold text-soft-text">
                        {tech.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tech.level === "Expert"
                          ? "bg-green-50 text-green-600"
                          : "bg-blue-50 text-blue-600"
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                    <p className="text-sm text-soft-muted">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-soft-text to-gray-700 text-white rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-medium mb-4">
                Sempre atualizados
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Investimos constantemente em treinamento e certificações para garantir que nossa equipe domine as tecnologias mais recentes do mercado.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Certificações Apple e Google</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Participação em conferências internacionais</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Contribuição open-source ativa</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-display font-bold mb-2">90+</div>
                <div className="text-sm text-white/70">Score Lighthouse Médio</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-display font-bold mb-2">100%</div>
                <div className="text-sm text-white/70">Code Coverage</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-display font-bold mb-2">24/7</div>
                <div className="text-sm text-white/70">Monitoramento</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-display font-bold mb-2">Zero</div>
                <div className="text-sm text-white/70">Dívida Técnica</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyPage;

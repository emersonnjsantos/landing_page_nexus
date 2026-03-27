import { motion } from "motion/react";

const techStack = [
  { name: "Swift", category: "iOS" },
  { name: "Kotlin", category: "Android" },
  { name: "React Native", category: "Cross-platform" },
  { name: "Flutter", category: "Cross-platform" },
  { name: "Node.js", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "Firebase", category: "Cloud" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Docker", category: "DevOps" },
  { name: "TypeScript", category: "Language" },
];

const TechStack = () => {
  return (
    <section id="tech" className="section-padding bg-soft-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-soft-text mb-8">
              Tecnologias que impulsionam <span className="italic">performance</span>.
            </h2>
            <p className="text-lg text-soft-muted mb-8 leading-relaxed">
              Não escolhemos ferramentas por moda, mas por eficiência. Nossa stack é selecionada para garantir que seu app seja rápido, seguro e fácil de manter.
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span 
                  key={tech.name}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-soft-text shadow-sm"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-display font-bold text-soft-text mb-2">90+</div>
              <div className="text-sm text-soft-muted font-medium">Score Lighthouse Médio</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-display font-bold text-soft-text">100%</div>
              <div className="text-sm text-soft-muted font-medium">Code Coverage em Core</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-display font-bold text-soft-text">24/7</div>
              <div className="text-sm text-soft-muted font-medium">Monitoramento Ativo</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-display font-bold text-soft-text">Zero</div>
              <div className="text-sm text-soft-muted font-medium">Dívida Técnica Crítica</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

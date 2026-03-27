import { motion } from "motion/react";
import { Smartphone, Layers, Globe, Code2, Zap, Layout } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Nativo",
    description: "Apps iOS (Swift) e Android (Kotlin) de alta performance com acesso total às APIs do sistema.",
    icon: Smartphone,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Cross-Platform",
    description: "Soluções robustas com React Native e Flutter, mantendo 95% de compartilhamento de código.",
    icon: Layers,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Arquitetura de Sistemas",
    description: "Design de infraestrutura escalável e resiliente para suportar milhões de usuários simultâneos.",
    icon: Globe,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Otimização de Performance",
    description: "Auditoria e refatoração de código para garantir tempos de resposta instantâneos.",
    icon: Zap,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "UI/UX Design Mobile",
    description: "Interfaces modernas focadas em usabilidade e micro-interações fluidas.",
    icon: Layout,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Backend for Frontend",
    description: "APIs otimizadas especificamente para consumo mobile, reduzindo o tráfego de dados.",
    icon: Code2,
    color: "bg-gray-50 text-gray-600",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-soft-text mb-6"
          >
            Nossas Especialidades
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-soft-muted max-w-2xl mx-auto"
          >
            Combinamos engenharia de precisão com design centrado no usuário para entregar produtos digitais excepcionais.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-semibold text-soft-text mb-3">
                {service.title}
              </h3>
              <p className="text-soft-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

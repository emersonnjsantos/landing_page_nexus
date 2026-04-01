import { motion } from "motion/react";
import { ArrowRight, Smartphone, Zap, ShieldCheck } from "lucide-react";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gray-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 text-xs font-semibold text-soft-muted mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            ENGENHARIA MOBILE DE ELITE
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] mb-6 text-soft-text">
            Construindo o futuro do <span className="text-soft-muted italic">mobile</span> de alta performance.
          </h1>
          <p className="text-lg md:text-xl text-soft-muted max-w-lg mb-10 leading-relaxed">
            Desenvolvemos aplicações nativas e cross-platform com foco obsessivo em fluidez, escalabilidade e experiência do usuário.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-soft-text text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group hover:shadow-lg transition-all">
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-gray-200 text-soft-text px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Ver Cases
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-display font-bold text-soft-text">99.9%</div>
              <div className="text-xs text-soft-muted uppercase tracking-wider font-semibold">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-soft-text">&lt; 100ms</div>
              <div className="text-xs text-soft-muted uppercase tracking-wider font-semibold">Latência</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-soft-text">50+</div>
              <div className="text-xs text-soft-muted uppercase tracking-wider font-semibold">Apps Lançados</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100">
            <img 
              src="https://picsum.photos/seed/mobile-app/800/1200" 
              alt="Mobile App Preview" 
              className="rounded-[2.5rem] w-full h-auto object-cover aspect-[9/16]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-20 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold">Performance</span>
            </div>
            <p className="text-xs text-soft-muted">Otimização de renderização em 60fps constante.</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-20 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold">Segurança</span>
            </div>
            <p className="text-xs text-soft-muted">Criptografia de ponta a ponta e conformidade LGPD.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

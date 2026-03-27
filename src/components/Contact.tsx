import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-soft-text rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">
                Pronto para elevar seu produto mobile?
              </h2>
              <p className="text-white/70 text-lg mb-12 max-w-md">
                Entre em contato e descubra como nossa engenharia pode transformar sua visão em uma experiência de alta performance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">E-mail</div>
                    <div className="font-medium">contato@nexusmobile.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">WhatsApp</div>
                    <div className="font-medium">+55 (11) 99999-9999</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Escritório</div>
                    <div className="font-medium">São Paulo, SP - Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-soft-text">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">Assunto</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors bg-white">
                    <option>Novo Projeto</option>
                    <option>Consultoria de Performance</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Conte-nos sobre seu desafio..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-soft-text text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <footer className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-soft-muted">
          <div>© 2026 Nexus Mobile Engineering. Todos os direitos reservados.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-soft-text">Privacidade</a>
            <a href="#" className="hover:text-soft-text">Termos</a>
            <a href="#" className="hover:text-soft-text">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

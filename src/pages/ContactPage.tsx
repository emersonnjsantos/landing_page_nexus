import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin, Send, Phone, Clock, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    hearAbout: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-medium text-soft-text mb-6">
            Vamos Conversar
          </h1>
          <p className="text-xl text-soft-muted max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar sua visão em realidade? Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="João"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Silva"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="joao@empresa.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+55 (11) 99999-9999"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    Seu Cargo
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Ex: CTO, CEO, Product Manager"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                  Tipo de Projeto *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="novo-app">Novo Aplicativo do Zero</option>
                  <option value="redesign">Redesign de App Existente</option>
                  <option value="manutencao">Manutenção e Melhorias</option>
                  <option value="consultoria">Consultoria Técnica</option>
                  <option value="otimizacao">Otimização de Performance</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    Orçamento Estimado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors bg-white"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                    <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                    <option value="100k-200k">R$ 100.000 - R$ 200.000</option>
                    <option value="200k+">R$ 200.000+</option>
                    <option value="nao-definido">Ainda não definido</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                    Prazo Desejado
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors bg-white"
                  >
                    <option value="">Selecione um prazo</option>
                    <option value="urgente">Urgente (1-2 meses)</option>
                    <option value="medio">Médio (3-4 meses)</option>
                    <option value="longo">Longo (5+ meses)</option>
                    <option value="flexivel">Flexível</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                  Conte-nos sobre seu projeto *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Descreva seu desafio, objetivos e qualquer informação relevante sobre o projeto..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-soft-muted">
                  Como conheceu a Nexus?
                </label>
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soft-text transition-colors bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="google">Google</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="indicacao">Indicação</option>
                  <option value="evento">Evento/Conferência</option>
                  <option value="redes-sociais">Redes Sociais</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  id="newsletter"
                  className="mt-1 w-4 h-4 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-soft-muted">
                  Quero receber newsletters com insights sobre desenvolvimento mobile, tendências e novidades da Nexus.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-soft-text text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>

              <p className="text-xs text-soft-muted text-center">
                Ao enviar este formulário, você concorda com nossa Política de Privacidade.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display font-semibold text-soft-text mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-soft-muted mb-1">E-mail</div>
                    <div className="text-sm font-medium text-soft-text">contato@nexusmobile.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-soft-muted mb-1">WhatsApp</div>
                    <div className="text-sm font-medium text-soft-text">+55 (11) 99999-9999</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-soft-muted mb-1">Telefone</div>
                    <div className="text-sm font-medium text-soft-text">+55 (11) 3333-4444</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-soft-muted mb-1">Escritório</div>
                    <div className="text-sm font-medium text-soft-text">
                      Av. Paulista, 1000<br/>
                      São Paulo, SP - 01310-100
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display font-semibold text-soft-text mb-4">
                Horário de Atendimento
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-sm text-soft-muted">
                  <div>Segunda a Sexta</div>
                  <div className="font-medium text-soft-text">9h às 18h</div>
                </div>
              </div>
            </div>

            <div className="bg-soft-text text-white rounded-2xl p-6">
              <h3 className="font-display font-semibold mb-4">
                Siga-nos
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-display font-semibold text-soft-text mb-2">
                Resposta Rápida
              </h3>
              <p className="text-sm text-soft-muted">
                Garantimos resposta em até 24 horas úteis para todos os contatos.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-soft-bg rounded-3xl p-12 text-center"
        >
          <h2 className="text-2xl font-display font-medium text-soft-text mb-4">
            Prefere agendar uma reunião?
          </h2>
          <p className="text-soft-muted mb-6 max-w-2xl mx-auto">
            Agende uma conversa de 30 minutos com nosso time para discutir seu projeto sem compromisso.
          </p>
          <button className="bg-soft-text text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Agendar Reunião
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

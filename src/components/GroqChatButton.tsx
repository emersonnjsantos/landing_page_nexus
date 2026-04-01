import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, Loader2, Bot, User, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GroqChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = (import.meta as any).env?.VITE_GROQ_API_KEY || (window as any).__GROQ_API_KEY__;

      if (!apiKey) {
        setMessages([...updatedMessages, {
          role: "assistant",
          content: "⚠️ Chave da API Groq não configurada. Verifique o arquivo `.env.local`.",
        }]);
        setIsLoading(false);
        return;
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: "Você é um assistente especialista em engenharia mobile da Nexus. Responda em português brasileiro de forma clara e profissional. Ajude os usuários com dúvidas sobre desenvolvimento mobile, Flutter, React Native, arquitetura de apps, performance e boas práticas.",
            },
            ...updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error?.message || `Erro HTTP ${response.status}`);
      }

      const data = await response.json();
      const assistantContent = data.choices?.[0]?.message?.content || "Sem resposta.";

      setMessages([...updatedMessages, { role: "assistant", content: assistantContent }]);
    } catch (error: any) {
      setMessages([...updatedMessages, {
        role: "assistant",
        content: `❌ Erro: ${error.message || "Falha ao conectar com a API Groq."}`,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="groq-widget-wrapper">
      {/* Chat Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="groq-chat-popover"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="groq-chat-header">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-semibold text-soft-text">Assistente Nexus AI</h3>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4 text-soft-muted" />
              </button>
            </div>

            {/* Mensagens */}
            <div className="groq-chat-messages">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl mb-3">
                    <Bot className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-display font-semibold text-soft-text text-sm mb-1">
                    Olá! Sou o assistente da Nexus.
                  </h4>
                  <p className="text-soft-muted text-xs max-w-[240px]">
                    Posso ajudar com dúvidas sobre engenharia mobile, arquitetura de apps e muito mais.
                  </p>
                </div>
              )}

              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                    msg.role === "user"
                      ? "bg-accent text-white"
                      : "bg-gradient-to-br from-purple-500 to-indigo-600 text-white"
                  }`}>
                    {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`chat-bubble ${
                    msg.role === "user" ? "chat-bubble-user" : "chat-bubble-assistant"
                  }`}>
                    <p className="text-xs leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="chat-bubble chat-bubble-assistant">
                    <div className="flex items-center gap-2 text-xs text-soft-muted">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Pensando...
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="groq-chat-input">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua pergunta..."
                  className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-xs text-soft-text placeholder:text-soft-muted/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all bg-white"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 p-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-opacity shadow-md"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              <p className="text-[10px] text-soft-muted/50 mt-1.5 text-center">
                Powered by Groq AI · Llama 3.3 70B
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Flutuante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-groq-fab"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        title="Perguntar ao Groq"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && <span className="btn-groq-fab-label">Perguntar ao Groq</span>}
      </motion.button>
    </div>
  );
};

export default GroqChatButton;

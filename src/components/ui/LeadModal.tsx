"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";
import { useState } from "react";

export function LeadModal() {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    momento: "Apenas pesquisando",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (val: string) => {
    const raw = val.replace(/\D/g, "").slice(0, 11);
    let formatted = raw;
    if (raw.length > 2) formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    if (raw.length > 7) formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, telefone: formatPhone(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.telefone.replace(/\D/g, "").length < 10) {
      setError("Digite um número de telefone válido com DDD.");
      return;
    }

    setIsSubmitting(true);
    setShowOverlay(true);

    setTimeout(() => {
      const mensagem = `Olá! Gostaria de agendar uma visita para o Grand Piece. Meu nome é ${formData.nome}.`;
      const whatsappUrl = `https://wa.me/5547996744444?text=${encodeURIComponent(mensagem)}`;
      window.location.href = whatsappUrl;
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="bg-white rounded-[24px] p-8 shadow-2xl relative overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  Agende sua visita
                </h3>
                <p className="text-gray-500">
                  Preencha os dados abaixo para falar diretamente com a construtora.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    required
                    type="text"
                    maxLength={50}
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C4C3B] focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C4C3B] focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.telefone}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C4C3B] focus:border-transparent transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Momento de compra
                  </label>
                  <select
                    value={formData.momento}
                    onChange={(e) => setFormData({ ...formData, momento: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C4C3B] focus:border-transparent transition-all bg-white"
                  >
                    <option>Apenas pesquisando</option>
                    <option>Pretendo decidir nos próximos 30 dias</option>
                    <option>Pretendo decidir nos próximos 90 dias</option>
                  </select>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1A1A] text-white rounded-xl py-4 font-medium hover:bg-[#333333] transition-colors mt-4 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? "Redirecionando..." : "Continuar para o WhatsApp"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Overlay Escuro com Animação para o Redirecionamento (Fica por cima de tudo) */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-[60] bg-[#1A1A1A] flex flex-col items-center justify-center p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                    Ótima escolha, {formData.nome.split(" ")[0]}!
                  </h2>
                  <p className="text-xl text-gray-400 font-sans max-w-md mx-auto leading-relaxed">
                    Aguarde, conectando você ao atendimento exclusivo...
                  </p>

                  <div className="mt-12 flex justify-center">
                    <div className="w-12 h-12 border-4 border-[#2C4C3B]/30 border-t-[#2C4C3B] rounded-full animate-spin" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

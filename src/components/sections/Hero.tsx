"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Car, Sparkles, MapPin, Key, Calendar } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-screen min-h-[650px] w-full flex items-center overflow-hidden bg-[#1A1A1A]">

      {/* Full Background Image */}
      <motion.div className="absolute inset-0 z-0 scale-[1.04] origin-left" style={{ y }}>
        <Image
          src="/images/hero.png"
          alt="Grand Piece Residencial Fachada"
          fill
          quality={100}
          className="object-cover object-left-top"
          priority
          loading="eager"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/40 md:hidden" /> {/* Extra darkening for mobile */}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col space-y-6 pt-28 md:pt-32 lg:scale-[0.75] 2xl:scale-100 lg:origin-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold text-white leading-[1.1] tracking-tight">
            Seu novo endereço em Blumenau: <span className="text-[#3ad160] drop-shadow-[0_0_15px_rgba(62,216,135,0.4)]">studios, 2 dormitórios e gardens</span> <br />de alto padrão
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
            {[
              { text: "Studios, 2 dormitórios (1 suíte) e opção garden", icon: Key },
              { text: "De 32 a 74 m², com vaga dupla nos 2 dormitórios", icon: Car },
              { text: "Lazer completo: piscina, quadra, academia e mais", icon: Sparkles },
              { text: "Localização em Itoupava Seca, perto de shoppings e serviços", icon: MapPin }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
                className="flex items-center space-x-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10"
              >
                <div className="flex-shrink-0 text-white">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                </div>
                <div className="h-8 w-[2px] bg-[#3ace5f] rounded-full" />
                <span className="text-white font-bold text-xs md:text-sm leading-tight">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4"
          >
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-sm md:text-base font-extrabold tracking-widest uppercase shadow-xl shadow-black/20 transition-all hover:-translate-y-1">
              Agendar minha visita
            </Button>
            <p className="text-xs md:text-sm font-bold text-gray-300 tracking-wider uppercase text-center sm:text-left">
              Atendimento direto com a equipe de vendas.<br />Ótima oportunidade para morar ou investir.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

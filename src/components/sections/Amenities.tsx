"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Amenities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              Um lazer completo, para todas as idades
            </h2>
            <p className="text-gray-500 font-sans text-lg font-medium">
              Mais do que um apartamento: um estilo de vida. O Grand Piece reúne uma das áreas de lazer mais completas da região.
            </p>
          </div>
          <div>
            <Button variant="outline" className="hidden md:inline-flex">
              Saiba mais
            </Button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {/* Bento Item 1: Piscina (Large, width 2, height 1) */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 relative group overflow-hidden radius-mix-1">
            <Image
              src="/images/piscina-diurna.jpg"
              alt="Piscina"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-medium text-white mb-2">Piscina</h3>
              <p className="text-gray-200 font-sans text-sm font-medium">Adulto e Infantil</p>
            </div>
          </motion.div>

          {/* Bento Item 2: Lazer Integrado (width 1, height 1) */}
          <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-3xl">
            <Image
              src="/images/quadra-esportes.jpg"
              alt="Quadra poliesportiva"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-medium text-white">Quadra Poliesportiva</h3>
            </div>
          </motion.div>

          {/* Bento Item 3: List of Features (Diferenciais do Empreendimento, width 1, height 2) */}
          <motion.div variants={itemVariants} className="bg-[#F9F9F9] p-8 md:p-10 rounded-3xl border border-gray-100 flex flex-col justify-center row-span-2">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Diferenciais do empreendimento</h3>
            <ul className="space-y-3 font-sans text-gray-600 text-sm font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Opções para morar ou investir: studios, 2 dormitórios e gardens</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Vaga de garagem dupla nos apartamentos de 2 dormitórios</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Torre de 27 andares, com vista para a cidade</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Localização valorizada em Itoupava Seca</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Negociação direta com a construtora</li>
            </ul>
          </motion.div>

          {/* Bento Item 4: Academia (width 1, height 1) */}
          <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-3xl">
            <Image
              src="/images/academia.jpg"
              alt="Academia"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-medium text-white">Academia</h3>
            </div>
          </motion.div>

          {/* Bento Item 5: Text Block (Área de Lazer, width 1, height 1) */}
          <motion.div variants={itemVariants} className="bg-[#1A1A1A] p-8 md:p-10 flex flex-col justify-center radius-mix-2 text-white">
            <h3 className="text-xl font-medium mb-4">Área de Lazer</h3>
            <ul className="space-y-3 font-sans text-gray-400 text-sm font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Piscina adulto e infantil</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Quadra poliesportiva e Academia</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />2 salões de festas</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />Sala de jogos e brinquedoteca</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3 shrink-0" />2 playgrounds, pet place e quiosque</li>
            </ul>
          </motion.div>

          {/* Bento Item 6: Salão de Festas (width md:2, lg:1, height 1) */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 relative group overflow-hidden rounded-3xl">
            <Image
              src="/images/salao-de-festas.jpg"
              alt="Salão de Festas"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-medium text-white">Salões de Festas</h3>
            </div>
          </motion.div>

        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            Saiba mais
          </Button>
        </div>

      </div>
    </section>
  );
}

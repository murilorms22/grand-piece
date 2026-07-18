"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FloorPlans() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const plans = [
    {
      title: "Studio",
      area: "32,57 m²",
      features: ["Ambientes integrados e funcionais", "1 vaga de garagem"],
      img: "/images/ap3257.png"
    },
    {
      title: "2 dormitórios (1 suíte)",
      area: "71,54 m²",
      features: ["2 dormitórios, sendo 1 suíte", "1 vaga de garagem dupla", "Sacada"],
      img: "/images/ap7154.png"
    },
    {
      title: "2 dormitórios (1 suíte)",
      area: "74,51 m²",
      features: ["2 dormitórios, sendo 1 suíte", "1 vaga de garagem dupla", "Sacada"],
      img: "/images/ap7451.png"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-gray-900 mb-6"
          >
            Plantas — Escolha a melhor opção para você
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans text-lg font-medium"
          >
            Opções para todos os perfis, do studio ao 2 dormitórios com suíte, além da opção garden.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
            >
              <div className="mb-8">
                <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2 h-10 flex items-center">{plan.title}</p>
                <h3 className="text-4xl font-medium text-[#1A1A1A]">{plan.area}</h3>
              </div>

              <div 
                className="relative aspect-[3/4] w-full mb-8 rounded-2xl overflow-hidden bg-gray-50 p-4 cursor-pointer"
                onClick={() => setSelectedImage(plan.img)}
              >
                <Image 
                  src={plan.img}
                  alt={`Planta ${plan.area}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain mix-blend-multiply group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 flex items-end justify-center pb-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center text-gray-900 space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span className="text-sm font-medium">Ampliar planta</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 font-sans text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C4C3B] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:bg-[#2C4C3B] group-hover:text-white transition-colors">
                Agendar visita
              </Button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage}
              alt="Planta ampliada"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}
    </section>
  );
}

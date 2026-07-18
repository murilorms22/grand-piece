"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function Gallery() {
  const images = [
    { src: "/images/fachada.jpg", alt: "Fachada" },
    { src: "/images/externa-diurna.jpg", alt: "Vista Externa" },
    { src: "/images/living.jpg", alt: "Living Integrado" },
    { src: "/images/suite.jpg", alt: "Suíte" },
    { src: "/images/sacada.jpg", alt: "Sacada" },
    { src: "/images/salao-de-festas.jpg", alt: "Salão de Festas" },
    { src: "/images/piscina-diurna.jpg", alt: "Piscina" },
    { src: "/images/academia.jpg", alt: "Academia" }
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium text-gray-900 mb-6"
        >
          Conheça cada detalhe do Grand Piece
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 font-sans text-lg max-w-2xl mx-auto"
        >
          Fachada, áreas comuns e ambientes do apartamento modelo — uma prévia do padrão que você vai encontrar na sua visita.
        </motion.p>
      </div>

      <div className="w-full px-4 md:px-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
            1440: { slidesPerView: 2.8 }
          }}
          className="gallery-swiper !pb-16"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className="transition-transform duration-500">
              {({ isActive }) => (
                <div
                  className={`relative aspect-[4/5] md:aspect-[4/3] w-full rounded-3xl overflow-hidden transition-all duration-700 ease-out ${isActive ? "scale-100 opacity-100 shadow-2xl" : "scale-95 opacity-60"
                    }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 40vw"
                    className="object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                      <p className="text-white text-xl font-medium tracking-wide">{img.alt}</p>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .gallery-swiper .swiper-pagination-bullet {
            background: #2C4C3B;
            opacity: 0.5;
          }
          .gallery-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            width: 24px;
            border-radius: 8px;
            transition: all 0.3s;
          }
          .gallery-swiper .swiper-button-next,
          .gallery-swiper .swiper-button-prev {
            color: #1A1A1A;
            background: white;
            padding: 10px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 20;
            top: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery-swiper .swiper-button-prev {
            left: 10px;
          }
          .gallery-swiper .swiper-button-next {
            right: 10px;
          }
          .gallery-swiper .swiper-button-next:after,
          .gallery-swiper .swiper-button-prev:after {
            font-size: 16px;
            font-weight: bold;
          }
        `}</style>
      </div>

      <div className="text-center mt-12">
        <Button size="lg" variant="primary">
          Agendar visita
        </Button>
      </div>
    </section>
  );
}

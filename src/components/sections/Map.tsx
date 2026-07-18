"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Map() {
  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl max-w-2xl mx-auto -mt-40 relative z-20 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[#F9F9F9] rounded-full flex items-center justify-center text-[#2C4C3B] mb-6">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Onde fica o Grand Piece
          </h2>
          <p className="text-gray-500 font-sans text-lg font-medium">
            Rua Iguape, 149<br />
            bairro Itoupava Seca — Blumenau/SC
          </p>
        </div>

      </div>

      <div className="w-full h-[300px] md:h-[350px] mt-12">
        <iframe
          src="https://maps.google.com/maps?q=Rua%20Iguape,%20149%20-%20Itoupava%20Seca,%20Blumenau%20-%20SC&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

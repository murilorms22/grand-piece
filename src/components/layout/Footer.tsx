import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-16">
          <div className="text-center md:text-left space-y-4 max-w-sm">
            <div className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white mb-4">
              GRAND PIECE
            </div>
            <p className="text-gray-400 font-sans">
              Rua Iguape, 149<br />
              bairro Itoupava Seca — Blumenau/SC
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-6 font-sans">
              Últimas unidades direto com a construtora.
            </p>
            <Button variant="primary" size="lg">
              Agendar visita
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} Grand Piece. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
            <span>Desenvolvido por</span>
            <a
              href="https://bystepdigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#056799] font-medium hover:underline"
            >
              ByStep Digital
            </a>
            <span>e</span>
            <a
              href="https://muxstudio.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fc5916] font-medium hover:underline"
            >
              MUXStudio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Maximize2, Users, Flame } from "lucide-react";
import diningTablePhoto from "../assets/images/brasa_dining_table_1791333954352.jpg";
import { ARCHITECTURAL_DETAILS } from "../data/chapters";
import { LightboxData } from "./ImageLightboxModal";

interface TableSectionProps {
  onOpenLightbox: (data: LightboxData) => void;
  onOpenReservation: () => void;
}

export function TableSection({ onOpenLightbox, onOpenReservation }: TableSectionProps) {
  const handleInspectImage = () => {
    onOpenLightbox({
      src: diningTablePhoto,
      alt: "Mesa comunal de carvalho carbonizado iluminada por velas de cera de abelha no BRASA",
      chapter: "CAPÍTULO 05 · A MESA",
      title: "O Salão Brutalista & A Luz de Vela",
      technique: "Iluminação exclusivamente analógica por velas naturais de abelha e braseiro",
      notes: "Arquitetura com pedra de basalto escovada, carvalho queimado pelo fogo (Yakisugi), cerâmicas pretas artesanais e copos de cristal fumê. Atmosfera íntima, desacelerada e acolhedora."
    });
  };

  return (
    <section id="a-mesa" className="relative py-28 px-6 md:px-12 bg-[#080706] border-t border-[#1C1715]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#211A17]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#E84626]">
              <span>Capítulo 05</span>
              <span aria-hidden="true">·</span>
              <span>The Table</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EFEA] font-light">
              O Fogo se Torna Hospitalidade
            </h2>
            <p className="text-sm md:text-base text-[#A8A29E] font-sans font-light leading-relaxed">
              O calor que antes era violento na fornalha agora aquece o salão. Entramos em um refúgio
              de madeira carbonizada, velas de cera pura de abelha, taças de vinho biodinâmico e conversas íntimas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleInspectImage}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-[#A8A29E] hover:text-white border border-[#2B2320] hover:border-[#E84626] transition-colors rounded-sm cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#E84626]" />
              <span>Ver Salão em Alta Resolução</span>
            </button>
          </div>
        </div>

        {/* Big Table Visual */}
        <div className="relative group overflow-hidden rounded-sm border border-[#261E1A] bg-black">
          <img
            src={diningTablePhoto}
            alt="Mesa brutalista com velas e louça artesanal no BRASA"
            referrerPolicy="no-referrer"
            className="w-full h-[480px] md:h-[620px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E84626]">
                ATMOSFERA // 05
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-light">
                A Mesa Comunal & O Balcão das Brasas
              </h3>
              <p className="text-xs md:text-sm text-[#C8C2BC] leading-relaxed">
                Apenas 14 lugares de balcão e uma grande mesa esculpida em tora de carvalho maciço.
                Sem ruídos artificiais, sem pressa para desocupar a cadeira.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenReservation}
                className="px-5 py-3 bg-[#E84626] hover:bg-[#D43819] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors cursor-pointer"
              >
                Garantir Assento
              </button>
            </div>
          </div>
        </div>

        {/* Architectural Materiality Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#211A17]">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#E84626] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              Matéria Arquitetônica
            </span>
            <span className="text-xs font-mono text-[#736F6A]">
              BRUTALISMO & MATÉRIA PRIMA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURAL_DETAILS.map((mat) => (
              <div
                key={mat.title}
                className="p-6 bg-[#100E0C] border border-[#211A17] rounded-sm space-y-3 hover:border-[#E84626]/50 transition-colors"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#E84626] block">
                  {mat.element}
                </span>
                <h4 className="font-serif text-xl text-white">
                  {mat.title}
                </h4>
                <p className="text-xs text-[#9E9790] leading-relaxed">
                  {mat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

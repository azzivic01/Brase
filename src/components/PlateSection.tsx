import React, { useState } from "react";
import { Maximize2, Wine, Flame, Sparkles } from "lucide-react";
import platedDishPhoto from "../assets/images/brasa_plated_dish_1791333966660.jpg";
import { TASTING_MENU, TastingMenuAct } from "../data/chapters";
import { LightboxData } from "./ImageLightboxModal";

interface PlateSectionProps {
  onOpenLightbox: (data: LightboxData) => void;
  onOpenReservation: () => void;
}

export function PlateSection({ onOpenLightbox, onOpenReservation }: PlateSectionProps) {
  const [selectedActIndex, setSelectedActIndex] = useState<number>(4); // Default to Ato V (the fish on embers)
  const currentAct = TASTING_MENU[selectedActIndex];

  const handleInspectImage = () => {
    onOpenLightbox({
      src: platedDishPhoto,
      alt: "Prato autoral de alta gastronomia: peixe na brasa com emulsão de tutano em cerâmica preta",
      chapter: "CAPÍTULO 06 · O PRATO",
      title: "O Pescador e a Lenha (Ato V)",
      technique: "Cocção suspensa em brasa de carvalho + emulsão de fogo vivo",
      notes: "Composição editorial com espaço negativo monumental em cerâmica negra artesanal. Realce da crosta dourada pelo fogo, emulsão aveludada e micro-brotos colhidos em orvalho matinal."
    });
  };

  return (
    <section id="menu-degustacao" className="relative py-28 px-6 md:px-12 bg-[#060505] border-t border-[#1C1715]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#211A17]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#E84626]">
              <span>Capítulo 06</span>
              <span aria-hidden="true">·</span>
              <span>The Plate</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EFEA] font-light">
              O Menu Degustação em Nove Atos
            </h2>
            <p className="text-sm md:text-base text-[#A8A29E] font-sans font-light leading-relaxed">
              Cada prato é uma escultura efêmera criada no limite do calor. Servido em cerâmicas rústicas
              modeladas com terra da Mantiqueira e queimadas em alta temperatura.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleInspectImage}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-[#A8A29E] hover:text-white border border-[#2B2320] hover:border-[#E84626] transition-colors rounded-sm cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#E84626]" />
              <span>Ver Prato em Alta Resolução</span>
            </button>
          </div>
        </div>

        {/* Feature Plated Dish Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Dish Photography Card */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-sm border border-[#291F1A] bg-black min-h-[460px] md:min-h-[580px]">
            <img
              src={platedDishPhoto}
              alt="Composição gastronômica autoral do BRASA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E84626]">
                  COMPOSIÇÃO // ATO V
                </span>
                <p className="font-serif text-2xl text-white">
                  Peixe da Costa & Tutano em Grés Negro
                </p>
                <p className="text-xs text-[#A8A29E] max-w-sm">
                  Espaço negativo intencional, vapor ascendente e equilíbrio térmico.
                </p>
              </div>

              <button
                onClick={handleInspectImage}
                aria-label="Ver detalhes do prato em tela cheia"
                className="p-2.5 bg-black/60 hover:bg-[#E84626] text-white rounded-full backdrop-blur-md transition-colors cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Acts Browser */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#0E0C0A] border border-[#241D19] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="space-y-6">
              {/* Acts Horizontal Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#211A17]">
                  <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#E84626] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    Sequência Dramática do Serviço
                  </span>
                  <span className="text-xs font-mono text-[#736F6A]">
                    9 ATOS COORDENADOS
                  </span>
                </div>

                <div className="grid grid-cols-9 gap-1 pt-2">
                  {TASTING_MENU.map((item, idx) => {
                    const isSelected = selectedActIndex === idx;
                    return (
                      <button
                        key={item.act}
                        onClick={() => setSelectedActIndex(idx)}
                        className={`py-2 text-center text-xs font-serif transition-all cursor-pointer rounded-sm border ${
                          isSelected
                            ? "border-[#E84626] bg-[#221612] text-white font-bold"
                            : "border-[#211A17] bg-[#0A0908] text-[#8C857E] hover:text-[#C5BFB8]"
                        }`}
                        title={item.title}
                      >
                        {item.roman}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Current Act Detail Card */}
              <div className="p-6 bg-[#130F0D] border border-[#271E1B] rounded-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#211A17]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E84626]">
                    {currentAct.act} // ATO {currentAct.roman}
                  </span>
                  <span className="font-mono text-xs text-[#8C857E] tabular-nums">
                    {currentAct.temperature}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">
                    {currentAct.title}
                  </h3>
                  <p className="font-serif italic text-base text-[#D4CCC4]">
                    {currentAct.subhead}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed">
                  {currentAct.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#1F1815] text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#736F6A] block">
                      Técnica do Fogo
                    </span>
                    <span className="text-[#E8E4DF] font-medium block mt-0.5">
                      {currentAct.fireTechnique}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#736F6A] block">
                      Louça & Cerâmica
                    </span>
                    <span className="text-[#C8C2BC] block mt-0.5">
                      {currentAct.vessel}
                    </span>
                  </div>
                </div>

                {/* Wine Pairing Callout */}
                <div className="p-4 bg-[#181210] border border-[#2F211C] rounded-sm space-y-2 mt-2">
                  <div className="flex items-center gap-2 text-xs text-[#E84626] font-medium uppercase tracking-wider">
                    <Wine className="w-3.5 h-3.5" />
                    <span>Harmonização de Terroir</span>
                  </div>
                  <div>
                    <span className="text-sm font-serif text-white font-medium block">
                      {currentAct.pairing.wine}
                    </span>
                    <span className="text-xs text-[#8C857E] block">
                      {currentAct.pairing.producer} · {currentAct.pairing.region}
                    </span>
                    <p className="text-xs text-[#B8B1A9] italic mt-1">
                      "{currentAct.pairing.notes}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C1715] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#736F6A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E84626]" />
                Menu ajustado diariamente conforme a colheita matinal.
              </span>

              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 bg-[#E84626] hover:bg-[#D43819] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                Reservar Este Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

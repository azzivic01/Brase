import React, { useState } from "react";
import { Flame, Thermometer, Sparkles } from "lucide-react";
import { FIRE_ZONES, FireZone } from "../data/chapters";

export function FireSection() {
  const [selectedZone, setSelectedZone] = useState<FireZone>(FIRE_ZONES[0]);

  return (
    <section id="o-fogo" className="relative py-28 px-6 md:px-12 bg-[#090807] border-t border-[#1C1715]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#211A17]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#E84626]">
              <span>Capítulo 01</span>
              <span aria-hidden="true">·</span>
              <span>The Fire</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EFEA] font-light">
              A Origem no Carvão e na Brasa
            </h2>
            <p className="text-sm md:text-base text-[#A8A29E] font-sans font-light leading-relaxed">
              O fogo é o personagem central do BRASA. Não é uma fonte de calor genérica: é a matéria-prima
              ancestral que esculpe o tempo, o aroma da fumaça e a transformação molecular de cada ingrediente.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#736F6A]">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#55504C]">Combustão Primária</span>
              <span className="text-[#C5BFB8]">Angico Preto 100% Seco</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#55504C]">Leito de Brasas</span>
              <span className="text-[#E84626] font-semibold tabular-nums">780°C — 850°C</span>
            </div>
          </div>
        </div>

        {/* Narrative Grid: Philosophy & Thermal Zones Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Literary Manifesto */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 text-[#B8B1A9] text-base leading-relaxed font-light">
              <p>
                Cada tronco de lenha de angico e carvalho francês entra na fornalha do restaurante após meses
                de secagem natural. Quando a chama atinge o pico, os tições colapsam em brasas incandescentes de cor cereja profunda.
              </p>
              <p className="font-serif italic text-xl text-[#F3EFEA] border-l-2 border-[#E84626] pl-4">
                "O cozinheiro do fogo não controla a chama com pressa. Ele aprende a ler a cinza branca, a direção da fumaça e o estalo da madeira."
              </p>
              <p>
                Nenhuma chama artificial, nenhum queimador a gás toca as panelas ou grelhas da nossa cozinha.
                O fogo aqui é honesto, imprevisível e exigente.
              </p>
            </div>

            {/* Thermal Palette Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1F1916]">
              <div className="p-4 bg-[#110D0B] border border-[#241D1A] rounded-sm">
                <span className="text-[10px] uppercase tracking-wider text-[#736F6A] block">Espécies de Madeira</span>
                <span className="font-serif text-2xl text-[#F3EFEA] block mt-1">3 Matrizes</span>
                <span className="text-xs text-[#8C857E] mt-0.5 block">Angico, Carvalho & Jacarandá</span>
              </div>
              <div className="p-4 bg-[#110D0B] border border-[#241D1A] rounded-sm">
                <span className="text-[10px] uppercase tracking-wider text-[#736F6A] block">Tempo de Cura da Lenha</span>
                <span className="font-serif text-2xl text-[#F3EFEA] block mt-1">180 Dias</span>
                <span className="text-xs text-[#8C857E] mt-0.5 block">Umidade relativa &lt; 12%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Thermal Zones Interactive Module */}
          <div className="lg:col-span-7 bg-[#110E0C] border border-[#241D19] p-6 sm:p-8 rounded-sm space-y-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#E84626] flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5" />
                  Mapeamento Térmico do Fogo
                </span>
                <h3 className="font-serif text-2xl text-white mt-1">
                  Os Quatro Espectros do Calor
                </h3>
              </div>
              <span className="text-xs font-mono text-[#736F6A] hidden sm:inline">
                ARQUIVO TÉCNICO // 01
              </span>
            </div>

            {/* Selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {FIRE_ZONES.map((zone) => {
                const isActive = selectedZone.zone === zone.zone;
                return (
                  <button
                    key={zone.zone}
                    onClick={() => setSelectedZone(zone)}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      isActive
                        ? "border-[#E84626] bg-[#1F1411] text-white shadow-sm"
                        : "border-[#211A17] bg-[#0E0C0A] text-[#8C857E] hover:text-white hover:border-[#382B26]"
                    }`}
                  >
                    <span className="block font-mono text-xs text-[#E84626] font-semibold tabular-nums">
                      {zone.temp}
                    </span>
                    <span className="block font-serif text-sm mt-1 text-white leading-tight">
                      {zone.zone}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active zone display */}
            <div className="p-6 bg-[#16110F] border border-[#2A201C] rounded-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#241B18]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#736F6A] block">
                    Método Físico de Cocção
                  </span>
                  <h4 className="font-serif text-2xl text-white">
                    {selectedZone.method}
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[11px] uppercase tracking-wider text-[#736F6A] block">
                    Temperatura Operacional
                  </span>
                  <span className="font-mono text-xl text-[#E84626] font-bold tabular-nums">
                    {selectedZone.temp}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#736F6A] block mb-1">
                    Combustível Utilizado
                  </span>
                  <p className="text-sm font-medium text-[#E8E4DF]">
                    {selectedZone.material}
                  </p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#736F6A] block mb-1">
                    Comportamento Culinário
                  </span>
                  <p className="text-sm text-[#B8B1A9] leading-relaxed">
                    {selectedZone.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#736F6A] italic">
                <Sparkles className="w-3.5 h-3.5 text-[#E84626]" />
                <span>Aplicado continuamente no serviço noturno das 19h30 às 00h30.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

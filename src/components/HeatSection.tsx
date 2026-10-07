import React from "react";
import { Flame, Wind, Droplets, Zap } from "lucide-react";

export function HeatSection() {
  const HEAT_ELEMENTS = [
    {
      title: "Reação de Maillard Profunda",
      symbol: "140°C — 165°C",
      icon: Zap,
      desc: "Aminoácidos e açúcares colidem na superfície do corte seco, gerando centenas de novos compostos aromáticos de noz, malte e crosta terrosa."
    },
    {
      title: "Evaporação da Gordura em Fumaça",
      symbol: "Ponto de Gota",
      icon: Droplets,
      desc: "O suco e o colágeno pingam diretamente no carvão em brasa. A queima instantânea sobe em espirais aromáticas que retornam e temperam o prato."
    },
    {
      title: "Pirólise & Madeira Nobre",
      symbol: "Lignina Tostada",
      icon: Wind,
      desc: "A decomposição térmica da madeira de lei sem oxigênio libera siringol e guaiacol, conferindo notas balsâmicas e baunilha defumada aos caldos."
    },
    {
      title: "Cinzas Vivas Isotérmicas",
      symbol: "110°C Contínuos",
      icon: Flame,
      desc: "Sem chama visível, o leito branco de cinzas atua como um forno geotérmico natural, desidratando lentamente vegetais até a concentração pura."
    }
  ];

  return (
    <section id="o-calor" className="relative py-28 px-6 md:px-12 bg-[#060505] border-t border-[#1C1715]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#211A17]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#E84626]">
              <span>Capítulo 04</span>
              <span aria-hidden="true">·</span>
              <span>The Heat</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EFEA] font-light">
              A Alquimia da Fumaça e do Calor
            </h2>
            <p className="text-sm md:text-base text-[#A8A29E] font-sans font-light leading-relaxed">
              O calor não é estático. Ele se manifesta em vapores densos, estalos de gordura que tocam o braseiro
              e crostas milimétricas que preservam a suculência primitiva dos cortes.
            </p>
          </div>

          <div className="text-xs font-mono text-[#736F6A]">
            <span>FENÔMENO // FÍSICA DO FOGO</span>
          </div>
        </div>

        {/* Abstract Cinematic Display: Atmosphere & Textures */}
        <div className="relative p-8 md:p-14 bg-gradient-to-br from-[#120E0C] via-[#0A0807] to-[#140D0A] border border-[#2B201B] rounded-sm overflow-hidden">
          {/* Subtle warm glow background */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E84626]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F26430]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E84626]">
              A FÍSICA INVISÍVEL
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight">
              Luz, Sombra, Fumaça e Textura
            </h3>
            <p className="text-base text-[#BDB5AC] leading-relaxed font-light">
              Na cozinha do BRASA, grande parte do espetáculo é silencioso: o brilho tênue do cobre oxidado, o véu de fumaça cinzenta que atravessa o salão e a crosta enegrecida que quebra ao primeiro corte da faca.
            </p>
          </div>

          {/* 4 Pillars of Fire Physics */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#261E1A]">
            {HEAT_ELEMENTS.map((el) => {
              const Icon = el.icon;
              return (
                <div
                  key={el.title}
                  className="p-5 bg-[#0D0B0A]/80 border border-[#211A17] rounded-sm space-y-3 hover:border-[#E84626]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-[#E84626]" />
                    <span className="font-mono text-[11px] text-[#8C857E]">
                      {el.symbol}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-white">
                    {el.title}
                  </h4>

                  <p className="text-xs text-[#9E9790] leading-relaxed">
                    {el.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Flame, Maximize2 } from "lucide-react";
import heroFireImage from "../assets/images/brasa_hero_fire_1791333918081.jpg";
import { LightboxData } from "./ImageLightboxModal";

interface HeroSectionProps {
  onOpenLightbox: (data: LightboxData) => void;
  onOpenReservation: () => void;
}

export function HeroSection({ onOpenLightbox, onOpenReservation }: HeroSectionProps) {
  const handleInspectImage = () => {
    onOpenLightbox({
      src: heroFireImage,
      alt: "Fogo vivo e brasas incandescentes de madeira de lei no BRASA",
      chapter: "CAPÍTULO 01 · A ORIGEM",
      title: "O Fogo Ancestral & A Brasa Viva",
      technique: "Queima controlada de Angico e Carvalho Tostado a 800°C",
      notes: "Fotografia cinematográfica com iluminação documental de alto contraste, revelando a textura da madeira queimada e o halo luminoso das brasas na escuridão."
    });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Background cinematic photograph with custom scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFireImage}
          alt="Brasas incandescentes e fogo ancestral do BRASA"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.78] contrast-[1.12]"
        />
        {/* Measured scrims per Frontend Constitution: ensuring >= 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/90 via-transparent to-[#070707]/80" />
      </div>

      {/* Top Editorial Kicker & Markers */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#B5AEA6] font-sans">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E84626] animate-pulse" />
          <span>FOGO VIVO</span>
          <span aria-hidden="true" className="text-[#55504C]">/</span>
          <span>CAPÍTULO 01</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[#8C857E]">
          <span>SÃO PAULO</span>
          <span aria-hidden="true">·</span>
          <span>TURNO 19:30 & 21:45</span>
          <button
            onClick={handleInspectImage}
            className="flex items-center gap-1.5 text-xs text-[#C5BFB8] hover:text-[#E84626] transition-colors ml-4 cursor-pointer"
            title="Ver fotografia em alta resolução"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Examinar Registro</span>
          </button>
        </div>
      </div>

      {/* Central Dramatic Title & Manifesto */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-12 md:py-20">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.3em] uppercase text-[#E84626]">
            <Flame className="w-4 h-4" />
            <span>THE RITUAL OF FIRE</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#F3EFEA] tracking-[0.08em] uppercase leading-[0.9] select-none">
            BRASA
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E8E4DF]/90 font-light max-w-2xl text-balance leading-snug">
            Cooked by fire. Defined by time.
          </p>

          <div className="pt-4 max-w-xl text-sm sm:text-base text-[#B8B1A9] font-sans font-light leading-relaxed space-y-2 border-l border-[#E84626]/50 pl-5">
            <p>
              Antes da receita existe o ingrediente. Antes do ingrediente existe a terra.
            </p>
            <p>
              Antes do cozimento existe o fogo. Antes do serviço existe o ritual.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-medium text-white bg-[#E84626] hover:bg-[#D43819] transition-all rounded-sm cursor-pointer shadow-lg shadow-[#E84626]/25"
            >
              Vivenciar o Ritual
            </button>
            <a
              href="#o-fogo"
              className="px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-medium text-[#C8C2BC] hover:text-white border border-[#3A332F] hover:border-[#E84626]/60 transition-all rounded-sm"
            >
              Entrar na Narrativa
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Coordinates */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-6 border-t border-[#221C19]/80 text-[11px] text-[#8C857E] font-sans">
        <div className="flex items-center gap-6">
          <div>
            <span className="block text-[#55504C] uppercase text-[9px] tracking-wider">Combustível</span>
            <span className="text-[#D8D2CB]">Angico & Carvalho Queimado</span>
          </div>
          <div>
            <span className="block text-[#55504C] uppercase text-[9px] tracking-wider">Cozinha Autoral</span>
            <span className="text-[#D8D2CB]">14 Lugares de Balcão</span>
          </div>
        </div>

        <a
          href="#o-fogo"
          className="inline-flex items-center gap-2 text-xs text-[#A8A29E] hover:text-[#E84626] tracking-widest uppercase transition-colors"
        >
          <span>Descer ao Fogo</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}

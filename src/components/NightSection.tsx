import React from "react";
import { Flame, Clock, MapPin, Calendar, Heart } from "lucide-react";

interface NightSectionProps {
  onOpenReservation: () => void;
}

export function NightSection({ onOpenReservation }: NightSectionProps) {
  return (
    <section id="a-noite" className="relative py-32 px-6 md:px-12 bg-[#040404] border-t border-[#191412] overflow-hidden">
      {/* Subtle fading embers backdrop glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#E84626]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-20 text-center relative z-10">
        {/* Editorial Chapter Marker */}
        <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.3em] uppercase text-[#736F6A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E84626]/60" />
          <span>Capítulo 07</span>
          <span aria-hidden="true">·</span>
          <span>The Night</span>
        </div>

        {/* Narrative Prose */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#E8E4DF] font-light leading-tight">
            As Cinzas e o Silêncio da Noite
          </h2>

          <p className="text-sm sm:text-base text-[#9E9790] font-sans font-light leading-relaxed">
            O serviço termina. As taças de cristal fumê repousam vazias sobre o carvalho carbonizado.
            O fogo alto recua, restando apenas o calor dormente do leito de cinzas brancas e o perfume
            amadeirado que permanece na memória.
          </p>
        </div>

        {/* Fading Ember Emblem */}
        <div className="py-6 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-20 h-20 rounded-full border border-[#2E201C] flex items-center justify-center bg-[#0C0908] shadow-inner">
            <div className="w-6 h-6 rounded-full bg-[#E84626] animate-ember-pulse shadow-lg shadow-[#E84626]/50" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#736F6A]">
            BRASAS EM REPOUSO // 01:30
          </span>
        </div>

        {/* Closing Signature per Brief */}
        <div className="space-y-6 pt-4 border-t border-[#1C1614]">
          <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-[0.2em] uppercase text-[#F3EFEA] font-light">
            BRASA
          </h3>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#E84626] font-light tracking-wide">
            Come with fire. Leave with memory.
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-[#736F6A] font-sans">
            Cozinha de fogo · Ingredientes sazonais · Arquitetura brutalista
          </p>
        </div>

        {/* Reservation CTA Box */}
        <div className="p-8 sm:p-10 bg-[#0B0908] border border-[#241C18] rounded-sm max-w-xl mx-auto space-y-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#E84626] flex items-center justify-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              Sua Noite no Fogo
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-white">
              Reserve Seu Lugar no Balcão
            </h4>
            <p className="text-xs text-[#8C857E] leading-relaxed">
              Com apenas 14 assentos por turno, as reservas abrem com 30 dias de antecedência.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-left text-xs bg-[#120F0D] p-4 rounded-sm border border-[#201815]">
            <div className="flex items-center gap-2 text-[#C8C2BC]">
              <Clock className="w-3.5 h-3.5 text-[#E84626]" />
              <span>19:30 & 21:45</span>
            </div>
            <div className="flex items-center gap-2 text-[#C8C2BC]">
              <MapPin className="w-3.5 h-3.5 text-[#E84626]" />
              <span>Jardins, São Paulo</span>
            </div>
          </div>

          <button
            onClick={onOpenReservation}
            className="w-full py-4 bg-[#E84626] hover:bg-[#D43819] active:bg-[#B92F13] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all rounded-sm cursor-pointer shadow-lg shadow-[#E84626]/20"
          >
            Garantir Reserva de Mesa
          </button>
        </div>

        {/* Editorial Footer Links */}
        <footer className="pt-16 pb-8 border-t border-[#181311] flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#55504C] font-sans">
          <div className="flex items-center gap-4">
            <span className="text-[#8C857E]">BRASA © 2026</span>
            <span aria-hidden="true">·</span>
            <span>Alta Gastronomia de Fogo</span>
          </div>

          <div className="flex items-center gap-6 text-[#736F6A]">
            <span>Terça a Sábado</span>
            <span aria-hidden="true">·</span>
            <span>São Paulo, Brasil</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

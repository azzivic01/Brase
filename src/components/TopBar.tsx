import React from "react";
import { AudioAtmosphere } from "./AudioAtmosphere";

interface TopBarProps {
  onOpenReservation: () => void;
  activeSection: string;
}

export function TopBar({ onOpenReservation }: TopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#070707]/85 backdrop-blur-md border-b border-[#1E1917]/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-[#F3EFEA] hover:text-[#E84626] transition-colors uppercase select-none"
        >
          BRASA
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.16em] uppercase text-[#A8A29E] font-medium font-sans">
          <a
            href="#o-fogo"
            className="hover:text-white transition-colors duration-200"
          >
            O Fogo
          </a>
          <a
            href="#o-ingrediente"
            className="hover:text-white transition-colors duration-200"
          >
            O Ingrediente
          </a>
          <a
            href="#a-mao"
            className="hover:text-white transition-colors duration-200"
          >
            A Mão
          </a>
          <a
            href="#a-mesa"
            className="hover:text-white transition-colors duration-200"
          >
            A Mesa
          </a>
          <a
            href="#menu-degustacao"
            className="hover:text-white transition-colors duration-200"
          >
            Menu em 9 Atos
          </a>
          <a
            href="#a-noite"
            className="hover:text-white transition-colors duration-200"
          >
            A Noite
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4">
          <AudioAtmosphere />
          <button
            onClick={onOpenReservation}
            className="px-4 py-2 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#E84626] hover:bg-[#D43819] active:bg-[#B92F13] transition-colors rounded-sm cursor-pointer whitespace-nowrap shadow-sm shadow-[#E84626]/20"
          >
            Reservar Mesa
          </button>
        </div>
      </div>
    </header>
  );
}

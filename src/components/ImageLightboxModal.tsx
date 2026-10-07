import React, { useEffect } from "react";
import { X, Flame } from "lucide-react";

export interface LightboxData {
  src: string;
  alt: string;
  chapter: string;
  title: string;
  technique: string;
  notes: string;
}

interface ImageLightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
}

export function ImageLightboxModal({ data, onClose }: ImageLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (data) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#050505]/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[#0E0C0A] border border-[#27211E] rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar visualização"
          className="absolute top-4 right-4 z-20 p-2 text-[#A8A29E] hover:text-white bg-black/60 rounded-full backdrop-blur-sm cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] md:min-h-[500px]">
          <img
            src={data.src}
            alt={data.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover max-h-[75vh]"
          />
        </div>

        {/* Editorial Metadata Sidebar */}
        <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#27211E] bg-[#0A0908]">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#E84626] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                {data.chapter}
              </span>
              <h3 className="font-serif text-2xl text-[#F3EFEA] leading-tight">
                {data.title}
              </h3>
            </div>

            <div className="space-y-4 text-xs font-sans text-[#A8A29E] leading-relaxed">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#736F6A] mb-1">
                  Técnica de Cocção
                </p>
                <p className="text-[#E8E4DF] font-medium">{data.technique}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#736F6A] mb-1">
                  Notas de Atmosfera
                </p>
                <p className="text-[#C5BFB8]">{data.notes}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1C1816] flex items-center justify-between text-[11px] text-[#736F6A]">
            <span>BRASA Arquivo Gastronômico</span>
            <span className="font-mono tabular-nums">2026.ED // AUTORAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

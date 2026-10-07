import React from "react";

interface ChapterProgressProps {
  currentChapter: number;
  onSelectChapter: (id: string) => void;
}

const CHAPTERS = [
  { num: "01", label: "O Fogo", id: "o-fogo" },
  { num: "02", label: "O Ingrediente", id: "o-ingrediente" },
  { num: "03", label: "A Mão", id: "a-mao" },
  { num: "04", label: "O Calor", id: "o-calor" },
  { num: "05", label: "A Mesa", id: "a-mesa" },
  { num: "06", label: "O Prato", id: "menu-degustacao" },
  { num: "07", label: "A Noite", id: "a-noite" }
];

export function ChapterProgress({ currentChapter, onSelectChapter }: ChapterProgressProps) {
  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 select-none pointer-events-auto">
      <div className="text-[10px] uppercase tracking-[0.25em] text-[#635E59] font-mono mb-1">
        Capítulo
      </div>

      {CHAPTERS.map((chap, idx) => {
        const isActive = currentChapter === idx + 1;
        return (
          <button
            key={chap.num}
            onClick={() => onSelectChapter(chap.id)}
            className="group flex items-center gap-3 py-1 text-right cursor-pointer"
            title={`Navegar para ${chap.num} — ${chap.label}`}
          >
            <span
              className={`text-[11px] font-sans tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                isActive ? "text-[#E84626] !opacity-100 font-semibold" : "text-[#8A847E]"
              }`}
            >
              {chap.label}
            </span>

            <span
              className={`font-mono text-[11px] transition-all duration-300 ${
                isActive
                  ? "text-[#E84626] font-bold scale-110"
                  : "text-[#55504C] group-hover:text-[#A8A29E]"
              }`}
            >
              {chap.num}
            </span>

            <div
              className={`h-[1px] transition-all duration-300 ${
                isActive
                  ? "w-6 bg-[#E84626]"
                  : "w-2 bg-[#2D2724] group-hover:w-4 group-hover:bg-[#8A847E]"
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
}

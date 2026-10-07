import React from "react";
import { Maximize2, ShieldCheck, Flame } from "lucide-react";
import chefHandsPhoto from "../assets/images/brasa_chef_hands_1791333944079.jpg";
import { LightboxData } from "./ImageLightboxModal";

interface HandSectionProps {
  onOpenLightbox: (data: LightboxData) => void;
}

export function HandSection({ onOpenLightbox }: HandSectionProps) {
  const handleInspectImage = () => {
    onOpenLightbox({
      src: chefHandsPhoto,
      alt: "Mãos do chef manuseando cortes maturados sobre brasas incandescentes",
      chapter: "CAPÍTULO 03 · A MÃO",
      title: "O Gesto, o Ferro e a Precisão",
      technique: "Brasagem direta com pinças de ferro forjado e faíscas incandescentes",
      notes: "Registro documental da equipe de cozinha trabalhando na escuridão aquecida do braseiro. Foco na tensão muscular, reflexo da brasa no metal e controle cirúrgico da distância do corte."
    });
  };

  const CRAFT_ACTIONS = [
    {
      action: "O Toque Térmico",
      desc: "Sentir a resistência da proteína e a irradiação da gordura com os nós dos dedos, sem termômetros digitais que interfiram na carne."
    },
    {
      action: "A Manobra da Grelha",
      desc: "Girar as manivelas de ferro forjado milímetro a milímetro para controlar a distância entre o corte e o coração das brasas."
    },
    {
      action: "O Leque e a Cinza",
      desc: "Abanar o leito de carvão com leques de fibra natural para reavivar o calor no momento exato da formação da crosta Maillard."
    },
    {
      action: "O Empratamento em Pedra",
      desc: "Posicionar cada elemento na cerâmica áspera em menos de quatro segundos, preservando o calor residual do fogo."
    }
  ];

  return (
    <section id="a-mao" className="relative py-28 px-6 md:px-12 bg-[#080706] border-t border-[#1C1715]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#211A17]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#E84626]">
              <span>Capítulo 03</span>
              <span aria-hidden="true">·</span>
              <span>The Hand</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EFEA] font-light">
              O Gesto, o Trabalho e a Técnica
            </h2>
            <p className="text-sm md:text-base text-[#A8A29E] font-sans font-light leading-relaxed">
              O fogo sem a mão humana é apenas destruição. Com a mão, ele se torna linguagem.
              Nossos cozinheiros não posam para retratos: trabalham diante do calor com mãos calejadas pela brasa.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleInspectImage}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-[#A8A29E] hover:text-white border border-[#2B2320] hover:border-[#E84626] transition-colors rounded-sm cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#E84626]" />
              <span>Ver Gesto no Fogo</span>
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hands Photo with cinematic framing */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm border border-[#29201C] bg-black">
            <img
              src={chefHandsPhoto}
              alt="Mãos do chef trabalhando sobre o fogo vivo no BRASA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out min-h-[440px] md:min-h-[580px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E84626]">
                  GESTO // 03
                </span>
                <p className="font-serif text-2xl text-white">
                  O Domínio da Brasa Incandescente
                </p>
                <p className="text-xs text-[#A8A29E]">
                  Aço carbono, ferro fundido e reflexo de faíscas a 800°C.
                </p>
              </div>

              <button
                onClick={handleInspectImage}
                aria-label="Ver foto das mãos em tela cheia"
                className="p-2.5 bg-black/60 hover:bg-[#E84626] text-white rounded-full backdrop-blur-md transition-colors cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Hand craft discipline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#E84626] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Ofício & Disciplina
              </span>
              <h3 className="font-serif text-3xl text-[#F3EFEA]">
                As Quatro Ações do Mestre do Fogo
              </h3>
              <p className="text-sm text-[#A8A29E] leading-relaxed">
                Nenhuma máquina substitui a intuição de quem passa oito horas diárias observando
                a respiração das cinzas e a reação da gordura na grelha.
              </p>
            </div>

            <div className="space-y-4">
              {CRAFT_ACTIONS.map((item, index) => (
                <div
                  key={item.action}
                  className="p-4 bg-[#110E0C] border border-[#241D19] rounded-sm space-y-1.5 hover:border-[#E84626]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg text-white">
                      {item.action}
                    </h4>
                    <span className="font-mono text-xs text-[#736F6A]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#9E9790] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 border-l-2 border-[#E84626] bg-[#140E0C] text-xs text-[#C5BFB8] space-y-1">
              <span className="font-semibold text-white block">Ferramentas de Ofício:</span>
              <span>Facas artesanais forjadas em aço carbono 1095, pinças de ferro forjado e tábuas de braúna centenária.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Sparkles, Maximize2, Compass } from "lucide-react";
import ingredientPhoto from "../assets/images/brasa_ingredient_heirloom_1791333929663.jpg";
import { INGREDIENT_SPECIMENS, IngredientSpecimen } from "../data/chapters";
import { LightboxData } from "./ImageLightboxModal";

interface IngredientSectionProps {
  onOpenLightbox: (data: LightboxData) => void;
}

export function IngredientSection({ onOpenLightbox }: IngredientSectionProps) {
  const [activeSpecimen, setActiveSpecimen] = useState<IngredientSpecimen>(INGREDIENT_SPECIMENS[0]);

  const handleInspectImage = () => {
    onOpenLightbox({
      src: ingredientPhoto,
      alt: "Natureza-morta editorial de chanterelles silvestres e tomates de herança chamuscados",
      chapter: "CAPÍTULO 02 · O INGREDIENTE",
      title: "Matéria Pura & Botânica do Fogo",
      technique: "Chamuscado superficial em brasa direta + salteado em ferro fundido",
      notes: "Fotografia documental de natureza-morta culinária em ardósia vulcânica escura com luz lateral dramática, realçando a imperfeição natural da terra e do cultivo biodinâmico."
    });
  };

  return (
    <section id="o-ingrediente" className="relative py-28 px-6 md:px-12 bg-[#060606] border-t border-[#1C1715]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#211A17]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#E84626]">
              <span>Capítulo 02</span>
              <span aria-hidden="true">·</span>
              <span>The Ingredient</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EFEA] font-light">
              A Escultura da Terra e da Safra
            </h2>
            <p className="text-sm md:text-base text-[#A8A29E] font-sans font-light leading-relaxed">
              Não compramos de catálogos industriais. Cada ingrediente que entra no BRASA é colhido por pequenos
              produtores, caçadores de cogumelos e pescadores de mergulho no auge de sua expressão sazonal.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleInspectImage}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-[#A8A29E] hover:text-white border border-[#2B2320] hover:border-[#E84626] transition-colors rounded-sm cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#E84626]" />
              <span>Examinar Fotografia</span>
            </button>
          </div>
        </div>

        {/* Cinematic Image + Specimen Interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Column */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm border border-[#271F1B] bg-black min-h-[420px] md:min-h-[560px]">
            <img
              src={ingredientPhoto}
              alt="Ingredientes sazonais do BRASA: cogumelos selvagens e tomates de herança"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E84626]">
                  MATÉRIA // 02
                </span>
                <p className="font-serif text-2xl text-white">
                  Chanterelles & Tomates em Ardósia Vulcânica
                </p>
                <p className="text-xs text-[#A8A29E] max-w-md">
                  Fotografados sem maquiagem culinária: terra, rugosidade e seiva intactas.
                </p>
              </div>

              <button
                onClick={handleInspectImage}
                aria-label="Abrir fotografia dos ingredientes em tela cheia"
                className="p-2.5 bg-black/60 hover:bg-[#E84626] text-white rounded-full backdrop-blur-md transition-colors cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Specimen Browser Column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0E0C0A] border border-[#241D19] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#211A17]">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#E84626] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Herbário & Matrizes de Fogo
                </span>
                <span className="text-xs font-mono text-[#736F6A]">
                  5 ESPÉCIMES
                </span>
              </div>

              {/* Specimen Buttons */}
              <div className="flex flex-wrap gap-2">
                {INGREDIENT_SPECIMENS.map((specimen) => {
                  const isSelected = activeSpecimen.id === specimen.id;
                  return (
                    <button
                      key={specimen.id}
                      onClick={() => setActiveSpecimen(specimen)}
                      className={`px-3 py-1.5 text-xs font-sans transition-all cursor-pointer rounded-sm border ${
                        isSelected
                          ? "border-[#E84626] bg-[#1D1411] text-white font-medium"
                          : "border-[#211A17] bg-[#0A0908] text-[#8C857E] hover:text-[#C5BFB8] hover:border-[#332824]"
                      }`}
                    >
                      {specimen.name.split(" ")[0]} {specimen.name.split(" ")[1] || ""}
                    </button>
                  );
                })}
              </div>

              {/* Selected Specimen Card */}
              <div className="p-6 bg-[#130F0D] border border-[#271E1B] rounded-sm space-y-4 mt-4">
                <div>
                  <span className="text-[10px] font-mono italic text-[#736F6A] block">
                    {activeSpecimen.botanical}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F3EFEA] mt-0.5">
                    {activeSpecimen.name}
                  </h3>
                </div>

                <div className="space-y-3 text-xs font-sans">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#736F6A] block">
                      Origem & Terroir
                    </span>
                    <p className="text-[#C8C2BC] font-medium mt-0.5">
                      {activeSpecimen.origin}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#736F6A] block">
                      Tratamento no Fogo
                    </span>
                    <p className="text-[#E8E4DF] mt-0.5 leading-relaxed">
                      {activeSpecimen.fireTreatment}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#736F6A] block">
                      Perfil Sensorial
                    </span>
                    <p className="text-[#A8A29E] mt-0.5 leading-relaxed">
                      {activeSpecimen.flavorProfile}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#1F1815] flex items-center justify-between text-[11px] text-[#736F6A]">
                    <span>Sazonalidade:</span>
                    <span className="text-[#E84626] font-medium">{activeSpecimen.season}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C1715] flex items-center gap-2 text-xs text-[#736F6A]">
              <Sparkles className="w-3.5 h-3.5 text-[#E84626]" />
              <span>Colhido até 36 horas antes de chegar à grelha.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

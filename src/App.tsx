/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { TopBar } from "./components/TopBar";
import { EmberCanvas } from "./components/EmberCanvas";
import { ChapterProgress } from "./components/ChapterProgress";
import { HeroSection } from "./components/HeroSection";
import { FireSection } from "./components/FireSection";
import { IngredientSection } from "./components/IngredientSection";
import { HandSection } from "./components/HandSection";
import { HeatSection } from "./components/HeatSection";
import { TableSection } from "./components/TableSection";
import { PlateSection } from "./components/PlateSection";
import { NightSection } from "./components/NightSection";
import { ReservationDrawer } from "./components/ReservationDrawer";
import { ImageLightboxModal, LightboxData } from "./components/ImageLightboxModal";

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [currentChapter, setCurrentChapter] = useState(1);

  // Monitor scroll position to highlight active chapter
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "o-fogo", chapter: 1 },
        { id: "o-ingrediente", chapter: 2 },
        { id: "a-mao", chapter: 3 },
        { id: "o-calor", chapter: 4 },
        { id: "a-mesa", chapter: 5 },
        { id: "menu-degustacao", chapter: 6 },
        { id: "a-noite", chapter: 7 },
      ];

      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentChapter(sections[i].chapter);
          return;
        }
      }
      setCurrentChapter(1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#E8E4DF] relative selection:bg-[#E84626] selection:text-white">
      {/* Floating Ember Particles System */}
      <EmberCanvas />

      {/* Top Bar following Top Bar Contract */}
      <TopBar
        activeSection={String(currentChapter)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Chapter Progress Indicator */}
      <ChapterProgress
        currentChapter={currentChapter}
        onSelectChapter={handleSelectChapter}
      />

      {/* Chapter 00: The Hero Fire Reveal */}
      <HeroSection
        onOpenLightbox={setLightboxData}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Narrative Chapters */}
      <main>
        {/* Chapter 01: The Fire */}
        <FireSection />

        {/* Chapter 02: The Ingredient */}
        <IngredientSection onOpenLightbox={setLightboxData} />

        {/* Chapter 03: The Hand */}
        <HandSection onOpenLightbox={setLightboxData} />

        {/* Chapter 04: The Heat */}
        <HeatSection />

        {/* Chapter 05: The Table */}
        <TableSection
          onOpenLightbox={setLightboxData}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Chapter 06: The Plate */}
        <PlateSection
          onOpenLightbox={setLightboxData}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Chapter 07: The Night */}
        <NightSection onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Concierge Reservation Drawer */}
      <ReservationDrawer
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Museum-Grade Photography Lightbox */}
      <ImageLightboxModal
        data={lightboxData}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}

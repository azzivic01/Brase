import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioAtmosphere() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startSoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.06, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink noise buffer generator for subtle fire roar
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Bandpass filter to sculpt warm fireplace sound
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(1.2, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();
      noiseNodeRef.current = whiteNoise;

      // Procedural micro-crackles (wood ember popping)
      const crackleInterval = window.setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== "running") return;
        if (Math.random() > 0.45) return;

        const crackleTime = ctx.currentTime;
        const osc = ctx.createOscillator();
        const crackGain = ctx.createGain();
        const crackFilter = ctx.createBiquadFilter();

        osc.type = Math.random() > 0.5 ? "sawtooth" : "triangle";
        osc.frequency.setValueAtTime(600 + Math.random() * 2200, crackleTime);

        crackFilter.type = "highpass";
        crackFilter.frequency.setValueAtTime(1000 + Math.random() * 1500, crackleTime);

        const duration = 0.015 + Math.random() * 0.04;
        crackGain.gain.setValueAtTime(0.001, crackleTime);
        crackGain.gain.exponentialRampToValueAtTime(0.04 + Math.random() * 0.06, crackleTime + 0.005);
        crackGain.gain.exponentialRampToValueAtTime(0.0001, crackleTime + duration);

        osc.connect(crackFilter);
        crackFilter.connect(crackGain);
        crackGain.connect(masterGain);

        osc.start(crackleTime);
        osc.stop(crackleTime + duration + 0.02);
      }, 120);

      intervalRef.current = crackleInterval;
      setIsPlaying(true);
    } catch {
      // AudioContext policy fallback
      setIsPlaying(false);
    }
  };

  const stopSoundscape = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Silenciar som da brasa" : "Ouvir o crepitar da brasa"}
      aria-label={isPlaying ? "Silenciar atmosfera sonora" : "Ativar atmosfera sonora de fogo"}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider uppercase font-medium text-[#C8C2BC] hover:text-white transition-colors duration-200 border border-[#26211E] hover:border-[#E84626]/50 bg-[#0E0C0B]/60 backdrop-blur-md rounded-sm cursor-pointer group"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#E84626] animate-pulse" />
          <span className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-2 bg-[#E84626] animate-pulse" />
            <span className="w-0.5 h-3 bg-[#E84626] animate-pulse delay-75" />
            <span className="w-0.5 h-1.5 bg-[#E84626] animate-pulse delay-150" />
          </span>
          <span className="hidden sm:inline text-[11px] font-sans">Brasa Viva</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#736F6A] group-hover:text-[#E84626] transition-colors" />
          <span className="hidden sm:inline text-[11px] font-sans text-[#A8A29E]">Áudio do Fogo</span>
        </>
      )}
    </button>
  );
}

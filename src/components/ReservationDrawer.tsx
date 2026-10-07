import React, { useState } from "react";
import { X, Calendar, Users, Clock, Flame, CheckCircle2 } from "lucide-react";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationDrawer({ isOpen, onClose }: ReservationDrawerProps) {
  const [seatingLocation, setSeatingLocation] = useState<"balcao" | "mesa">("balcao");
  const [shift, setShift] = useState<"19:30" | "21:45">("19:30");
  const [guests, setGuests] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>("2026-10-10");
  const [pairingTier, setPairingTier] = useState<"sem" | "harmonizado">("harmonizado");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `BRASA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl h-full bg-[#0B0A09] border-l border-[#241E1B] p-6 md:p-10 overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#221C19]">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#E84626] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Reserva Exclusiva
              </span>
              <h2 className="font-serif text-3xl text-[#F3EFEA] mt-1">
                A Mesa do Fogo
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#736F6A] hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar gaveta de reserva"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isConfirmed ? (
            /* Confirmation card */
            <div className="py-12 space-y-8 animate-fade-in text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E84626]/10 border border-[#E84626] flex items-center justify-center text-[#E84626]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-3xl text-white">
                  O Fogo Aguarda por Você
                </h3>
                <p className="text-sm text-[#A8A29E] max-w-md mx-auto leading-relaxed">
                  Sua experiência no BRASA está confirmada. As brasas serão alimentadas para a sua chegada.
                </p>
              </div>

              <div className="bg-[#120F0D] border border-[#27211E] p-6 rounded-sm text-left space-y-4 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-3 border-b border-[#211A17]">
                  <span className="text-xs text-[#736F6A] uppercase tracking-wider">Código do Convite</span>
                  <span className="font-mono text-sm text-[#E84626] font-semibold tracking-wider">
                    {bookingCode}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#736F6A] block">Espaço</span>
                    <span className="text-white font-medium">
                      {seatingLocation === "balcao" ? "Balcão do Fogo (14 Lugares)" : "Mesa Comunal de Carvalho"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#736F6A] block">Horário</span>
                    <span className="text-white font-medium">{shift} · {selectedDate}</span>
                  </div>
                  <div>
                    <span className="text-[#736F6A] block">Comensais</span>
                    <span className="text-white font-medium">{guests} pessoas</span>
                  </div>
                  <div>
                    <span className="text-[#736F6A] block">Experiência</span>
                    <span className="text-white font-medium">
                      {pairingTier === "harmonizado" ? "9 Atos + Harmonização" : "9 Atos"}
                    </span>
                  </div>
                </div>

                {name && (
                  <div className="pt-2 border-t border-[#211A17] text-xs">
                    <span className="text-[#736F6A]">Titular: </span>
                    <span className="text-white font-medium">{name}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#E84626] hover:bg-[#D43819] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer rounded-sm"
              >
                Concluir & Retornar ao Ritual
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="py-6 space-y-6">
              {/* Seating Type */}
              <div className="space-y-2">
                <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] block">
                  Escolha o Assento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSeatingLocation("balcao")}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      seatingLocation === "balcao"
                        ? "border-[#E84626] bg-[#1B1412] text-white"
                        : "border-[#221C19] bg-[#0E0C0B] text-[#A8A29E] hover:border-[#382E2B]"
                    }`}
                  >
                    <span className="block font-serif text-base text-white">Balcão do Fogo</span>
                    <span className="block text-[11px] text-[#8C857E] mt-0.5">
                      Frente à brasa viva (14 assentos)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeatingLocation("mesa")}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      seatingLocation === "mesa"
                        ? "border-[#E84626] bg-[#1B1412] text-white"
                        : "border-[#221C19] bg-[#0E0C0B] text-[#A8A29E] hover:border-[#382E2B]"
                    }`}
                  >
                    <span className="block font-serif text-base text-white">Mesa de Carvalho</span>
                    <span className="block text-[11px] text-[#8C857E] mt-0.5">
                      Madeira queimada yakisugi
                    </span>
                  </button>
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Data
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full bg-[#120F0D] border border-[#221C19] text-white text-xs px-3 py-2.5 rounded-sm focus:border-[#E84626] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    Pessoas
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#120F0D] border border-[#221C19] text-white text-xs px-3 py-2.5 rounded-sm focus:border-[#E84626] focus:outline-none"
                  >
                    <option value={1}>1 pessoa (Solo counter)</option>
                    <option value={2}>2 pessoas</option>
                    <option value={3}>3 pessoas</option>
                    <option value={4}>4 pessoas</option>
                    <option value={6}>6 pessoas (Mesa chef)</option>
                  </select>
                </div>
              </div>

              {/* Shift */}
              <div className="space-y-2">
                <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Turno do Serviço
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setShift("19:30")}
                    className={`py-2 px-3 text-xs border rounded-sm transition-colors cursor-pointer text-center ${
                      shift === "19:30"
                        ? "border-[#E84626] bg-[#191311] text-white"
                        : "border-[#221C19] bg-[#0E0C0B] text-[#A8A29E]"
                    }`}
                  >
                    19h30 (O Primeiro Fogo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setShift("21:45")}
                    className={`py-2 px-3 text-xs border rounded-sm transition-colors cursor-pointer text-center ${
                      shift === "21:45"
                        ? "border-[#E84626] bg-[#191311] text-white"
                        : "border-[#221C19] bg-[#0E0C0B] text-[#A8A29E]"
                    }`}
                  >
                    21h45 (O Fogo Noturno)
                  </button>
                </div>
              </div>

              {/* Pairing Experience */}
              <div className="space-y-2">
                <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] block">
                  Harmonização de Bebidas
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setPairingTier("harmonizado")}
                    className={`w-full p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      pairingTier === "harmonizado"
                        ? "border-[#E84626] bg-[#1B1412] text-white"
                        : "border-[#221C19] bg-[#0E0C0B] text-[#A8A29E]"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-base text-white">Menu 9 Atos + Harmonização de Terroir</span>
                      <span className="font-mono text-xs text-[#E84626] font-semibold">R$ 960 / pessoa</span>
                    </div>
                    <span className="text-[11px] text-[#8C857E] mt-1 block">
                      Vinhos biodinâmicos de solo vulcânico, laranjas de maceração longa e sidras ancestrais.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPairingTier("sem")}
                    className={`w-full p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      pairingTier === "sem"
                        ? "border-[#E84626] bg-[#1B1412] text-white"
                        : "border-[#221C19] bg-[#0E0C0B] text-[#A8A29E]"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-base text-white">Menu Degustação 9 Atos</span>
                      <span className="font-mono text-xs text-[#A8A29E]">R$ 580 / pessoa</span>
                    </div>
                    <span className="text-[11px] text-[#8C857E] mt-1 block">
                      Carta de vinhos e bebidas naturais à parte durante o serviço.
                    </span>
                  </button>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] block">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Elena Silveira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#120F0D] border border-[#221C19] text-white text-xs px-3 py-2.5 rounded-sm focus:border-[#E84626] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] block">
                    WhatsApp / Telefone para Confirmação
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+55 (11) 98765-4321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#120F0D] border border-[#221C19] text-white text-xs px-3 py-2.5 rounded-sm focus:border-[#E84626] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs tracking-[0.15em] uppercase text-[#736F6A] block">
                    Restrições Alimentares ou Celebração
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Sem frutos do mar para 1 comensal / Aniversário de casamento"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#120F0D] border border-[#221C19] text-white text-xs px-3 py-2.5 rounded-sm focus:border-[#E84626] focus:outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#E84626] hover:bg-[#D43819] active:bg-[#B92F13] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer rounded-sm shadow-lg shadow-[#E84626]/20 mt-4"
              >
                Confirmar Reserva no Ritual
              </button>
            </form>
          )}
        </div>

        <div className="pt-6 border-t border-[#1C1816] text-[11px] text-[#736F6A] flex justify-between items-center">
          <span>Cancelamento gratuito até 24h antes</span>
          <span>BRASA São Paulo · Brasil</span>
        </div>
      </div>
    </div>
  );
}

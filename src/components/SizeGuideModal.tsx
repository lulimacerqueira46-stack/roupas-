import React, { useState } from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [bust, setBust] = useState<string>('88');
  const [waist, setWaist] = useState<string>('70');
  const [hip, setHip] = useState<string>('98');

  // Simple recommendation algorithm
  const bustNum = parseFloat(bust) || 88;
  const waistNum = parseFloat(waist) || 70;
  const hipNum = parseFloat(hip) || 98;

  let recommendedSize = 'M';
  if (bustNum <= 84 && waistNum <= 66 && hipNum <= 94) {
    recommendedSize = 'PP';
  } else if (bustNum <= 89 && waistNum <= 71 && hipNum <= 99) {
    recommendedSize = 'P';
  } else if (bustNum <= 95 && waistNum <= 77 && hipNum <= 105) {
    recommendedSize = 'M';
  } else if (bustNum <= 102 && waistNum <= 84 && hipNum <= 112) {
    recommendedSize = 'G';
  } else {
    recommendedSize = 'GG';
  }

  const measurements = [
    { size: 'PP (36)', bust: '80 - 84 cm', waist: '62 - 66 cm', hip: '90 - 94 cm' },
    { size: 'P (38)', bust: '85 - 89 cm', waist: '67 - 71 cm', hip: '95 - 99 cm' },
    { size: 'M (40)', bust: '90 - 95 cm', waist: '72 - 77 cm', hip: '100 - 105 cm' },
    { size: 'G (42/44)', bust: '96 - 102 cm', waist: '78 - 84 cm', hip: '106 - 112 cm' },
    { size: 'GG (46)', bust: '103 - 110 cm', waist: '85 - 92 cm', hip: '113 - 120 cm' }
  ];

  return (
    <div
      id="size-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="size-guide-modal"
        className="relative bg-[#FAF8F5] w-full max-w-2xl border border-[#DDD3C7] shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#473B30] hover:text-black transition-colors"
          aria-label="Fechar guia de medidas"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#827161]">
            <Ruler className="w-3.5 h-3.5" />
            <span>Provador Inteligente & Caimento</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1916] font-medium">
            Tabela de Medidas & Caimento
          </h2>
          <p className="text-xs sm:text-sm text-[#5C4F42] font-light">
            Nossa modelagem segue o padrão de alfaiataria italiana adaptado à anatomia da mulher contemporânea.
          </p>
        </div>

        {/* Interactive Quick Fit Finder */}
        <div className="bg-[#F3ECE4] border border-[#DDD0C1] p-4 sm:p-5 space-y-4">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-[#3D3227]">
            Descubra Seu Tamanho Ideal em Segundos
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] text-[#6E5E50] mb-1">Busto (cm)</label>
              <input
                type="number"
                value={bust}
                onChange={(e) => setBust(e.target.value)}
                className="w-full bg-white border border-[#D5C9BC] px-3 py-1.5 text-sm text-[#1C1714] focus:outline-none focus:border-[#26201C]"
              />
            </div>
            <div>
              <label className="block text-[11px] text-[#6E5E50] mb-1">Cintura (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full bg-white border border-[#D5C9BC] px-3 py-1.5 text-sm text-[#1C1714] focus:outline-none focus:border-[#26201C]"
              />
            </div>
            <div>
              <label className="block text-[11px] text-[#6E5E50] mb-1">Quadril (cm)</label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                className="w-full bg-white border border-[#D5C9BC] px-3 py-1.5 text-sm text-[#1C1714] focus:outline-none focus:border-[#26201C]"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#E0D3C4] text-xs">
            <span className="text-[#594B3F]">Seu tamanho recomendado pela equipe de modelistas:</span>
            <span className="px-3 py-1 bg-[#26201C] text-[#FAF8F5] font-bold text-sm">
              Tamanho {recommendedSize}
            </span>
          </div>
        </div>

        {/* Measurement Table */}
        <div className="overflow-x-auto border border-[#E5DCD1]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#EFE9DF] text-[#3B3026] uppercase tracking-wider font-semibold border-b border-[#E5DCD1]">
              <tr>
                <th className="p-3">Tamanho</th>
                <th className="p-3">Busto</th>
                <th className="p-3">Cintura</th>
                <th className="p-3">Quadril</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBE2D7]">
              {measurements.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-[#F7F3EE] ${row.size.startsWith(recommendedSize) ? 'bg-[#F2EAE0] font-semibold text-[#1C1714]' : 'text-[#4A3F35]'}`}
                >
                  <td className="p-3 font-medium">{row.size}</td>
                  <td className="p-3">{row.bust}</td>
                  <td className="p-3">{row.waist}</td>
                  <td className="p-3">{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Free return guarantee note */}
        <div className="flex items-start gap-2.5 text-xs text-[#5C4F42] bg-[#FAF8F5]">
          <CheckCircle2 className="w-4 h-4 text-[#5A8768] shrink-0 mt-0.5" />
          <p>
            <strong>Primeira troca 100% gratuita:</strong> Caso precise ajustar ou trocar por outro número, o frete reverso é por nossa conta em até 30 dias após o recebimento.
          </p>
        </div>

      </div>
    </div>
  );
};

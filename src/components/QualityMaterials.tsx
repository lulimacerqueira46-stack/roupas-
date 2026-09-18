import React from 'react';
import { FABRIC_PILLARS } from '../data/reviews';
import { Sparkles, Shield, Feather, RefreshCw, CheckCircle2 } from 'lucide-react';

export const QualityMaterials: React.FC = () => {
  return (
    <section id="materiais" className="py-20 bg-[#F5EFE8] border-b border-[#E3D8CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5D7C7] border border-[#CFBFAD] text-[#4F4032] text-xs uppercase tracking-widest font-semibold">
            <Shield className="w-3.5 h-3.5 text-[#7F6B58]" />
            <span>Matérias-Primas Certificadas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1916] font-normal tracking-tight">
            Tecidos Nobres que Duram Anos
          </h2>
          <p className="text-sm sm:text-base text-[#594B3E] font-light leading-relaxed">
            O verdadeiro custo-benefício nasce na fibra. Não usamos poliéster barato que esquenta, cria bolinhas e deforma. Trabalhamos exclusivamente com fiações naturais e nobres com toque macio e alta respirabilidade.
          </p>
        </div>

        {/* Fabric Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FABRIC_PILLARS.map((fabric, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#DFD3C4] p-6 flex flex-col justify-between space-y-4 hover:border-[#A89885] transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#E8DDD0] text-[#3D3126] inline-block">
                  {fabric.badge}
                </span>

                <h3 className="font-serif text-xl font-medium text-[#1E1916] leading-snug">
                  {fabric.title}
                </h3>

                <p className="text-[11px] text-[#7A6A5A] uppercase tracking-wider font-semibold">
                  Origem: {fabric.origin}
                </p>

                <p className="text-xs text-[#5C4F42] leading-relaxed font-light">
                  {fabric.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8DEC7] text-xs font-medium text-[#2E241D] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5A8768] shrink-0" />
                <span>{fabric.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tailoring Craftsmanship Strip */}
        <div className="mt-12 bg-[#26201C] text-[#FAF8F5] p-8 sm:p-10 border border-[#3E332B] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <span className="text-[10px] tracking-widest uppercase text-[#D7C3AD] font-bold">
              Alfaiataria Contemporânea em São Paulo
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Costura Inglesa com 7 Pontos por Centímetro
            </h3>
            <p className="text-xs sm:text-sm text-[#D4C8BC] font-light leading-relaxed">
              Cada costura é limpa por dentro e por fora, sem fios aparentes ou bordas que desfiam. Nossas peças podem ser lavadas repetidas vezes mantendo a mesma estrutura imponente do primeiro dia.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <div className="bg-[#1C1714] border border-[#3A2F27] p-4 text-center min-w-[140px]">
              <span className="block text-2xl font-serif font-bold text-white">100%</span>
              <span className="text-[11px] text-[#B8AAA0] uppercase tracking-wider">Cadeia Auditada</span>
            </div>
            <div className="bg-[#1C1714] border border-[#3A2F27] p-4 text-center min-w-[140px]">
              <span className="block text-2xl font-serif font-bold text-white">1 Ano</span>
              <span className="text-[11px] text-[#B8AAA0] uppercase tracking-wider">Garantia Técnica</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

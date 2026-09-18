import React from 'react';
import { ArrowDownRight, Sparkles, CheckCircle2, TrendingDown, Scale } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onExploreTransparency: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onExploreTransparency }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-[#EDE6DC]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#F2EAE0] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#E8DDD0] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DE] border border-[#DDD3C6] text-[#4F4338] text-xs uppercase tracking-widest font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#8F7C6A]" />
              <span>Cápsula de Verão • Linho Puro Francês & Alfaiataria Tropical</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] text-[#1C1714] font-normal tracking-tight">
              Frescor sem perder a autoridade. <br />
              <span className="italic font-light text-[#594B3F]">Roupas de verão</span> com alfaiataria nobre e preço justo.
            </h1>

            {/* Supporting Pitch for Independent Women */}
            <p className="text-base sm:text-lg text-[#52453B] leading-relaxed max-w-2xl font-light">
              Desenhada para dias quentes com transição imediata para ambientes refrigerados. Coletes estruturados, vestidos fluidos e bermudas de alfaiataria em 100% linho puro e seda cupro respirável, sem o sobrepreço abusivo do varejo de luxo.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-cta-collection"
                type="button"
                onClick={onExploreCollection}
                className="px-8 py-4 bg-[#231D19] hover:bg-[#3D332C] text-[#FAF8F5] text-sm tracking-widest uppercase font-semibold rounded-none transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Ver Coleção de Verão</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-cta-transparency"
                type="button"
                onClick={onExploreTransparency}
                className="px-7 py-4 bg-white/80 hover:bg-white text-[#2B231E] border border-[#D5C9BD] text-sm tracking-wider uppercase font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Scale className="w-4 h-4 text-[#7A6A5A]" />
                <span>Entenda Nosso Custo Justo</span>
              </button>
            </div>

            {/* 3 Core Proof Points */}
            <div className="pt-6 border-t border-[#E8DFD3] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#705F50] mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-xs font-semibold tracking-wider text-[#2A231E] uppercase">100% Linho da Normandia</h2>
                  <p className="text-xs text-[#6B5D50] leading-snug">Termorregulação natural para dias de até 38°C sem abafamento.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <TrendingDown className="w-4 h-4 text-[#705F50] mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-xs font-semibold tracking-wider text-[#2A231E] uppercase">Até 65% Menos que o Shopping</h2>
                  <p className="text-xs text-[#6B5D50] leading-snug">Preço direto do ateliê sem margens infladas de grifes.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#705F50] mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-xs font-semibold tracking-wider text-[#2A231E] uppercase">Custo por Uso Mínimo</h2>
                  <p className="text-xs text-[#6B5D50] leading-snug">Peças que resistem a centenas de lavagens de verão sem desbotar.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Editorial Image Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Fashion Frame */}
              <div className="relative overflow-hidden bg-[#E5DCD1] aspect-[3/4] shadow-[0_20px_40px_rgba(40,30,20,0.08)] border border-[#DDD1C3]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
                  alt="Colete de Linho Saint-Tropez Coleção Verão VÉRTICE"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Overlaid Editorial Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E2D8CC] shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] tracking-widest uppercase font-semibold text-[#827161]">
                        Destaque Alto Verão
                      </p>
                      <p className="font-serif text-lg font-medium text-[#1E1916]">
                        Colete de Linho Saint-Tropez
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-[#857667] line-through">Grifes R$ 890</p>
                      <p className="text-base font-bold text-[#1E1916]">R$ 320</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#EDE4D9] flex items-center justify-between text-[11px] text-[#5C4F43]">
                    <span>Custo por uso projetado:</span>
                    <strong className="text-[#1E1916] font-semibold">R$ 0,53 / dia</strong>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="hidden sm:block absolute -top-5 -left-6 bg-white p-3.5 border border-[#E0D5C7] shadow-lg max-w-[210px]">
                <p className="text-[10px] tracking-wider uppercase text-[#88786A] font-semibold">
                  Frescor & Toque Gelado
                </p>
                <p className="text-xs text-[#28211C] font-medium mt-1 leading-snug">
                  Zero poliéster que esquenta. Apenas linho puro e cupro respirável.
                </p>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-[#26201C] text-[#FAF8F5] p-3.5 shadow-xl max-w-[200px]">
                <p className="text-[10px] tracking-widest uppercase text-[#D7C2AB] font-semibold">
                  Verão Inteligente
                </p>
                <p className="text-xs text-[#ECE6DE] font-light mt-0.5">
                  1 peça substitui 3 peças descartáveis de fast-fashion.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

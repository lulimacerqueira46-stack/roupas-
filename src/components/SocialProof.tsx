import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#FAF8F5] border-b border-[#EDE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9E0] border border-[#DDD3C7] text-[#4A3E34] text-xs uppercase tracking-widest font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#8A7969] text-[#8A7969]" />
            <span>Avaliado com 4.9/5.0 por mais de 2.800 clientes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1916] font-normal tracking-tight">
            A Voz de Quem Decide
          </h2>
          <p className="text-sm sm:text-base text-[#594B3E] font-light leading-relaxed">
            Mulheres líderes, advogadas, arquitetas e executivas que adotaram a VÉRTICE como seu padrão de autoridade e conforto diário.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E3D9CC] p-7 flex flex-col justify-between space-y-6 shadow-xs relative"
            >
              <Quote className="w-8 h-8 text-[#DDD0C1] absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#2E241E] text-[#2E241E]"
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#4F4236] leading-relaxed font-light italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE8DE] flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#DDD2C4]"
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1C1714]">
                    {rev.author}
                  </h3>
                  <p className="text-[11px] text-[#7A6B5D] leading-tight">
                    {rev.role} • {rev.city}
                  </p>
                  <p className="text-[10px] text-[#2E7A4A] flex items-center gap-1 mt-0.5 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Comprou: {rev.purchasedProduct}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Quotes Bar */}
        <div className="mt-16 pt-12 border-t border-[#E8DFC2]/70 text-center">
          <p className="text-[11px] uppercase tracking-widest text-[#827263] font-semibold mb-6">
            Destaque na Imprensa de Negócios e Estilo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="font-serif text-lg tracking-widest uppercase font-semibold text-[#3D332B]">
              VOGUE NEGÓCIOS
            </span>
            <span className="font-serif text-lg tracking-widest uppercase font-semibold text-[#3D332B]">
              FORBES MULHER
            </span>
            <span className="font-serif text-lg tracking-widest uppercase font-semibold text-[#3D332B]">
              MARIE CLAIRE
            </span>
            <span className="font-serif text-lg tracking-widest uppercase font-semibold text-[#3D332B]">
              ELLE BRASIL
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

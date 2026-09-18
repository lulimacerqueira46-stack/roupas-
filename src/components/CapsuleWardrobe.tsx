import React, { useState } from 'react';
import { CAPSULE_PIECES, CAPSULE_OCCASIONS } from '../data/capsule';
import { PRODUCTS } from '../data/products';
import { Sparkles, ArrowRight, Check, ShoppingBag, Layers } from 'lucide-react';
import { Product, ColorOption } from '../types';

interface CapsuleWardrobeProps {
  onAddToCart: (product: Product, color: ColorOption, size: string) => void;
}

export const CapsuleWardrobe: React.FC<CapsuleWardrobeProps> = ({ onAddToCart }) => {
  const [activeOccasionId, setActiveOccasionId] = useState<string>(CAPSULE_OCCASIONS[0].id);
  const [addedAllSuccess, setAddedAllSuccess] = useState(false);

  const activeOccasion = CAPSULE_OCCASIONS.find(o => o.id === activeOccasionId) || CAPSULE_OCCASIONS[0];

  // Pieces in this occasion
  const activePieces = CAPSULE_PIECES.filter(piece => activeOccasion.piecesIncluded.includes(piece.id));

  // Full products corresponding to these pieces
  const matchedProducts = PRODUCTS.filter(prod => activeOccasion.piecesIncluded.includes(prod.id));

  const totalLookPrice = matchedProducts.reduce((acc, p) => acc + p.price, 0);
  const totalTraditionalPrice = matchedProducts.reduce((acc, p) => acc + p.traditionalPrice, 0);
  const totalSavings = totalTraditionalPrice - totalLookPrice;

  const handleAddFullLook = () => {
    matchedProducts.forEach(prod => {
      onAddToCart(prod, prod.colors[0], 'M');
    });
    setAddedAllSuccess(true);
    setTimeout(() => setAddedAllSuccess(false), 3000);
  };

  return (
    <section id="guarda-roupa" className="py-20 bg-[#F4EDE5] border-b border-[#E2D6C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5D9CC] border border-[#CEBFB0] text-[#4A3D31] text-xs uppercase tracking-widest font-semibold">
            <Layers className="w-3.5 h-3.5 text-[#7D6B5A]" />
            <span>Engenharia de Estilo de Verão para Mulheres Independentes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1916] font-normal tracking-tight">
            Guarda-Roupa Cápsula de Verão
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E42] font-light leading-relaxed">
            5 peças intercambiáveis em linho puro e alfaiataria leve que formam mais de 15 looks impecáveis para dias quentes de trabalho, viagens corporativas e lazer sofisticado.
          </p>
        </div>

        {/* Occasion Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {CAPSULE_OCCASIONS.map((occasion) => {
            const isActive = occasion.id === activeOccasionId;
            return (
              <button
                key={occasion.id}
                type="button"
                id={`btn-occasion-${occasion.id}`}
                onClick={() => setActiveOccasionId(occasion.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm tracking-wider uppercase font-medium transition-all border ${
                  isActive
                    ? 'bg-[#26201C] text-[#FAF8F5] border-[#26201C] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#54463B] border-[#DDD2C4] hover:bg-white'
                }`}
              >
                {occasion.title.split('&')[0]}
              </button>
            );
          })}
        </div>

        {/* Interactive Look Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Look Image Frame */}
          <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E0D5C7] overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E2D7CB]">
              <img
                src={activeOccasion.lookImage}
                alt={activeOccasion.title}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#26201C]/80 backdrop-blur-md text-[#F4ECE3] text-[10px] tracking-widest uppercase px-3 py-1.5 font-semibold">
                {activeOccasion.lifestyleTag}
              </div>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="font-serif text-2xl text-[#1E1916] font-medium">
                {activeOccasion.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#574A3F] font-light leading-relaxed">
                {activeOccasion.description}
              </p>
            </div>
          </div>

          {/* Right Pieces Breakdown & Bundle Add */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-white border border-[#E0D5C7] p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#EBE1D5]">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#4A3E33]">
                  Peças que compõem este Look ({activePieces.length})
                </span>
                <span className="text-xs text-[#827263]">Tons Neutros Coordenados</span>
              </div>

              {/* Items List */}
              <div className="mt-4 space-y-3">
                {matchedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-3 bg-[#FAF8F5] border border-[#EAE1D4] flex items-center justify-between gap-4 hover:border-[#BFB0A0] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-14 h-16 object-cover bg-[#E5DDD2]"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#241E1A]">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] text-[#7A6B5C]">
                          {prod.categoryLabel}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[10px] text-[#8C7D6F] line-through">
                            R$ {prod.traditionalPrice}
                          </span>
                          <span className="text-xs font-bold text-[#1C1714]">
                            R$ {prod.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onAddToCart(prod, prod.colors[0], 'M')}
                      className="px-3 py-1.5 border border-[#D5C9BD] hover:bg-[#26201C] hover:text-white hover:border-[#26201C] text-[11px] tracking-wider uppercase text-[#473B30] font-medium transition-all shrink-0 cursor-pointer"
                    >
                      Adicionar Peça
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Look Total & Buy Whole Look */}
            <div className="pt-6 border-t border-[#E8DFC2] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A6B5C] block">Total do Look Completo</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-[#1C1714]">
                      R$ {totalLookPrice},00
                    </span>
                    <span className="text-xs text-[#8A7969] line-through">
                      R$ {totalTraditionalPrice},00
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 bg-[#E8DEC7] text-[#3D3227] text-[10px] font-bold uppercase rounded-xs">
                    Economia de R$ {totalSavings},00
                  </span>
                  <p className="text-[10px] text-[#78695A] mt-0.5">Sem margem de varejo inflada</p>
                </div>
              </div>

              <button
                type="button"
                id="btn-add-whole-look"
                onClick={handleAddFullLook}
                className="w-full py-3.5 bg-[#26201C] hover:bg-[#3D332B] text-[#FAF8F5] text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {addedAllSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#A1D9B2]" />
                    <span>Look Adicionado à Sacola com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Garantir Look Completo ({activePieces.length} Peças)</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, HelpCircle, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const CostPerWearCalculator: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [weeklyUses, setWeeklyUses] = useState<number>(2);
  const [yearsDuration, setYearsDuration] = useState<number>(3);

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Calculations
  const totalUses = weeklyUses * 50 * yearsDuration; // 50 work weeks per year
  const costPerUse = (currentProduct.price / totalUses).toFixed(2);

  // Fast fashion hypothetical comparison
  // Cheap polyester alternative costs ~R$ 189, lasts only 10 washes before losing shape/pilling
  const fastFashionPrice = 189;
  const fastFashionMaxUses = 10;
  const fastFashionCostPerWear = (fastFashionPrice / fastFashionMaxUses).toFixed(2);

  // How many fast fashion pieces needed to match total uses
  const piecesNeededFastFashion = Math.ceil(totalUses / fastFashionMaxUses);
  const totalSpentFastFashion = piecesNeededFastFashion * fastFashionPrice;
  const lifetimeSavings = totalSpentFastFashion - currentProduct.price;

  return (
    <section id="calculadora" className="py-20 bg-[#FAF8F5] border-b border-[#EDE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE9DF] border border-[#DDD3C5] text-[#4A3F36] text-xs uppercase tracking-widest font-semibold">
            <Calculator className="w-3.5 h-3.5 text-[#887768]" />
            <span>Consumo Consciente & Racional</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1714] font-normal tracking-tight">
            Calculadora de Custo por Uso
          </h2>
          <p className="text-sm sm:text-base text-[#5E5043] font-light leading-relaxed">
            Mulheres independentes não compram roupas apenas pelo preço da etiqueta, mas pelo retorno sobre o investimento diário. Simule e descubra quanto custa se vestir com alta autoridade.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto bg-white border border-[#E2D8CC] shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Form Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Select Product */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E34] mb-2">
                  1. Escolha a Peça VÉRTICE para Simular
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCTS.slice(0, 4).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedProductId(item.id)}
                      className={`p-2.5 text-left border text-xs transition-all ${
                        selectedProductId === item.id
                          ? 'border-[#26201C] bg-[#26201C] text-[#FAF8F5] font-medium'
                          : 'border-[#E0D5C7] bg-[#FAF8F5] text-[#42372E] hover:border-[#8E7E70]'
                      }`}
                    >
                      <p className="font-medium truncate">{item.name}</p>
                      <p className={`text-[11px] ${selectedProductId === item.id ? 'text-[#D9CEC2]' : 'text-[#7D6E60]'}`}>
                        R$ {item.price},00
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Frequência semanal */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#4A3E34] uppercase tracking-wider">
                    2. Quantas vezes você usará por semana?
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#EFE9DF] text-[#2E251E] font-bold text-xs rounded">
                    {weeklyUses}x por semana
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={weeklyUses}
                  onChange={(e) => setWeeklyUses(Number(e.target.value))}
                  className="w-full h-2 bg-[#EADFD2] rounded-lg appearance-none cursor-pointer accent-[#26201C]"
                />
                <div className="flex justify-between text-[10px] text-[#8C7D6F]">
                  <span>1x (Ocasiões pontuais)</span>
                  <span>2x (Uso regular)</span>
                  <span>3x (Peça-chave semanal)</span>
                  <span>4x (Uniforme de autoridade)</span>
                </div>
              </div>

              {/* Slider 2: Anos de vida útil */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#4A3E34] uppercase tracking-wider">
                    3. Quantos anos a peça durará no seu armário?
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#EFE9DF] text-[#2E251E] font-bold text-xs rounded">
                    {yearsDuration} anos ({yearsDuration * 12} meses)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={yearsDuration}
                  onChange={(e) => setYearsDuration(Number(e.target.value))}
                  className="w-full h-2 bg-[#EADFD2] rounded-lg appearance-none cursor-pointer accent-[#26201C]"
                />
                <div className="flex justify-between text-[10px] text-[#8C7D6F]">
                  <span>1 ano</span>
                  <span>3 anos (Padrão VÉRTICE)</span>
                  <span>5 anos (Com cuidados)</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#7A6B5D] flex items-center gap-1.5 font-light">
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Cálculo baseado em 50 semanas/ano de uso profissional e casual chic.</span>
              </div>

            </div>

            {/* Right Results Display */}
            <div className="lg:col-span-6 bg-[#F5EFE8] border border-[#E0D4C5] p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7D6C5B] font-semibold block">
                  Seu Custo Real por Uso na VÉRTICE:
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-5xl sm:text-6xl font-medium text-[#1E1916]">
                    R$ {costPerUse}
                  </span>
                  <span className="text-sm text-[#6E5F52]">/ dia de uso</span>
                </div>
                <p className="text-xs text-[#5C4F43] mt-2 font-light">
                  Ao longo de <strong>{yearsDuration} anos</strong>, você usará esta peça cerca de <strong>{totalUses} vezes</strong>.
                </p>
              </div>

              {/* Fast Fashion comparison box */}
              <div className="pt-5 border-t border-[#DDD1C2] space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6E5F52]">Vs. Fast Fashion (R$ 189 / 10 lavagens):</span>
                  <span className="text-[#8C2E1F] font-bold">R$ {fastFashionCostPerWear} / uso</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6E5F52]">Economia líquida acumulada:</span>
                  <span className="text-[#24613B] font-bold text-sm">
                    + R$ {lifetimeSavings.toLocaleString('pt-BR')},00
                  </span>
                </div>
              </div>

              {/* Insight Badge */}
              <div className="p-3.5 bg-[#FAF8F5] border border-[#D9CDBC] text-xs text-[#3E342B] space-y-1">
                <p className="font-semibold text-[#1C1714] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8F7965]" />
                  Veredito Econômico Inteligente
                </p>
                <p className="font-light text-[#594B3F]">
                  Por menos do que o valor de um café expresso diário, você se veste com alfaiataria nobre e postura impecável todos os dias.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

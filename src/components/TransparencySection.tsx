import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Scale, Check, AlertCircle, Info, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const { costBreakdown } = selectedProduct;

  const totalDirectCost =
    costBreakdown.fabric +
    costBreakdown.labor +
    costBreakdown.finishing +
    costBreakdown.logistics;

  const verticeMargin = selectedProduct.price - totalDirectCost;
  const savings = selectedProduct.traditionalPrice - selectedProduct.price;
  const savingsPercent = Math.round((savings / selectedProduct.traditionalPrice) * 100);

  return (
    <section id="transparencia" className="py-20 bg-[#F4EFEA] border-b border-[#E8DFC2]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DEC7]/40 border border-[#D5C7B2] text-[#4F4236] text-xs uppercase tracking-widest font-semibold">
            <Scale className="w-3.5 h-3.5 text-[#7A6754]" />
            <span>Nossa Equação de Custo-Benefício</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1916] font-normal tracking-tight">
            Transparência Radical de Custos
          </h2>
          <p className="text-sm sm:text-base text-[#5E5144] font-light leading-relaxed">
            No mercado tradicional de luxo, uma peça chega a custar até 8 vezes o valor de sua confecção para pagar pontos caros em shoppings e campanhas milionárias. Na VÉRTICE, abrimos exatamente quanto custa cada etapa.
          </p>
        </div>

        {/* Product Switcher Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {PRODUCTS.slice(0, 4).map((p) => {
            const isSelected = p.id === selectedProductId;
            return (
              <button
                key={p.id}
                id={`btn-transparency-select-${p.id}`}
                type="button"
                onClick={() => setSelectedProductId(p.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm tracking-wider uppercase font-medium transition-all border ${
                  isSelected
                    ? 'bg-[#26201C] text-[#FAF8F5] border-[#26201C] shadow-sm'
                    : 'bg-white/80 text-[#54463B] border-[#DDD2C4] hover:bg-white hover:text-black'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Main Comparison Container */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Cost Dissection */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E3D8CB] p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EBE3D8] gap-2">
                <div>
                  <span className="text-[11px] tracking-widest uppercase text-[#857565] font-semibold">
                    Análise Aberta de Fabricação
                  </span>
                  <h3 className="font-serif text-2xl text-[#1C1714] font-medium">
                    {selectedProduct.name}
                  </h3>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs text-[#75675A] block">Preço Final VÉRTICE</span>
                  <span className="text-2xl font-bold text-[#1C1714]">R$ {selectedProduct.price},00</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#615245] mt-4 font-light">
                Composição: <strong>{selectedProduct.composition}</strong>. Produção ética desenvolvida em pequenas tiragens controladas em São Paulo.
              </p>

              {/* Breakdown Rows */}
              <div className="mt-6 space-y-3.5">
                {/* 1. Fabric */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm text-[#382E26]">
                    <span className="font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#8E7966]"></span>
                      Tecido Nobre & Fiação Certificada
                    </span>
                    <strong className="font-semibold">R$ {costBreakdown.fabric},00</strong>
                  </div>
                  <div className="w-full bg-[#EAE2D8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#8E7966] h-full transition-all duration-500"
                      style={{ width: `${(costBreakdown.fabric / selectedProduct.price) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 2. Labor */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm text-[#382E26]">
                    <span className="font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#A89885]"></span>
                      Mão de Obra Ética & Alfaiataria Justa
                    </span>
                    <strong className="font-semibold">R$ {costBreakdown.labor},00</strong>
                  </div>
                  <div className="w-full bg-[#EAE2D8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#A89885] h-full transition-all duration-500"
                      style={{ width: `${(costBreakdown.labor / selectedProduct.price) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 3. Finishing */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm text-[#382E26]">
                    <span className="font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C2B4A3]"></span>
                      Acabamentos, Entretelas & Botões Naturais
                    </span>
                    <strong className="font-semibold">R$ {costBreakdown.finishing},00</strong>
                  </div>
                  <div className="w-full bg-[#EAE2D8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#C2B4A3] h-full transition-all duration-500"
                      style={{ width: `${(costBreakdown.finishing / selectedProduct.price) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 4. Logistics */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm text-[#382E26]">
                    <span className="font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#DDD2C4]"></span>
                      Embalagem Reciclável & Logística
                    </span>
                    <strong className="font-semibold">R$ {costBreakdown.logistics},00</strong>
                  </div>
                  <div className="w-full bg-[#EAE2D8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#DDD2C4] h-full transition-all duration-500"
                      style={{ width: `${(costBreakdown.logistics / selectedProduct.price) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 5. Our Margin */}
                <div className="space-y-1 pt-2">
                  <div className="flex justify-between text-xs sm:text-sm text-[#382E26]">
                    <span className="font-medium flex items-center gap-1.5 text-[#54463B]">
                      <span className="w-2 h-2 rounded-full bg-[#26201C]"></span>
                      Margem Saudável VÉRTICE (Operação, P&D e Criação)
                    </span>
                    <strong className="font-semibold text-[#1C1714]">R$ {verticeMargin},00</strong>
                  </div>
                  <div className="w-full bg-[#EAE2D8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#26201C] h-full transition-all duration-500"
                      style={{ width: `${(verticeMargin / selectedProduct.price) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Direct cost footer */}
            <div className="pt-4 border-t border-[#EAE1D4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F4EDE4] p-4 rounded-none">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#6D5D4E] shrink-0" />
                <span className="text-xs text-[#524438] leading-tight">
                  Custo real de produção certificado: <strong>R$ {totalDirectCost},00</strong>
                </span>
              </div>
              <span className="text-xs text-[#706050] font-medium">
                Multiplicador Vértice: <strong>1.4x</strong> vs Varejo <strong>4.5x - 7x</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Comparative Market Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* The VÉRTICE Advantage Card */}
            <div className="bg-[#26201C] text-[#FAF8F5] p-6 sm:p-7 space-y-4 border border-[#3E342D] relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D4BFA7]">
                    Sua Vantagem Real
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#42372E] text-[#F3E8DB] text-[11px] font-bold rounded-sm">
                    -{savingsPercent}% MENOS
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-normal text-white">
                  Economia de R$ {savings},00
                </h4>
                <p className="text-xs text-[#D9CEC2] font-light leading-relaxed">
                  Você adquire o mesmo padrão técnico de linho puro europeu, cupro sedoso e acabamento interno de alfaiataria de uma marca de luxo internacional, sem pagar pela inflação de marca.
                </p>
              </div>

              {/* Side-by-side comparison */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#3E342D] mt-4">
                <div className="p-3 bg-[#1C1714] border border-[#332A24]">
                  <span className="text-[10px] text-[#A69888] uppercase block">Na VÉRTICE</span>
                  <span className="text-xl font-bold text-white">R$ {selectedProduct.price}</span>
                  <span className="text-[10px] text-[#C4B7A7] block mt-1">Margem transparente</span>
                </div>
                <div className="p-3 bg-[#332B25] border border-[#473C33]">
                  <span className="text-[10px] text-[#B8AAA0] uppercase block">Em Grifes Tradicionais</span>
                  <span className="text-xl font-bold text-[#E5D7CA] line-through">R$ {selectedProduct.traditionalPrice}</span>
                  <span className="text-[10px] text-[#9C8C7F] block mt-1">Custos ocultos</span>
                </div>
              </div>
            </div>

            {/* The Fast Fashion Warning Card */}
            <div className="bg-white border border-[#E0D5C7] p-5 space-y-2">
              <div className="flex items-center gap-2 text-[#993D2C]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#7A2E20]">
                  O Falso Custo-Benefício do Fast Fashion
                </h5>
              </div>
              <p className="text-xs text-[#635447] leading-relaxed">
                Peças sintéticas descartáveis (poliéster) de R$ 199 parecem baratas, mas deformam após 3 a 5 lavagens, esquentam excessivamente e exigem recompra constante. O custo por uso acaba sendo até <strong>5x maior</strong>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

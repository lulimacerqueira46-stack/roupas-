import React, { useState } from 'react';
import { X, Check, ShieldCheck, Ruler, Scale, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Product, ColorOption } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ColorOption, size: string) => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>('P');
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const savings = product.traditionalPrice - product.price;

  return (
    <div
      id="product-quick-view-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="product-quick-view-modal"
        className="relative bg-[#FAF8F5] w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-[#DDD2C4] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#3D332B] hover:text-black bg-white/80 rounded-full transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-3">
            <div className="aspect-[3/4] overflow-hidden bg-[#ECE4DA] border border-[#E0D5C7]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={product.hoverImage}
                alt={`${product.name} detalhe`}
                className="aspect-square object-cover bg-[#E2D8CB] border border-[#DDD3C7]"
              />
              <div className="bg-[#EFE8DE] p-4 flex flex-col justify-center border border-[#DDD3C7] text-xs space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7D6B5A]">
                  Acabamento Artesanal
                </span>
                <p className="text-[#42362C] font-medium leading-snug">
                  Costura inglesa invisível, forro respirável e entretela alemã.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:col-span-6 space-y-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#806E5E]">
                {product.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1916] mt-1">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4F43] mt-2 font-light leading-relaxed">
                {product.tagline}
              </p>

              {/* Price comparison block */}
              <div className="mt-4 p-3.5 bg-[#F2EAE0] border border-[#DDD0C0] space-y-2">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[#7A6B5C]">Preço VÉRTICE:</span>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1916]">
                      R$ {product.price},00
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#8C7D6F] block line-through">
                      Grifes R$ {product.traditionalPrice},00
                    </span>
                    <span className="text-xs font-semibold text-[#285E3B]">
                      Você economiza R$ {savings},00
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#E0D3C2] flex items-center justify-between text-[11px] text-[#5E5043]">
                  <span>Custo por uso projetado:</span>
                  <strong className="text-[#1E1916]">{product.costPerWear.costPerDay} por dia</strong>
                </div>
              </div>

              {/* Color Selector */}
              <div className="mt-5 space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#42362C] flex items-center justify-between">
                  <span>Cor Selecionada: <strong className="font-bold text-[#1A1A1A]">{selectedColor.name}</strong></span>
                </label>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`w-7 h-7 rounded-full transition-all flex items-center justify-center border ${
                        selectedColor.name === color.name
                          ? 'ring-2 ring-[#26201C] ring-offset-2 scale-105'
                          : 'border-[#BDB0A0] hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <Check className={`w-3.5 h-3.5 ${color.hex === '#F9F8F6' || color.hex === '#F3EFE9' || color.hex === '#ECE5DB' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#42362C]">
                    Tamanho
                  </label>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-[11px] text-[#7A6958] hover:text-black underline flex items-center gap-1 font-medium"
                  >
                    <Ruler className="w-3 h-3" />
                    Guia de Medidas
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-semibold uppercase tracking-wider border transition-all ${
                        selectedSize === size
                          ? 'bg-[#26201C] text-[#FAF8F5] border-[#26201C]'
                          : 'bg-white text-[#4A3E34] border-[#D8CDC0] hover:border-[#8E7E70]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Composition details */}
              <div className="mt-5 pt-4 border-t border-[#E8DFC2] text-xs text-[#524438] space-y-1.5">
                <p><strong>Composição:</strong> {product.composition}</p>
                <ul className="list-disc list-inside space-y-1 text-[#665649] font-light">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E8DFC2] space-y-2">
              <button
                type="button"
                id="btn-modal-add-to-cart"
                onClick={handleAdd}
                className="w-full py-3.5 bg-[#26201C] hover:bg-[#3D332B] text-[#FAF8F5] text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 text-[#9FE5B3]" />
                    <span>Adicionado à Sacola!</span>
                  </>
                ) : (
                  <>
                    <span>Adicionar à Sacola — R$ {product.price},00</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#7A6959] uppercase tracking-wider pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#5A8768]" />
                  Garantia de 1 Ano em Costuras
                </span>
                <span>•</span>
                <span>Troca Gratuita em 30 Dias</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

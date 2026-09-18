import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ColorOption } from '../types';
import { Sparkles, Eye, ShoppingBag, Check, ArrowUpRight } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onQuickAddToCart: (product: Product, color: ColorOption, size: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onQuickAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'todas', label: 'Toda a Cápsula Verão' },
    { id: 'linho', label: 'Linho Puro & Coletes' },
    { id: 'vestidos', label: 'Vestidos de Verão' },
    { id: 'calcas', label: 'Bermudas & Pantalonas' },
    { id: 'camisas', label: 'Camisas & Tops Frescos' },
    { id: 'alfaiataria', label: 'Alfaiataria Tropical' }
  ];

  const filteredProducts =
    activeCategory === 'todas'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAddToCart(product, product.colors[0], 'M');
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  return (
    <section id="colecao" className="py-20 bg-[#FAF8F5] border-b border-[#EDE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8DFC2]/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#806E5D] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coleção Alto Verão 2026</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1916] font-normal tracking-tight">
              Roupas de Verão Essenciais
            </h2>
            <p className="text-sm sm:text-base text-[#5E5144] font-light mt-1">
              Peças fluidas e respiráveis em linho puro europeu, cupro gelado e alfaiataria tropical com preço de custo aberto.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`filter-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#241E1A] text-[#FAF8F5] shadow-xs'
                    : 'bg-white/80 text-[#54473C] border border-[#DDD3C6] hover:bg-white hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => {
            const savingsPercent = Math.round(
              ((product.traditionalPrice - product.price) / product.traditionalPrice) * 100
            );

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-white border border-[#E5DCD1] transition-all hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-[#BFB0A0] relative"
              >
                {/* Image & Badges */}
                <div
                  className="relative aspect-[3/4] overflow-hidden bg-[#ECE4DA] cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {product.badge && (
                      <span className="px-2.5 py-1 bg-[#26201C] text-[#FAF8F5] text-[10px] tracking-wider uppercase font-bold shadow-xs">
                        {product.badge}
                      </span>
                    )}
                    <span className="px-2 py-0.5 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#285E3B] text-[10px] font-bold tracking-wider uppercase border border-[#D5E3D8]">
                      -{savingsPercent}% vs Grifes
                    </span>
                  </div>

                  {/* Cost per wear pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#FAF8F5]/95 backdrop-blur-xs px-3 py-1.5 border border-[#DDD3C7] text-[11px] text-[#4F4236] flex items-center justify-between">
                    <span>Custo por uso:</span>
                    <strong className="text-[#1A1A1A] font-semibold">{product.costPerWear.costPerDay}/dia</strong>
                  </div>

                  {/* Quick inspect hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="px-4 py-2 bg-[#FAF8F5] text-[#1E1916] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-200"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver Transparência & Caimento</span>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-[#786859]">
                      <span className="uppercase tracking-widest font-medium">
                        {product.categoryLabel}
                      </span>
                      <span>{product.colors.length} tons neutros</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-xl font-medium text-[#1E1916] group-hover:text-[#635142] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#635548] line-clamp-2 font-light leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Color swatches preview */}
                    <div className="flex items-center gap-1.5 pt-1">
                      {product.colors.map((c) => (
                        <span
                          key={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-[#DDD1C3]"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-3 border-t border-[#EFE8DF] flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-[#8C7D6F] line-through leading-none">
                        Grifes R$ {product.traditionalPrice}
                      </div>
                      <div className="text-lg font-bold text-[#1C1714]">
                        R$ {product.price},00
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`p-2.5 border transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
                          justAddedId === product.id
                            ? 'bg-[#2E7A4A] text-white border-[#2E7A4A]'
                            : 'bg-[#26201C] text-[#FAF8F5] border-[#26201C] hover:bg-[#3D332B]'
                        }`}
                        title="Adicionar à Sacola"
                        aria-label={`Adicionar ${product.name} à sacola`}
                      >
                        {justAddedId === product.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span className="text-[11px] uppercase tracking-wider">Adicionado</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span className="text-[11px] uppercase tracking-wider hidden sm:inline">Comprar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

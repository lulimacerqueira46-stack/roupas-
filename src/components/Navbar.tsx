import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles, ShieldCheck, Ruler, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenSizeGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart, onOpenSizeGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner: Custo-benefício e transparência */}
      <aside
        aria-label="Avisos e benefícios"
        id="top-announcement-bar"
        className="bg-[#241F1C] text-[#ECE5DC] text-[11px] md:text-xs tracking-wider uppercase py-2 px-4 text-center font-medium flex items-center justify-center gap-3 transition-colors"
      >
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[#D9C4AB]">
          <Sparkles className="w-3.5 h-3.5" />
          Coleção Alto Verão: Linho Puro & Seda Fresca
        </span>
        <span className="hidden sm:inline text-[#6B5E53]">•</span>
        <span>Frete cortesia para todo o Brasil acima de R$ 399</span>
        <span className="hidden md:inline text-[#6B5E53]">•</span>
        <span className="hidden md:inline text-[#E8DCCF]">Cupom 10% OFF: <strong>INDEPENDENTE10</strong></span>
      </aside>

      {/* Main Navigation */}
      <header
        id="main-navigation-bar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D7] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'bg-[#FAF8F5] border-b border-[#EDE6DC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="btn-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C2420] hover:text-black transition-colors rounded-lg focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start">
            <a href="#" className="group inline-block" id="brand-logo-link">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#1E1916] uppercase font-light">
                V É R T I C E
              </span>
              <span className="block text-[9px] tracking-[0.3em] uppercase text-[#7D7065] -mt-0.5 group-hover:text-[#1E1916] transition-colors">
                Studio Essencial • Alfaiataria & Caimento
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-widest uppercase font-medium text-[#4A3F35]">
            <a
              href="#colecao"
              id="nav-link-colecao"
              className="hover:text-[#111111] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              Coleção Verão
            </a>
            <a
              href="#transparencia"
              id="nav-link-transparencia"
              className="hover:text-[#111111] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              Transparência de Preço
            </a>
            <a
              href="#calculadora"
              id="nav-link-calculadora"
              className="hover:text-[#111111] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              Custo por Uso
            </a>
            <a
              href="#guarda-roupa"
              id="nav-link-capsula"
              className="hover:text-[#111111] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              Armário de Verão
            </a>
            <a
              href="#materiais"
              id="nav-link-materiais"
              className="hover:text-[#111111] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              Tecidos Nobres
            </a>
            <a
              href="#depoimentos"
              id="nav-link-depoimentos"
              className="hover:text-[#111111] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              Depoimentos
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Guia de Medidas */}
            <button
              id="btn-nav-size-guide"
              type="button"
              onClick={onOpenSizeGuide}
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#52453B] hover:text-[#1C1714] font-medium border border-[#DDD3C7] rounded-full px-3.5 py-1.5 bg-white/70 hover:bg-white transition-all shadow-xs"
            >
              <Ruler className="w-3.5 h-3.5 text-[#8A7969]" />
              <span>Guia de Medidas</span>
            </button>

            {/* Shopping Bag Button */}
            <button
              id="btn-open-cart-drawer"
              type="button"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-[#241F1C] hover:bg-[#EFE9E0] transition-colors flex items-center justify-center group"
              aria-label="Ver sacola de compras"
            >
              <ShoppingBag className="w-5 h-5 text-[#241F1C] group-hover:scale-105 transition-transform" />
              {totalCartCount > 0 ? (
                <span
                  id="cart-badge-count"
                  className="absolute -top-1 -right-1 bg-[#2C2420] text-[#FAF8F5] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs"
                >
                  {totalCartCount}
                </span>
              ) : (
                <span className="sr-only">Sacola vazia</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden border-t border-[#E8E1D7] bg-[#FAF8F5] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-3 text-sm tracking-widest uppercase font-medium text-[#4A3F35]">
              <a
                href="#colecao"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EDE6DC] flex items-center justify-between"
              >
                <span>Coleção Cápsula</span>
                <ArrowRight className="w-4 h-4 text-[#8A7969]" />
              </a>
              <a
                href="#transparencia"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EDE6DC] flex items-center justify-between"
              >
                <span>Transparência de Preço</span>
                <ArrowRight className="w-4 h-4 text-[#8A7969]" />
              </a>
              <a
                href="#calculadora"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EDE6DC] flex items-center justify-between"
              >
                <span>Calculadora de Custo por Uso</span>
                <ArrowRight className="w-4 h-4 text-[#8A7969]" />
              </a>
              <a
                href="#guarda-roupa"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EDE6DC] flex items-center justify-between"
              >
                <span>Armário Cápsula (5 Peças)</span>
                <ArrowRight className="w-4 h-4 text-[#8A7969]" />
              </a>
              <a
                href="#materiais"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EDE6DC] flex items-center justify-between"
              >
                <span>Tecidos & Qualidade</span>
                <ArrowRight className="w-4 h-4 text-[#8A7969]" />
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 flex items-center justify-between"
              >
                <span>Depoimentos Reais</span>
                <ArrowRight className="w-4 h-4 text-[#8A7969]" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#E8E1D7] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSizeGuide();
                }}
                className="w-full py-2.5 px-4 text-center rounded-lg border border-[#D5C9BC] text-sm text-[#382F28] font-medium flex items-center justify-center gap-2"
              >
                <Ruler className="w-4 h-4 text-[#7A6B5C]" />
                <span>Consultar Guia de Caimento e Tamanhos</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

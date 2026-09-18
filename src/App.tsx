import React, { useState, useEffect } from 'react';
import { Product, ColorOption, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransparencySection } from './components/TransparencySection';
import { CostPerWearCalculator } from './components/CostPerWearCalculator';
import { CapsuleWardrobe } from './components/CapsuleWardrobe';
import { ProductCatalog } from './components/ProductCatalog';
import { QualityMaterials } from './components/QualityMaterials';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Optional initial piece so user sees a working bag right away
    return [
      {
        product: PRODUCTS[0],
        selectedColor: PRODUCTS[0].colors[0],
        selectedSize: 'P',
        quantity: 1
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart Handlers
  const handleAddToCart = (product: Product, color: ColorOption, size: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.hex === color.hex &&
          item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            product,
            selectedColor: color,
            selectedSize: size,
            quantity: 1
          }
        ];
      }
    });

    setToastMessage(`"${product.name}" adicionado à sua sacola.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleUpdateQuantity = (
    productId: string,
    colorHex: string,
    size: string,
    delta: number
  ) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedColor.hex === colorHex &&
            item.selectedSize === size
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (productId: string, colorHex: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor.hex === colorHex &&
            item.selectedSize === size
          )
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Scroll helpers
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1916] font-sans antialiased">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#26201C] text-[#FAF8F5] px-4 py-3 shadow-xl border border-[#3E342C] text-xs font-medium flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="w-5 h-5 rounded-full bg-[#3B7F52] flex items-center justify-center text-white shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
            className="ml-2 underline text-[#D9C4AB] hover:text-white cursor-pointer"
          >
            Ver Sacola
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCollection={() => handleScrollToSection('colecao')}
          onExploreTransparency={() => handleScrollToSection('transparencia')}
        />

        {/* 1. Transparência Radical de Custos & Preço Justo */}
        <TransparencySection />

        {/* 2. Calculadora Interativa de Custo por Uso (Cost-Per-Wear) */}
        <CostPerWearCalculator />

        {/* 3. O Guarda-Roupa Cápsula para a Mulher Independente */}
        <CapsuleWardrobe onAddToCart={handleAddToCart} />

        {/* 4. Catálogo Completo de Peças & Tons Neutros */}
        <ProductCatalog
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAddToCart={handleAddToCart}
        />

        {/* 5. Tecidos Nobres, Qualidade e Alfaiataria Artesanal */}
        <QualityMaterials />

        {/* 6. Depoimentos de Mulheres Líderes & Imprensa */}
        <SocialProof />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Quick-View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizeGuide={() => {
          setSelectedProduct(null);
          setIsSizeGuideOpen(true);
        }}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}

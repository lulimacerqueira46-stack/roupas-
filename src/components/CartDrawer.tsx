import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, colorHex: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, colorHex: string, size: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 399;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const traditionalSubtotal = cart.reduce(
    (acc, item) => acc + item.product.traditionalPrice * item.quantity,
    0
  );

  const discountAmount = subtotal * appliedDiscount;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 25;
  const total = subtotal - discountAmount + shipping;
  const totalSavedVsRetail = traditionalSubtotal - total;

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'INDEPENDENTE10') {
      setAppliedDiscount(0.1);
    } else if (code === 'MINIMAL15') {
      setAppliedDiscount(0.15);
    } else if (code === '') {
      setAppliedDiscount(0);
    } else {
      setCouponError('Cupom inválido. Tente INDEPENDENTE10');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1200);
  };

  const handleFinishOrderModal = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <aside
        aria-label="Sacola de compras"
        id="cart-drawer-content"
        className="relative bg-[#FAF8F5] w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-[#DDD2C4] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#EDE4D8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#241E1A]" />
            <h2 className="font-serif text-xl font-medium text-[#1E1916]">
              Sua Sacola Inteligente
            </h2>
            <span className="text-xs text-[#7A6A5A] font-medium">
              ({cart.reduce((a, b) => a + b.quantity, 0)} itens)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#5C4D40] hover:text-black transition-colors"
            aria-label="Fechar sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Tracker */}
        <div className="p-3.5 bg-[#F2EAE0] border-b border-[#E3D7C8] text-xs">
          <div className="flex justify-between items-center text-[#4A3E33] mb-1.5">
            {remainingForFreeShipping === 0 ? (
              <span className="font-semibold text-[#24613B] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Você ganhou Frete Cortesia para todo o Brasil!
              </span>
            ) : (
              <span>
                Adicione mais <strong>R$ {remainingForFreeShipping.toFixed(2)}</strong> para <strong>Frete Grátis</strong>
              </span>
            )}
            <span className="text-[10px] text-[#7A6A5A]">R$ {FREE_SHIPPING_THRESHOLD}</span>
          </div>
          <div className="w-full bg-[#E0D3C4] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#26201C] h-full transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#EFE8DE] flex items-center justify-center text-[#8C7B6B]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#1E1916]">Sua sacola está vazia</h3>
              <p className="text-xs text-[#6E5F52] max-w-xs mx-auto font-light">
                Explore nossas peças essenciais de alfaiataria contemporânea em tons neutros com custo-benefício inteligente.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 px-6 py-2.5 bg-[#26201C] text-[#FAF8F5] text-xs tracking-wider uppercase font-semibold"
              >
                Ver Coleção Cápsula
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor.hex}-${item.selectedSize}`}
                className="p-3.5 bg-white border border-[#E5DDD1] flex gap-3 relative shadow-2xs"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-18 h-24 object-cover bg-[#EBE3D8] shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1C1714] leading-snug">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() =>
                          onRemoveItem(
                            item.product.id,
                            item.selectedColor.hex,
                            item.selectedSize
                          )
                        }
                        className="text-[#998A7D] hover:text-[#912D22] p-0.5"
                        title="Remover item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[11px] text-[#706051]">
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-[#D5C9BD]"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        {item.selectedColor.name.split('/')[0]}
                      </span>
                      <span>•</span>
                      <span>Tam: <strong>{item.selectedSize}</strong></span>
                    </div>

                    <div className="mt-1 text-[10px] text-[#285E3B] font-medium">
                      Economia: R$ {(item.product.traditionalPrice - item.product.price) * item.quantity} vs grife
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#F2EDE6]">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#D8CEC0] bg-[#FAF8F5]">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedColor.hex,
                            item.selectedSize,
                            -1
                          )
                        }
                        className="p-1 hover:bg-[#EBE3D8] text-[#3D3227]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#1E1916]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedColor.hex,
                            item.selectedSize,
                            1
                          )
                        }
                        className="p-1 hover:bg-[#EBE3D8] text-[#3D3227]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#1C1714]">
                        R$ {item.product.price * item.quantity},00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with totals & checkout */}
        {cart.length > 0 && (
          <div className="p-5 bg-white border-t border-[#EDE4D8] space-y-4">
            
            {/* Coupon Form */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-[#8F7E6F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cupom (ex: INDEPENDENTE10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD3C7] focus:outline-none focus:border-[#26201C] uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-[#26201C] hover:bg-[#3D332B] text-white text-xs tracking-wider uppercase font-medium cursor-pointer"
              >
                Aplicar
              </button>
            </form>

            {couponError && <p className="text-[11px] text-[#9E2B1E] -mt-2">{couponError}</p>}
            {appliedDiscount > 0 && (
              <p className="text-[11px] text-[#285E3B] font-medium -mt-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Cupom aplicado: {appliedDiscount * 100}% de desconto!
              </p>
            )}

            {/* Calculations Summary */}
            <div className="space-y-1.5 text-xs text-[#524438]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>

              {appliedDiscount > 0 && (
                <div className="flex justify-between text-[#285E3B]">
                  <span>Desconto aplicado</span>
                  <span>- R$ {discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Frete</span>
                <span>{shipping === 0 ? <strong className="text-[#285E3B]">Grátis</strong> : `R$ ${shipping},00`}</span>
              </div>

              <div className="pt-2 border-t border-[#EAE1D5] flex justify-between items-baseline text-sm">
                <span className="font-semibold text-[#1C1714]">Total Estimado</span>
                <span className="font-serif text-2xl font-bold text-[#1C1714]">
                  R$ {total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Retail Savings Highlight */}
            {totalSavedVsRetail > 0 && (
              <div className="p-2.5 bg-[#F2EAE0] border border-[#DFD3C4] text-[11px] text-[#42352A] flex items-center justify-between">
                <span>Sua economia vs. luxo tradicional:</span>
                <strong className="text-[#285E3B] font-bold">
                  R$ {totalSavedVsRetail.toFixed(2)}
                </strong>
              </div>
            )}

            {/* Checkout CTA */}
            <button
              type="button"
              id="btn-cart-checkout"
              disabled={isCheckingOut}
              onClick={handleSimulateCheckout}
              className="w-full py-3.5 bg-[#26201C] hover:bg-[#3D332B] disabled:opacity-75 text-[#FAF8F5] text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              {isCheckingOut ? (
                <span>Processando com Criptografia...</span>
              ) : (
                <>
                  <span>Finalizar Pedido Seguro</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-[#7A6B5D] uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#5A8768]" />
                Checkout 100% Criptografado
              </span>
              <span>•</span>
              <span>Troca Gratuita</span>
            </div>

          </div>
        )}

        {/* Order Completed Simulated Modal */}
        {orderComplete && (
          <div className="absolute inset-0 bg-[#FAF8F5] p-6 flex flex-col justify-center items-center text-center space-y-4 z-20">
            <div className="w-16 h-16 rounded-full bg-[#E5F2E9] text-[#24613B] flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1916]">
              Pedido Confirmado!
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4F43] max-w-xs font-light leading-relaxed">
              Obrigada por escolher a VÉRTICE. Seu guarda-roupa de autoridade com custo justo já está sendo preparado pelo nosso ateliê com embalagem sustentável.
            </p>
            <div className="p-3 bg-white border border-[#DDD3C7] text-xs text-left w-full space-y-1">
              <p><strong>Pedido:</strong> #VTC-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong>Status:</strong> Em separação cuidadosa</p>
              <p><strong>Envio:</strong> Cortesia com código de rastreio via WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={handleFinishOrderModal}
              className="w-full py-3 bg-[#26201C] text-white text-xs uppercase tracking-widest font-semibold cursor-pointer"
            >
              Continuar Navegando
            </button>
          </div>
        )}

      </aside>
    </div>
  );
};

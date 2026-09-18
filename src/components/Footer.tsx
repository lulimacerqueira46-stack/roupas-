import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Heart, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1C1714] text-[#EFEAE3] pt-16 pb-12 border-t border-[#382E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Manifesto Banner */}
        <div className="pb-14 border-b border-[#382E28] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C7B198] font-semibold">
              O Clube da Mulher Independente
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              10% OFF na sua primeira peça e acesso prévio a tiragens cápsula
            </h3>
            <p className="text-xs sm:text-sm text-[#A89889] font-light max-w-md">
              Não enviamos spam. Apenas ensaios sobre engenharia de vestuário, lançamentos limitados e reflexões sobre liderança feminina.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#2C241E] border border-[#524438] text-xs text-[#E5DCD1] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#88C799] shrink-0" />
                <span>
                  Bem-vinda à VÉRTICE. Enviamos seu código exclusivo de 10% OFF para o seu e-mail!
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail profissional ou pessoal..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#26201C] border border-[#473B32] text-white px-4 py-3 text-xs focus:outline-none focus:border-[#C7B198] placeholder-[#7D6E61]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FAF8F5] hover:bg-white text-[#1C1714] text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Cadastrar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Mid Columns */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-[#A89889]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] text-white uppercase block">
              V É R T I C E
            </span>
            <p className="leading-relaxed font-light text-[#BEAEA0]">
              Alfaiataria moderna, tecidos nobres e custo-benefício com transparência radical para mulheres que lideram suas próprias trajetórias.
            </p>
            <div className="text-[11px] text-[#857465]">
              Ateliê de Criação: Jardins, São Paulo • SP
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 font-light">
              <li><a href="#colecao" className="hover:text-white transition-colors">Coleção Cápsula</a></li>
              <li><a href="#transparencia" className="hover:text-white transition-colors">Transparência de Custos</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora de Custo por Uso</a></li>
              <li><a href="#guarda-roupa" className="hover:text-white transition-colors">5 Peças = 15 Looks</a></li>
              <li><a href="#materiais" className="hover:text-white transition-colors">Tecidos Nobres & Fiações</a></li>
            </ul>
          </div>

          {/* Links 2: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold">
              Atendimento & Confiança
            </h4>
            <ul className="space-y-2 font-light">
              <li className="flex items-center gap-1.5 text-[#BEAEA0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C7B198]" />
                Garantia de 1 Ano em Costuras
              </li>
              <li>Primeira Troca Grátis em até 30 dias</li>
              <li>Guia de Cuidados com Lã e Pima</li>
              <li>Frete Cortesia acima de R$ 399</li>
              <li>Consultoria de Tamanho no WhatsApp</li>
            </ul>
          </div>

          {/* Concierge contact */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold">
              Concierge Exclusivo
            </h4>
            <p className="text-[#BEAEA0] font-light leading-relaxed">
              Dúvidas sobre caimento para reuniões ou viagens de trabalho? Fale diretamente com nossas stylists.
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#2B231D] hover:bg-[#3D322A] text-[#FAF8F5] border border-[#4D3F34] transition-colors rounded-none text-[11px] uppercase tracking-wider font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-[#2E2520] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A6B5E] gap-4">
          <p>© 2026 VÉRTICE Studio Brasil Ltda. CNPJ fictício para projeto de moda autoral.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#A89889] transition-colors">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-[#A89889] transition-colors">Privacidade & Cookies</span>
            <span>•</span>
            <span className="hover:text-[#A89889] transition-colors">Transparência ESG</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

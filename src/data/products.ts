import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'colete-alfaiataria-linho-saint-tropez',
    name: 'Colete de Alfaiataria em Linho Saint-Tropez',
    category: 'linho',
    categoryLabel: 'Coleção Verão • Linho Puro',
    tagline: 'O novo terno de verão. Usado diretamente sobre a pele com corte esculpido e costas reguláveis.',
    price: 320,
    traditionalPrice: 890,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Linho Cru Natural', hex: '#EAE1D2', bgClass: 'bg-[#EAE1D2]' },
      { name: 'Areia Fendi', hex: '#B8ADA0', bgClass: 'bg-[#B8ADA0]' },
      { name: 'Preto Carvão Suave', hex: '#262626', bgClass: 'bg-[#262626]' },
      { name: 'Terracota Desértico', hex: '#B0846C', bgClass: 'bg-[#B0846C]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '100% Linho Puro Francês Certificado European Flax (210g/m² pré-amaciado)',
    details: [
      'Garante frescor térmico em dias de calor acima de 32°C com postura executiva',
      'Forro 100% algodão pima respirável nas áreas de contato',
      'Botões orgânicos de corozo entalhados artesanalmente',
      'Fivela posterior de ajuste anatômico na cintura'
    ],
    costBreakdown: {
      fabric: 88,
      labor: 76,
      finishing: 34,
      logistics: 22,
      traditionalRetailMarkup: 890,
      verticePrice: 320
    },
    costPerWear: {
      estimatedYears: 4,
      weeklyUses: 3,
      costPerDay: 'R$ 0,53'
    },
    badge: 'Hit do Alto Verão',
    rating: 4.96,
    reviewsCount: 178
  },
  {
    id: 'vestido-midi-linho-riviera',
    name: 'Vestido Midi em Linho Puro Riviera',
    category: 'vestidos',
    categoryLabel: 'Coleção Verão • Vestidos Fluidos',
    tagline: 'Silhueta reta coluna, alças largas que cobrem o sutiã e fenda lateral sutil para ventilação natural.',
    price: 430,
    traditionalPrice: 1290,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Branco Alabastro', hex: '#FAF7F2', bgClass: 'bg-[#FAF7F2]' },
      { name: 'Linho Areia Dourada', hex: '#DCD1C0', bgClass: 'bg-[#DCD1C0]' },
      { name: 'Oliva Suave', hex: '#8F9181', bgClass: 'bg-[#8F9181]' },
      { name: 'Preto Absoluto', hex: '#1C1C1E', bgClass: 'bg-[#1C1C1E]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '100% Linho Europeu Puro com lavagem enzimática para zero aspereza',
    details: [
      'Não esquenta: a fibra oca do linho dissipa a umidade corporal instantaneamente',
      'Bolsos laterais invisíveis com pesponto de alfaiataria',
      'Decote reto limpo e costuras francesas internas sem fios aparentes',
      'Perfeito do dia no escritório com rasteira de couro ao jantar com sandália de salto'
    ],
    costBreakdown: {
      fabric: 124,
      labor: 98,
      finishing: 46,
      logistics: 26,
      traditionalRetailMarkup: 1290,
      verticePrice: 430
    },
    costPerWear: {
      estimatedYears: 4,
      weeklyUses: 2,
      costPerDay: 'R$ 1,07'
    },
    badge: 'Mais Desejado do Verão',
    rating: 4.98,
    reviewsCount: 142
  },
  {
    id: 'bermuda-alfaiataria-linho-capri',
    name: 'Bermuda de Alfaiataria Capri',
    category: 'calcas',
    categoryLabel: 'Coleção Verão • Alfaiataria Tropical',
    tagline: 'Cintura alta esculpida, pregas frontais alongadoras e comprimento sofisticado logo acima do joelho.',
    price: 298,
    traditionalPrice: 850,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Areia Cru', hex: '#EBE2D4', bgClass: 'bg-[#EBE2D4]' },
      { name: 'Taupe Suave', hex: '#9E9285', bgClass: 'bg-[#9E9285]' },
      { name: 'Preto Noturno', hex: '#1A1A1A', bgClass: 'bg-[#1A1A1A]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '55% Linho Puro Europeu, 45% Viscose de Reflorestamento Certificada',
    details: [
      'A solução definitiva para trabalhar com elegância e frescor térmico em dias quentes',
      'Cós entretelado anatômico com colchetes invisíveis de alfaiate',
      'Pregas profundas que proporcionam liberdade completa de movimento',
      'Bolsos faca funcionais com profundidade para smartphone grande'
    ],
    costBreakdown: {
      fabric: 78,
      labor: 72,
      finishing: 32,
      logistics: 20,
      traditionalRetailMarkup: 850,
      verticePrice: 298
    },
    costPerWear: {
      estimatedYears: 3,
      weeklyUses: 3,
      costPerDay: 'R$ 0,66'
    },
    badge: 'Essencial Verão Trabalho',
    rating: 4.92,
    reviewsCount: 110
  },
  {
    id: 'camisa-linho-puro-brisa',
    name: 'Camisa de Linho Puro Brisa',
    category: 'camisas',
    categoryLabel: 'Coleção Verão • Camisaria Leve',
    tagline: 'Linho peso-pluma 145g/m². Caimento fluido arejado para usar aberta, fechada ou amarrada.',
    price: 340,
    traditionalPrice: 980,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Branco Névoa', hex: '#F9F8F6', bgClass: 'bg-[#F9F8F6]' },
      { name: 'Azul Céu Neutro', hex: '#CCD6DC', bgClass: 'bg-[#CCD6DC]' },
      { name: 'Manteiga Pálida', hex: '#F0E6D2', bgClass: 'bg-[#F0E6D2]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '100% Linho Francês Orgânico Certificado European Flax',
    details: [
      'Proteção contra raios solares UV natural inerente à fibra do linho',
      'Botões de madrepérola natural sustentável colhida de forma responsável',
      'Punhos com abotoamento duplo para facilitar a dobra nos antebraços',
      'Secagem ultra rápida pós-lavagem'
    ],
    costBreakdown: {
      fabric: 96,
      labor: 78,
      finishing: 36,
      logistics: 22,
      traditionalRetailMarkup: 980,
      verticePrice: 340
    },
    costPerWear: {
      estimatedYears: 4,
      weeklyUses: 3,
      costPerDay: 'R$ 0,56'
    },
    badge: '100% Linho Francês',
    rating: 4.94,
    reviewsCount: 195
  },
  {
    id: 'blazer-desestruturado-linho-biarritz',
    name: 'Blazer Desestruturado em Linho Biarritz',
    category: 'alfaiataria',
    categoryLabel: 'Coleção Verão • Alfaiataria Tropical',
    tagline: 'Construção sem forro pesado nas costas para respirabilidade total, preservando ombros desenhados.',
    price: 490,
    traditionalPrice: 1590,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Areia Aveia', hex: '#DED5C7', bgClass: 'bg-[#DED5C7]' },
      { name: 'Tabaco Queimado', hex: '#4A3B30', bgClass: 'bg-[#4A3B30]' },
      { name: 'Preto Carvão', hex: '#1C1C1E', bgClass: 'bg-[#1C1C1E]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '75% Linho Europeu Puro, 25% Algodão Pima Peruano',
    details: [
      'Alfaiataria tropical inteligente: forro em meia-lua apenas no peito e mangas',
      'Costuras internas com acabamento viés de algodão para conforto contra a pele',
      'Lapela notched clássica com caimento descontraído e poderoso',
      'Ideal para reuniões com ar-condicionado e trânsito em dias quentes'
    ],
    costBreakdown: {
      fabric: 146,
      labor: 114,
      finishing: 56,
      logistics: 28,
      traditionalRetailMarkup: 1590,
      verticePrice: 490
    },
    costPerWear: {
      estimatedYears: 4,
      weeklyUses: 2,
      costPerDay: 'R$ 1,22'
    },
    badge: 'Alfaiataria Tropical',
    rating: 4.97,
    reviewsCount: 88
  },
  {
    id: 'pantalona-linho-modal-santorini',
    name: 'Pantalona Fluida Linho & Modal Santorini',
    category: 'calcas',
    categoryLabel: 'Coleção Verão • Calças Frescas',
    tagline: 'Fluidez escultural que dança com a brisa. Cintura alta com elástico traseiro embutido invisível.',
    price: 360,
    traditionalPrice: 1050,
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Cru Natural', hex: '#EBE4D8', bgClass: 'bg-[#EBE4D8]' },
      { name: 'Café Espresso', hex: '#3B2F27', bgClass: 'bg-[#3B2F27]' },
      { name: 'Fendi Queimado', hex: '#A89E92', bgClass: 'bg-[#A89E92]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '50% Linho Belga, 50% Modal Micro Tencel Regenerado',
    details: [
      'Toque gelado e sedoso ao vestir que não retém calor corporal',
      'Cós dianteiro liso de alfaiataria com ajuste elástico posterior ergonômico',
      'Não marca a lingerie devido à gramatura balanceada de 240g/m²',
      'Barra ampla com caimento impecável com rasteiras ou saltos de corda'
    ],
    costBreakdown: {
      fabric: 98,
      labor: 82,
      finishing: 38,
      logistics: 24,
      traditionalRetailMarkup: 1050,
      verticePrice: 360
    },
    costPerWear: {
      estimatedYears: 3,
      weeklyUses: 3,
      costPerDay: 'R$ 0,80'
    },
    badge: 'Máximo Conforto Térmico',
    rating: 4.91,
    reviewsCount: 134
  },
  {
    id: 'regata-seda-cupro-celeste',
    name: 'Regata de Alças Finas Cupro Seda',
    category: 'camisas',
    categoryLabel: 'Coleção Verão • Tops de Seda',
    tagline: 'Toque de seda pura com propriedades termorreguladoras: sensação fresca e brilho fosco acetinado.',
    price: 198,
    traditionalPrice: 590,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Champagne / Off-white', hex: '#F3EFE9', bgClass: 'bg-[#F3EFE9]' },
      { name: 'Bronze Queimado', hex: '#9E8570', bgClass: 'bg-[#9E8570]' },
      { name: 'Carvão Fosco', hex: '#262626', bgClass: 'bg-[#262626]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '100% Cupro Bemberg Ecológico respirável com toque de seda fria',
    details: [
      'Alças reguláveis delicadas com ferragens metálicas em banho fosco',
      'Forro duplo no busto dispensando o uso de sutiã em dias quentes',
      'Tecido anti-estática que não gruda na pele mesmo sob umidade alta',
      'Perfeita como peça solo ou base sob coletes e blazers de linho'
    ],
    costBreakdown: {
      fabric: 58,
      labor: 46,
      finishing: 22,
      logistics: 16,
      traditionalRetailMarkup: 590,
      verticePrice: 198
    },
    costPerWear: {
      estimatedYears: 3,
      weeklyUses: 3,
      costPerDay: 'R$ 0,42'
    },
    badge: 'Toque Gelado',
    rating: 4.88,
    reviewsCount: 165
  },
  {
    id: 'vestido-lenco-seda-positano',
    name: 'Vestido Lenço em Seda & Linho Positano',
    category: 'vestidos',
    categoryLabel: 'Coleção Verão • Noites de Verão',
    tagline: 'Linhas puras minimalistas com decote nas costas sutil. O equilíbrio entre frescor e sensualidade comedida.',
    price: 460,
    traditionalPrice: 1380,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop',
    colors: [
      { name: 'Areia Tostada', hex: '#CDBFAF', bgClass: 'bg-[#CDBFAF]' },
      { name: 'Preto Grafite', hex: '#1F1E1D', bgClass: 'bg-[#1F1E1D]' },
      { name: 'Creme Baunilha', hex: '#F7F1E6', bgClass: 'bg-[#F7F1E6]' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    composition: '60% Cupro Sedoso Sustentável, 40% Linho Puro da Normandia',
    details: [
      'Drapeado fluido que alonga a silhueta com leveza escultural',
      'Alças finas reforçadas com entretela interna para sustentação segura',
      'Comprimento midi nobre ideal para jantares de negócios ao ar livre e resorts',
      'Termorregulador natural para noites de verão quentes e úmidas'
    ],
    costBreakdown: {
      fabric: 138,
      labor: 106,
      finishing: 48,
      logistics: 28,
      traditionalRetailMarkup: 1380,
      verticePrice: 460
    },
    costPerWear: {
      estimatedYears: 4,
      weeklyUses: 2,
      costPerDay: 'R$ 1,10'
    },
    badge: 'Edição Limitada',
    rating: 4.95,
    reviewsCount: 76
  }
];

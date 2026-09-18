import { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Helena Montenegro',
    role: 'Sócia e Diretora Jurídica',
    city: 'São Paulo, SP',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    text: 'Sempre sofri para trabalhar elegante no verão brasileiro sem morrer de calor em audiências e reuniões com clientes. O Colete Saint-Tropez com a Bermuda Capri de linho viraram meu uniforme: postura de autoridade máxima, toque fresco e corte que não amassa com facilidade.',
    purchasedProduct: 'Colete de Alfaiataria em Linho Saint-Tropez'
  },
  {
    id: 'rev-2',
    author: 'Camila Albuquerque',
    role: 'Arquiteta e Sócia de Estúdio',
    city: 'Rio de Janeiro, RJ',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    text: 'O Vestido Riviera é uma joia de linho europeu puro. Estive no calor de 36°C visitando clientes e a respirabilidade do tecido é surreal. Uma peça dessa qualidade em marcas de shopping custaria facilmente mais de R$ 1.500. Na VÉRTICE paguei R$ 430 com transparência de custos!',
    purchasedProduct: 'Vestido Midi em Linho Puro Riviera'
  },
  {
    id: 'rev-3',
    author: 'Beatriz Fonseca',
    role: 'Fundadora e CEO em Tech',
    city: 'Florianópolis, SC',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    text: 'A Camisa de Linho Francês Brisa e a Pantalona Santorini são imbatíveis para viagens corporativas de verão. Tecidos naturais que respeitam a pele e não esquentam como poliéster. O custo por uso é ridiculamente baixo pela qualidade que entregam.',
    purchasedProduct: 'Camisa de Linho Puro Brisa'
  }
];

export const FABRIC_PILLARS = [
  {
    title: 'Linho Francês da Normandia',
    origin: 'Campos de Flandres & Normandia',
    badge: 'Certificação European Flax 100%',
    description: 'A fibra natural mais nobre e respirável do mundo. Com estrutura celular oca, dissipa calor e absorve umidade corporal até 5 vezes mais rápido que o algodão comum, mantendo você fresca o dia todo.',
    benefit: 'Termorregulação biológica em temperaturas até 38°C'
  },
  {
    title: 'Seda Cupro com Toque Gelado',
    origin: 'Fiação Sustentável Bemberg',
    badge: 'Termorregulação Ativa',
    description: 'Tecido fluido e biodegradável derivado de línter de algodão reciclado. Possui toque frio imediato na pele e absorção instantânea de transpiração, sem reter odores e com caimento líquido.',
    benefit: 'Sensação térmica de -2°C em contato com a pele'
  },
  {
    title: 'Algodão Pima Peruano Leveza 60/1',
    origin: 'Vales Costeiros do Peru',
    badge: 'Colheita Manual Orgânica',
    description: 'Gramatura aerada e fibra extra-longa que não cria bolinhas. Proporciona toque acetinado fresco, proteção solar natural UV e extrema resistência a lavagens constantes no verão.',
    benefit: 'Frescor duradouro sem deformar a peça'
  },
  {
    title: 'Alfaiataria Tropical Desestruturada',
    origin: 'Manufatura Ética em SP',
    badge: 'Construção Meia-Lua Leve',
    description: 'Substituímos os forros sintéticos pesados por forros parciais respiráveis em algodão e entretelas ultraleves alemãs. Postura executiva imponente com ventilação corporal contínua.',
    benefit: 'Elegância de escritório sem sobreaquecimento'
  }
];

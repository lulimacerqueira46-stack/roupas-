import { CapsulePiece, CapsuleOccasion } from '../types';

export const CAPSULE_PIECES: CapsulePiece[] = [
  {
    id: 'colete-alfaiataria-linho-saint-tropez',
    name: 'Colete Linho Saint-Tropez',
    role: 'O Top de Alfaiataria Fresco',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    price: 320
  },
  {
    id: 'bermuda-alfaiataria-linho-capri',
    name: 'Bermuda Capri em Linho',
    role: 'A Base Executiva de Verão',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    price: 298
  },
  {
    id: 'camisa-linho-puro-brisa',
    name: 'Camisa Linho Francês Brisa',
    role: 'A Camisa Solar Versátil',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600&auto=format&fit=crop',
    price: 340
  },
  {
    id: 'vestido-midi-linho-riviera',
    name: 'Vestido Midi Riviera',
    role: 'A Silhueta Escultural Fresca',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
    price: 430
  },
  {
    id: 'blazer-desestruturado-linho-biarritz',
    name: 'Blazer Tropical Biarritz',
    role: 'A Alfaiataria Sem Forro Pesado',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
    price: 490
  }
];

export const CAPSULE_OCCASIONS: CapsuleOccasion[] = [
  {
    id: 'summer-boardroom',
    title: 'Reunião Executiva em Dias Quentes',
    description: 'Colete de Linho Saint-Tropez usado com a Bermuda Capri de alfaiataria e o Blazer Tropical Biarritz. Autoridade serena e frescor térmico em dias de 32°C com choque de ar-condicionado.',
    lifestyleTag: 'Business no Verão',
    piecesIncluded: ['colete-alfaiataria-linho-saint-tropez', 'bermuda-alfaiataria-linho-capri', 'blazer-desestruturado-linho-biarritz'],
    lookImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'summer-networking',
    title: 'Almoço de Negócios & Trabalho Criativo',
    description: 'Camisa de Linho Puro Brisa com mangas dobradas combinada à Bermuda de Alfaiataria Capri. Sofisticação despretensiosa para encontros profissionais em varandas e almoços ao ar livre.',
    lifestyleTag: 'Almoço ao Ar Livre & Café',
    piecesIncluded: ['camisa-linho-puro-brisa', 'bermuda-alfaiataria-linho-capri'],
    lookImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'summer-travel',
    title: 'Viagem de Negócios & Resort Corporativo',
    description: 'Vestido Midi em Linho Riviera com a Camisa de Linho Brisa jogada sobre os ombros contra a brisa do entardecer. Tecido pré-amaciado com rugas nobres do linho que nunca parecem desleixo.',
    lifestyleTag: 'Ponte Aérea & Conferências',
    piecesIncluded: ['vestido-midi-linho-riviera', 'camisa-linho-puro-brisa'],
    lookImage: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'summer-evening',
    title: 'Jantar de Verão, Coquetel & Vernissage',
    description: 'Vestido Midi Riviera sobreposto com o Colete Saint-Tropez acinturado ou Blazer Biarritz. Visual monocromático em tons areia e off-white para destacar sua presença de maneira imponente.',
    lifestyleTag: 'Noite de Verão & Eventos',
    piecesIncluded: ['vestido-midi-linho-riviera', 'colete-alfaiataria-linho-saint-tropez'],
    lookImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop'
  }
];

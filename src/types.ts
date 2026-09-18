export interface ColorOption {
  name: string;
  hex: string;
  bgClass: string;
}

export interface CostBreakdown {
  fabric: number;
  labor: number;
  finishing: number;
  logistics: number;
  traditionalRetailMarkup: number;
  verticePrice: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'linho' | 'vestidos' | 'alfaiataria' | 'camisas' | 'calcas';
  categoryLabel: string;
  tagline: string;
  price: number;
  traditionalPrice: number;
  image: string;
  hoverImage: string;
  colors: ColorOption[];
  sizes: ('PP' | 'P' | 'M' | 'G' | 'GG')[];
  composition: string;
  details: string[];
  costBreakdown: CostBreakdown;
  costPerWear: {
    estimatedYears: number;
    weeklyUses: number;
    costPerDay: string;
  };
  badge?: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  selectedColor: ColorOption;
  selectedSize: string;
  quantity: number;
}

export interface CapsulePiece {
  id: string;
  name: string;
  role: string;
  image: string;
  price: number;
}

export interface CapsuleOccasion {
  id: string;
  title: string;
  description: string;
  piecesIncluded: string[]; // piece ids
  lifestyleTag: string;
  lookImage: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  text: string;
  purchasedProduct: string;
}

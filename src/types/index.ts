export interface Product {
  id: string;
  variantId: string;
  slug: string;
  title: string;
  step: string;
  subtitle: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  volume: string;
  images: string[];
  description: string;
  benefits: string[];
  ingredients: { name: string; description: string }[];
  howToUse: string;
  clinicalResults?: string[];
}

export interface CartItem {
  id: string;
  variantId: string;
  key: string;
  slug: string;
  title: string;
  variantTitle: string;
  price: number;
  quantity: number;
  image: string;
}

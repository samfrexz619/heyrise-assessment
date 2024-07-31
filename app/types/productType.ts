type Price = {
  currency: string;
  value: number;
}

export interface Products {
  category?: string;
  description: string;
  id: string;
  mainImage: string;
  name: string;
  price: Price;
  images: string[];
  variant?: string[];
}

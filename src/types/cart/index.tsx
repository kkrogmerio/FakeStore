// interfaces.ts (or wherever you have your interfaces defined)
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export interface CartState {
  products: Product[];
  cart: Product[];
  currentProduct: null | Product;
  loading: boolean;
  error: null | string;
  currentProductId: null | number;
}

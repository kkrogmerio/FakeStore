export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export type CartState = {
  products: Product[];
  cart: {
    product: Product;
    quantity: number;
  }[];
  loading: boolean;
  error: null | string;
  currentProductId: null | number;
  currentProduct: null | Product;
};
export interface CartItemWithTotalCost {
  product: Product;
  quantity: number;
  totalCost: number;
}
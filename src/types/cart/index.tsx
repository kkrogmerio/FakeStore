export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export interface Cart{
  product: Product;
  quantity: number;
}
export type CartState = {
  products: Product[];
  cart: Cart[];
  loading: boolean;
  error: null | string;
  currentProductId: null | number;
  currentProduct: null | Product;
};

export interface CartItemWithTotalCost extends Cart{

  totalCost: number;
}
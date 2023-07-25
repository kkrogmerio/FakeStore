import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp,NavigatorScreenParams} from '@react-navigation/native';
export type ProductStackParamList = {
    ProductList: undefined;
    ProductDetail: { productId: number };
  };
  
  export type ProductStackNavigationProp<T extends keyof ProductStackParamList> = 
    CompositeNavigationProp<
      StackNavigationProp<ProductStackParamList, T>,
      HomeTabNavigationProp
    >;
    export type CartTabNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Cart'>,
    StackNavigationProp<ProductStackParamList, 'ProductDetail'>
  >;
  export type ProductDetailScreenRouteProp = RouteProp<ProductStackParamList, 'ProductDetail'>;
  
 export type TabParamList = {
    Home: NavigatorScreenParams<ProductStackParamList>;
    Cart: undefined;
  };
  
  export type HomeTabNavigationProp = BottomTabNavigationProp<TabParamList, 'Home'>;

  
  
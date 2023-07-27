import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp,NavigatorScreenParams} from '@react-navigation/native';
import { ScreenNames } from './screenNames';
export type ProductStackParamList = {
    [ScreenNames.Home]: undefined;
    [ScreenNames.ProductDetail]: { productId: number };
  };
  
  export type ProductStackNavigationProp<T extends keyof ProductStackParamList> = 
    CompositeNavigationProp<
      StackNavigationProp<ProductStackParamList, T>,
      HomeTabNavigationProp
    >;
    export type CartTabNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, ScreenNames.Cart>,
    StackNavigationProp<ProductStackParamList, ScreenNames.ProductDetail>
  >;
  export type ProductDetailScreenRouteProp = RouteProp<ProductStackParamList, ScreenNames.ProductDetail>;
  
 export type TabParamList = {
  [ScreenNames.ProductStack]: NavigatorScreenParams<ProductStackParamList>;
    Cart: undefined;
  };
  
  export type HomeTabNavigationProp = BottomTabNavigationProp<TabParamList, ScreenNames.ProductStack>;

  
  
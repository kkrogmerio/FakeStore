import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from 'src/screens/productList';
import ProductDetail from 'src/screens/productDetail';
import { ScreenNames } from '../screenNames';

type ProductStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.ProductDetail]: { productId: number };
};

const ProductStack = createStackNavigator<ProductStackParamList>();

const ProductStackNavigator = () => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      <ProductStack.Screen name={ScreenNames.Home} component={ProductList} />
      <ProductStack.Screen name={ScreenNames.ProductDetail} component={ProductDetail} />
    </ProductStack.Navigator>
  );
};

export default ProductStackNavigator;

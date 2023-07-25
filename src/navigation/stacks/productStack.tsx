import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '../../screens/productList';
import ProductDetail from '../../screens/productDetail';

type ProductStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: number };
};

const ProductStack = createStackNavigator<ProductStackParamList>();

const ProductStackNavigator = () => {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name="ProductList" component={ProductList} />
      <ProductStack.Screen name="ProductDetail" component={ProductDetail} />
    </ProductStack.Navigator>
  );
};

export default ProductStackNavigator;

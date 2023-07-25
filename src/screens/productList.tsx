import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchProducts, fetchProductById } from '../state/cart/slice';
import ProductItem from '../components/productItem';
import { ProductStackNavigationProp } from '../navigation/types';  
import { Product } from '../types/cart';

type ProductListProps = {
  navigation: ProductStackNavigationProp<'ProductList'>;
};

const ProductList: React.FC<ProductListProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePress = (productId: number) => {
    dispatch(fetchProductById(productId));
    navigation.navigate('ProductDetail', { productId });
  };

  const renderItem = ({ item }:{item:Product}) => (
    <ProductItem
      product={item}
      onPress={() => handlePress(item.id)}
    />
  );

  return (
    <View>
      <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default ProductList;

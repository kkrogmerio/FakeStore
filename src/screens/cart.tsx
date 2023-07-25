import React from 'react';
import { FlatList, View,Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { removeFromCart } from '../state/cart/slice';
import ProductItem from '../components/productItem';
import { CartTabNavigationProp } from '../navigation/types';
import { Product } from '../types/cart';

type CartProps = {
  navigation: CartTabNavigationProp;
};

const Cart: React.FC<CartProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const handleRemoveFromCart = (productId:number) => {
    dispatch(removeFromCart(productId));
  };

  const renderItem = ({ item }:{item:Product}) => (
    <View>
      <ProductItem
        product={item}
        onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
      />
      <Text onPress={() => handleRemoveFromCart(item.id)}>Remove from Cart</Text>
    </View>
  );

  return (
    <View>
      <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default Cart;

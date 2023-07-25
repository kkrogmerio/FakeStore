import React from 'react';
import { Image, Text, View } from 'react-native';
import { Product as ProductType } from '../types/cart';

type ProductItemProps = {
  product: ProductType;
  onPress: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress }) => {
  return (
    <View>
      <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      <Text>{product.title}</Text>
      <Text>{product.price}</Text>
      <Text onPress={onPress}>View Details</Text>
    </View>
  );
};

export default ProductItem;

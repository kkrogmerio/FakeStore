import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Product } from '../types/cart';
import { COLORS, STRINGS } from 'src/constants';

type ProductItemProps = {
  product: Product;
  onPress: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{STRINGS.currencySymbol}{product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    color: COLORS.title,
    fontWeight: 'bold',
  },
  price: {
    color: COLORS.price,
  },
});

export default ProductItem;

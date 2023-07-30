import React from 'react';
import {  StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { Product } from '../types/cart';
import { COLORS, STRINGS } from 'src/constants';
import FastImage from 'react-native-fast-image';
type ProductItemProps = {
  product: Product;
  onPress: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <FastImage source={{ uri: product.image }} style={styles.image} resizeMode={FastImage.resizeMode.contain}/>
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

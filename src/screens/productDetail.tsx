import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToCart, fetchProductById } from '../state/cart/slice';
import { ProductDetailScreenRouteProp, ProductStackNavigationProp } from '../navigation/types';

type ProductDetailProps = {
  route: ProductDetailScreenRouteProp;
  navigation: ProductStackNavigationProp<'ProductDetail'>;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();
  const { productId } = route.params;
  const product = useAppSelector((state) => state.cart.currentProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    if (product) { 
      dispatch(addToCart(product));
    }
  };

  return (
    <View>
      {product ? (
        <>
          <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
          <Text>{product.title}</Text>
          <Text>{product.price}</Text>
          <TouchableOpacity onPress={handleAddToCart}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Loading...</Text> 
      )}
    </View>
  );
};

export default ProductDetail;

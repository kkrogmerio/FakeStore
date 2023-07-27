import React, {useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {fetchProducts, fetchProductById} from 'src/state/cart/slice';
import {ProductStackNavigationProp} from 'src/navigation/types';
import {Product} from 'src/types/cart';
import ProductItem from 'src/components/productItem';
import { ScreenNames } from 'src/navigation/screenNames';
import { COLORS } from 'src/constants';
type ProductListProps = {
  navigation: ProductStackNavigationProp<ScreenNames.Home>;
};

const ProductList: React.FC<ProductListProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.cart.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePress = (productId: number) => {
    dispatch(fetchProductById(productId));
    navigation.navigate(ScreenNames.ProductDetail, {productId});
  };

  const renderItem = ({item}: {item: Product}) => (
    <ProductItem product={item} onPress={() => handlePress(item.id)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  list:{
    marginBottom:60
  }
});

export default ProductList;

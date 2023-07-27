import React, {useEffect} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {addToCart, fetchProductById} from 'src/state/cart/slice';
import {
  ProductDetailScreenRouteProp,
  ProductStackNavigationProp,
} from 'src/navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScreenNames} from 'src/navigation/screenNames';
import {COLORS, STRINGS} from 'src/constants';

type ProductDetailProps = {
  route: ProductDetailScreenRouteProp;
  navigation: ProductStackNavigationProp<ScreenNames.ProductDetail>;
};

const ProductDetail: React.FC<ProductDetailProps> = ({route, navigation}) => {
  const dispatch = useAppDispatch();
  const {productId} = route.params;
  const product = useAppSelector(state => state.cart.currentProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          <Text style={styles.orderHeaderTitle}>{STRINGS.order}</Text>
          {product?.title}
        </Text>
        <View />
      </View>

      {product ? (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Image source={{uri: product.image}} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>
            {STRINGS.currencySymbol}
            {product.price}
          </Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>
              {product.category[0].toUpperCase() + product.category.slice(1)}
            </Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
            <Text style={styles.buttonText}>{STRINGS.addToCart}</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Text>{STRINGS.loading}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  headerTitle: {fontSize: 18, fontWeight: 'bold'},
  orderHeaderTitle: {fontSize: 22, fontWeight: '700'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 30,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  categoryContainer: {
    backgroundColor: COLORS.lighterGray,
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 10,
  },
  category: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.darkGray,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: COLORS.black,
    margin: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 60,
  },
});

export default ProductDetail;

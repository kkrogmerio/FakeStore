import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { removeFromCart, addToCart } from 'src/state/cart/slice';
import { CartTabNavigationProp } from 'src/navigation/types';
import { Product } from 'src/types/cart';
import { ScreenNames } from 'src/navigation/screenNames';
import { COLORS, STRINGS } from 'src/constants';
import FastImage from 'react-native-fast-image';
import { itemCostsSelector } from 'src/state/cart/selectors';
import { CartItemWithTotalCost } from 'src/types/cart';
type CartProps = {
  navigation: CartTabNavigationProp;
};

const Cart: React.FC<CartProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const cartItemsWithTotalCost = useAppSelector(itemCostsSelector);
  const renderItem = ({ item }: {item:CartItemWithTotalCost}) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate(ScreenNames.ProductDetail,{productId:item.product.id})} style={styles.card}>
        <View style={styles.leftSection}>
          <FastImage source={{ uri: item.product.image }} style={styles.image} resizeMode={FastImage.resizeMode.contain}/>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item.product.id))} style={styles.controlButton}>
              <Text style={styles.controlText}>{STRINGS.minusSign}</Text>
            </TouchableOpacity>
            <View style={styles.quantity}>
              <Text style={styles.quantityText}>{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(addToCart(item.product))} style={styles.controlButton}>
              <Text style={styles.controlText}>{STRINGS.plusSign}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.category}>{item.product.category[0].toUpperCase()+item.product.category.slice(1)}</Text>
          <Text style={styles.title}>{item.product.title}</Text>
          <Text style={styles.total}>{STRINGS.total}{STRINGS.dollarSign}{item.totalCost}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartItemsWithTotalCost && <FlatList showsVerticalScrollIndicator={false} style={styles.itemList} data={cartItemsWithTotalCost} renderItem={renderItem} keyExtractor={(item) => item.product.id.toString()} />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  itemList:{
    marginBottom:40
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  leftSection: {
    alignItems: 'center',
    flex: 1,
  },
  rightSection: {
    flex: 1.5,
    marginLeft: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  controlButton: {
    backgroundColor: COLORS.black,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    color: COLORS.white,
    fontSize: 20,
  },
  quantity: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  quantityText: {
    color: COLORS.black,
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,

  },
  category: {
    color: COLORS.title,
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    color: COLORS.price,
    fontSize: 14,
    marginTop:12,
  },
  total: {
    fontWeight:'bold',
    color: COLORS.title,
    fontSize: 28,
    marginTop: 22,
  },
});
export default Cart;

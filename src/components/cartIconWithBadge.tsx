import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from 'src/hooks';
import { COLORS} from 'src/constants';

interface IconProps {
  name: string;
  size: number;
  color: string;
}



const CartIconWithBadge: React.FC<IconProps> = ({ name, size, color }) => {
    const cartItemsCount = useAppSelector((state) => state.cart.cart).length;

    return (
      <View>
        <Icon name={name} size={size} color={color} />
        {cartItemsCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.text}>{cartItemsCount}</Text>
          </View>
        )}
      </View>
    );
};
  
export default CartIconWithBadge;
  
const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: COLORS.red,
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
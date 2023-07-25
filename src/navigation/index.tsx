import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

import Cart from '../screens/cart';
import ProductStackNavigator from './stacks/productStack';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <View style={styles.navigatorContainer}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'ProductStack') {
                iconName = focused ? 'home' : 'home-outline';
              } else{
                iconName = focused ? 'cart' : 'cart-outline';
              }
         
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="ProductStack" component={ProductStackNavigator} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default AppNavigator;

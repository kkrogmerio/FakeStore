import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CartIconWithBadge}from 'src/components'
import Cart from 'src/screens/cart';
import ProductStackNavigator from './stacks/productStack';
import { ScreenNames } from './screenNames';
import {COLORS} from 'src/constants';
import { TabParamList } from './types';
const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ScreenNames.ProductStack}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === ScreenNames.ProductStack) {
              iconName = focused ? 'home' : 'home-outline';
              return <Icon name={iconName} size={size} color={color} />;
            } else if (route.name === ScreenNames.Cart) {
              iconName = focused ? 'cart' : 'cart-outline';
              return <CartIconWithBadge name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: COLORS.tabActiveTint,
          tabBarInactiveTintColor: COLORS.tabInactiveTint,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderRadius: 30,
            height: 60,
            shadowColor: COLORS.shadow,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
            position: 'absolute',
            marginBottom: 20,
            marginHorizontal: 20,
            paddingBottom: 10,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name={ScreenNames.ProductStack} component={ProductStackNavigator} options={{ title: ScreenNames.Home }} />
        <Tab.Screen name={ScreenNames.Cart} component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
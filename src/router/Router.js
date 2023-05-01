import React from 'react';
import SignInScreen from '../screens/signIn/SignIn';
import SignUpScreen from '../screens/signUp/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavoritesScreen from '../screens/Favorites/Favorites';
import CartScreen from '../screens/Cart/Cart';
import AccountScreen from '../screens/Account/Account';
import HistoryScreen from '../screens/History/History';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createAppNavigator, createSwitchNavigator} from '@react-navigation/core';
import { COLORS } from '../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signin"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgotpassword"
        component={ForgotPasswordScreen}
        options={{
          headerTitle: null,
          headerBackTitle: 'back',
          headerBackTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: COLORS.white,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          fontWeight: '800',
          color: COLORS.white,
          fontSize: 30,
          paddingBottom: 8,
        },
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: 'Tasty',
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="history"
              size={focused ? 30 : 20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, focused}) => (
            <EvilIcons name="cart" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <FontAwesome5 name="home" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, focused}) => (
            <MaterialIcons
              name="favorite"
              size={focused ? 30 : 20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="account"
              size={focused ? 30 : 20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const mainStack = () => { 
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: COLORS.primary,
//         },
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="Auth"
//         component={AuthStack}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Main"
//         component={BottomTabs}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );

// }

const Router = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Router;

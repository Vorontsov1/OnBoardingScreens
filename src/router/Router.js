import SignInScreen from "../screens/signIn/SignIn";
import SignUpScreen from "../screens/signUp/SignUp";
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPassword";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import FavoritesScreen from "../screens/Favorites/Favorites";
import CartScreen from "../screens/Cart/Cart";
import AccountScreen from "../screens/Account/Account";
import HistoryScreen from "../screens/History/History";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { COLORS } from "../constants/theme";

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

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};


const Router = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Router;
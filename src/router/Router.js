import SignInScreen from "../screens/signIn/SignIn";
import SignUpScreen from "../screens/signUp/SignUp";
import ForgotPasswordScreen from "../screens/forgotPassword/ForgotPassword";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { COLORS } from "../constants/theme";

const Stack = createStackNavigator();

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

const Router = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Router;
import SignInScreen from "../screens/signIn/SignIn";
import SignUpScreen from "../screens/signUp/SignUp";
import ForgotPasswordScreen from "../screens/forgotPassword/ForgotPassword";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={SignInScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen} />
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
import {View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import { COLORS } from '../../constants/theme';




const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('.././../assets/background.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign into continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={COLORS.white}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.buttonFacebook}>
                <View style={styles.facebookIconContainer}>
                  <Image
                    source={require('../../assets/facebook.png')}
                    style={styles.facebookIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.buttonTextFacebook}>
                  Connect with Facebook
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('forgotpassword')}>
              <Text style={styles.forgotPassword}>
                Forgot Password? | Click here
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={styles.dontHaveAccount}>
                Don`t have an account? | Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default SignInScreen;

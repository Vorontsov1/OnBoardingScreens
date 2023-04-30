import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import {COLORS} from '../../constants/theme';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('.././../assets/background.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Get Started</Text>
            <Text style={styles.subtitle}>Sign up to continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Contact Number"
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
                <Text style={styles.buttonText}>Sign Up</Text>
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
                  Sign In with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('signin')}>
              <Text style={styles.dontHaveAccount}>
                Already have an account? | Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

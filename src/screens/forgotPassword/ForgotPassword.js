import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subTitle}>
        Enter your email address below and we will send you an email with
        instructions on how to change your password.
      </Text>
      <View>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#666666"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;

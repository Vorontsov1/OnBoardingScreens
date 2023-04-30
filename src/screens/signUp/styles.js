import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../src/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.h1 * 1.5,
    fontWeight: 'bold',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    paddingTop: 3,
  },
  dataContainer: {
    marginTop: 50,
  },
  textInput: {
    color: COLORS.white,
    marginTop: 20,
    width: '90%',
    height: 50,
    borderBottomColor: COLORS.lightgray,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    width: '90%',
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    marginHorizontal: 15,
    backgroundColor: COLORS.blue,
    borderRadius: 20,
  },
  facebookIconContainer: {
    marginRight: 10,
  },
  facebookIcon: {
    width: 30,
    height: 30,
  },
  buttonTextFacebook: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.h5,
  },
  forgotPassword: {
    color: COLORS.white,
    fontSize: SIZES.h5,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  dontHaveAccount: {
    color: COLORS.white,
    fontSize: SIZES.h5,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  bottomContainer: {
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default styles;

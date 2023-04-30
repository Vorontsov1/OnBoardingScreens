import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.title,
    fontSize: SIZES.h1,
    marginVertical: 10,
  },
  subTitle: {
    fontWeight: '500',
    color: COLORS.title,
  },
  textInput: {
    borderBottomColor: COLORS.lightgray,
    borderBottomWidth: 1,
    fontSize: SIZES.h3,
    paddingVertical: 10,
    marginVertical: 30,
    color: COLORS.title,
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
});

export default styles;

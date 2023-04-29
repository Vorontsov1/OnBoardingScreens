import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './src/constants/theme';

const slides = [
  {
    id: 1,
    title: 'Discover best places',
    description:
      'As reanimated is setup to configure and install automatically, the only thing you have to do is to run pod install in the ios/ directory. Note that the auto-installation setup works for the standard React Native apps, if you have problems setting it up with a custom setup (e.g. brownfield) please start a new issue where we can find a way to guide you through that process. ',
    image: require('./src/assets/onboardScreen1.png'),
  },
  {
    id: 2,
    title: 'choose A Tasty Dish',
    description:
      'As reanimated is setup to configure and install automatically, the only thing you have to do is to run pod install in the ios/ directory. Note that the auto-installation setup works for the standard React Native apps, if you have problems setting it up with a custom setup (e.g. brownfield) please start a new issue where we can find a way to guide you through that process.',
    image: require('./src/assets/onboardScreen2.png'),
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description:
      'As reanimated is setup to configure and install automatically, the only thing you have to do is to run pod install in the ios/ directory. Note that the auto-installation setup works for the standard React Native apps, if you have problems setting it up with a custom setup (e.g. brownfield) please start a new issue where we can find a way to guide you through that process.',
    image: require('./src/assets/onboardScreen3.png'),
  },
];

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  const buttonLabel = (label) => { 
    return (
      <View style={{padding: 12}}>
        <Text style={{
          fontSize: SIZES.h4,
          fontWeight: '600',
          color: COLORS.title  ,
        }}>{label}</Text>
      </View>
    )
  } 

if (!showHomePage) {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View style={{
            flex: 1,
            alignItems: 'center',
            padding: 15,
            paddingTop: 100,
          }}>
            <Image
              source={item.image}
              style={{
                width: SIZES.width - 80,
                height: 400,
              }}
              resizeMode="contain"
            />
            <Text style={{
              fontWeight: 'bold',
              fontSize: SIZES.h1,
              color: COLORS.primary,
            }}>{item.title}</Text>

            <Text style={{
              textAlign: 'center',
              fontSize: SIZES.body,
              color: COLORS.title,
            }}>{item.description}</Text>
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor: COLORS.primary,
        width: 30,
      }}
      showSkipButton
      renderNextButton={() => buttonLabel('Next')}
      renderSkipButton={() => buttonLabel('Skip')}
      renderDoneButton={() => buttonLabel('Done')}
      onDone={() => setShowHomePage(true)}
    />
   )
}

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default App;

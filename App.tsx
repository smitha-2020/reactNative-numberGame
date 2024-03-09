/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {StartSplashScreen} from './src/screens/StartSplashScreen';
import {GameScreen} from './src/screens/GameScreen';

function App(): React.JSX.Element {
  const [pickedNumber, setPickedNumber] = useState<string>('');

  const confirmPickedNumber = (n: string) => {
    setPickedNumber(n);
  };
  let screen = <StartSplashScreen onPress={confirmPickedNumber} />;
  if (pickedNumber) {
    screen = <GameScreen pickedNumber={pickedNumber} />;
  }
  return (
    <View style={styles.container}>
      {/** <View style={styles.guessNumberWrapper}>
        <View style={styles.guessNumberTextWrapper}>
          <Text style={styles.guessNumberText}>Guess The Number!!</Text>
        </View>
      </View> */}
      <ImageBackground
        source={require('./src/assets/images/background.png')}
        style={styles.flexOne}
        imageStyle={{opacity: 0.25}}>
        <SafeAreaView style={styles.flexOne}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'oldlace',
  },
  flexOne: {flex: 1},
  guessNumberTextWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'coral',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  guessNumberText: {fontSize: 12, fontWeight: 'bold'},
  guessNumberTextInputWrapper: {
    marginVertical: 100,
  },
  guessNumberWrapper: {marginTop: 100},
});

export default App;

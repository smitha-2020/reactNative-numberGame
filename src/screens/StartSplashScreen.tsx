import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {GuessNumberButton} from '../components/GuessNumberButton';

type StartSplashScreenProps = {
  onPress: (n: string) => void;
};

export const StartSplashScreen = ({onPress}: StartSplashScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState<string>('');
  const getNumber = (n: string) => {
    setEnteredNumber(n);
  };

  const confirmNumber = () => {
    if (
      parseInt(enteredNumber) < 0 ||
      parseInt(enteredNumber) > 99 ||
      isNaN(parseInt(enteredNumber))
    ) {
      Alert.alert(
        'Invalid Number',
        'Entered Number should be between 1 to 99',
        [{text: 'okay', onPress: clearTextInput}],
      );

      return;
    }
    onPress(enteredNumber);
  };
  const clearTextInput = () => {
    setEnteredNumber('');
  };
  return (
    <View style={styles.guessNumberFormWrapper}>
      {/** <View style={styles.guessNumberWrapper}>
        <View style={styles.guessNumberTextWrapper}>
          <Text style={styles.guessNumberText}>Guess The Number!!</Text>
        </View>
      </View> */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput
          style={styles.guessNumberTextInput}
          maxLength={2}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={getNumber}
          value={enteredNumber}
        />
      </View>

      <View style={styles.guessNumberFormInputWrapper}>
        <View style={styles.flexOne}>
          <GuessNumberButton onPress={clearTextInput}>Reset</GuessNumberButton>
        </View>
        <View style={styles.flexOne}>
          <GuessNumberButton onPress={confirmNumber}>Confirm</GuessNumberButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  guessNumberTextInput: {
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    marginBottom: 10,
    width: '15%',
  },
  guessNumberFormWrapper: {
    marginTop: 100,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 50,
    backgroundColor: 'white',
    alignItems: 'center',

    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
  },
  guessNumberFormInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexOne: {flex: 1},
});

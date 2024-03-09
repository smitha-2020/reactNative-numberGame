import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GuessScreenTitle} from '../components/GuessScreenTitle';
import {useGenerateRandomNumber} from '../hooks/useGenerateRandomNumber';

type GamesScreenProps = {
  pickedNumber: string;
};

export const GameScreen = ({pickedNumber}: GamesScreenProps) => {
  console.log('Initial picked Numner', pickedNumber);
  const [nextGuessedNumber, setNextGuessedNumber] =
    useState<string>(pickedNumber);

  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);

  console.log(min, max);

  const {guessedNumber, startGuess} = useGenerateRandomNumber(
    min,
    max,
    parseInt(nextGuessedNumber, 10),
  );

  useEffect(() => {
    console.log('start guessing again');

    startGuess();
  }, [nextGuessedNumber, min, max]);

  if (guessedNumber === parseInt(pickedNumber)) {
    console.log('WINNER!!');
  }

  const checkMinMax = (checkBoundary: string) => {
    if (checkBoundary === 'lower') {
      console.log('lower');
      if (guessedNumber < parseInt(pickedNumber)) {
        console.log('you are a lier');
        return;
      }
      setNextGuessedNumber(guessedNumber.toString());
      setMax(guessedNumber);
    } else {
      console.log('higer');
      if (guessedNumber > parseInt(pickedNumber)) {
        console.log('you are a lier');
        return;
      }
      setNextGuessedNumber(guessedNumber.toString());
      setMin(guessedNumber);
    }
  };

  {
    /** const incrementMinMax = () => {
    console.log('hello incrementMinMax', guessedNumber);
    if (parseInt(nextGuessedNumber) < guessedNumber) {
      console.log('You are a lier');
    }
    setNextGuessedNumber(guessedNumber.toString());
    setMin(guessedNumber);
  };

  const decrementMinMax = () => {
    if (parseInt(nextGuessedNumber) > guessedNumber) {
      console.log('You are a lier');
    }
    console.log('hello decrementMinMax', guessedNumber);
    setNextGuessedNumber(guessedNumber.toString());
    setMax(guessedNumber);
  }; */
  }

  return (
    <View style={styles.flexOne}>
      <GuessScreenTitle>Opponent's Guess</GuessScreenTitle>
      <View>
        <Text>{guessedNumber}</Text>
      </View>
      <View>
        <Pressable onPress={() => checkMinMax('higher')}>
          <View>
            <Text> + </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => checkMinMax('lower')}>
          <View>
            <Text> - </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: {flex: 1},
});

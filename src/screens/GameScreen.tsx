import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {GuessScreenTitle} from '../components/GuessScreenTitle';
import {useGenerateRandomNumber} from '../hooks/useGenerateRandomNumber';

type GamesScreenProps = {
  pickedNumber: string;
  gameOverFn: (totalCount: number) => void;
};

export const GameScreen = ({pickedNumber, gameOverFn}: GamesScreenProps) => {
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

  const [prevGuesses, setPrevGuesses] = useState<number[]>([]);

  useEffect(() => {
    guessedNumber > 0 && setPrevGuesses(guesses => [guessedNumber, ...guesses]);

    if (guessedNumber === parseInt(pickedNumber)) {
      console.log('winner');
      gameOverFn(prevGuesses.length);
    }
  }, [guessedNumber, pickedNumber, gameOverFn]);

  useEffect(() => {
    console.log('start guessing again');

    startGuess();
  }, [nextGuessedNumber, min, max, startGuess]);

  const checkMinMax = (checkBoundary: string) => {
    if (checkBoundary === 'lower') {
      console.log('lower');
      if (guessedNumber < parseInt(pickedNumber)) {
        console.log('you are a lier');
        return;
      }
      console.log('guessed', guessedNumber);
      setNextGuessedNumber(guessedNumber.toString());
      setMax(guessedNumber);
      //setPrevGuesses(guesses => [guessedNumber, ...guesses]);
    } else {
      console.log('higer');
      if (guessedNumber > parseInt(pickedNumber)) {
        console.log('you are a lier');
        return;
      }
      console.log('guessed', guessedNumber);
      setNextGuessedNumber(guessedNumber.toString());
      setMin(guessedNumber + 1);
      //setPrevGuesses(guesses => [guessedNumber, ...guesses]);
    }
  };

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
      <View style={styles.flexOne}>
        <FlatList
          data={prevGuesses}
          renderItem={({index, item}) => <Text key={index}>{item}</Text>}
          ListEmptyComponent={<Text>No Items To Display!!</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: {flex: 1},
});

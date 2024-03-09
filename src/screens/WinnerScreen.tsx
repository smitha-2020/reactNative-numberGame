import React from 'react';
import {Pressable, Text, View} from 'react-native';

type WinnerScreenProps = {
  startGameFn: () => void;
  pickedNumber: string;
  totalGuesses: number;
};

export const WinnerScreen = ({
  startGameFn,
  pickedNumber,
  totalGuesses,
}: WinnerScreenProps) => {
  return (
    <View>
      <Text>Winner!!</Text>
      <Pressable onPress={() => startGameFn()}>
        <Text>start game again</Text>
      </Pressable>
      <Text>
        Phone took<Text>{totalGuesses}</Text> rounds to guess the number
        <Text>{pickedNumber}</Text>
      </Text>
    </View>
  );
};

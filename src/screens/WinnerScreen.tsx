import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {GuessScreenTitle} from '../components/GuessScreenTitle';

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
    <View style={{flex: 1}}>
      <GuessScreenTitle style={{marginVertical: 1}}>Winner !!</GuessScreenTitle>

      <Pressable onPress={() => startGameFn()}>
        <GuessScreenTitle style={{backgroundColor: 'coral'}}>
          Start Game Again!!
        </GuessScreenTitle>
      </Pressable>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/images/success.png')}
          style={{
            width: 300,
            height: 300,
            borderRadius: 150,
            borderWidth: 2,
            borderColor: 'coral',
          }}
        />
      </View>

      <GuessScreenTitle style={{alignItems: 'center'}}>
        <Text>
          Phone took
          <Text style={{fontSize: 20, color: 'coral', fontWeight: '500'}}>
            {totalGuesses}
          </Text>
          rounds to guess the number
          <Text style={{fontSize: 20, color: 'coral', fontWeight: '500'}}>
            {pickedNumber}
          </Text>
        </Text>
      </GuessScreenTitle>
    </View>
  );
};

import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type GuessNumberButtonProps = {
  children: any;
  onPress: () => void;
};

export const GuessNumberButton = ({
  children,
  onPress,
}: GuessNumberButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.guessNumberButtonWrapper}>
        <Text style={styles.guessNumberButtonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  guessNumberButtonWrapper: {
    padding: 10,
    backgroundColor: 'coral',
    margin: 4,
  },
  guessNumberButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

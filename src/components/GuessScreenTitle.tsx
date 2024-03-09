import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type GuessScreenTitleProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const GuessScreenTitle = ({children, style}: GuessScreenTitleProps) => {
  return (
    <View style={[styles.gameScreenWrapper, style]}>
      <View style={styles.gameScreenTitle}>
        <Text style={styles.gameScreenText}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreenWrapper: {backgroundColor: 'white', margin: 30, borderRadius: 10},
  gameScreenTitle: {padding: 10},
  gameScreenText: {fontSize: 12, fontWeight: 'bold', textAlign: 'center'},
});

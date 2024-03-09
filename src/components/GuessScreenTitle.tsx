import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const GuessScreenTitle = ({children}: any) => {
  return (
    <View style={styles.gameScreenWrapper}>
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

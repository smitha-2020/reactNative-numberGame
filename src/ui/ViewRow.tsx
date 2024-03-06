import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ViewRow = ({children}: any) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

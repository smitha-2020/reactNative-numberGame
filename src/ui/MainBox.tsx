import React from 'react';
import {StyleSheet, View} from 'react-native';

export const MainBox = ({children}: any) => {
  return <View style={styles.mainBox}>{children}</View>;
};

const styles = StyleSheet.create({
  mainBox: {
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
});

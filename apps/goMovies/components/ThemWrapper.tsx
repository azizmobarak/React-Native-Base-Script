import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: React.ReactElement;
};

export default function ThemWrapper({children}: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#900',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

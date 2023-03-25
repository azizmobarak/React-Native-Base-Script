import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
  onPressDelay: number;
};

export default function ThemColorButton({onPress, onPressDelay, title}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      delayPressOut={onPressDelay}
      style={styles.submitBtn}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submitBtn: {
    marginTop: 20,
    backgroundColor: '#900',
    fontSize: 22,
    pading: 10,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

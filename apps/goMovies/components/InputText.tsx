import React from 'react';
import {InputModeOptions, StyleSheet, TextInput} from 'react-native';

type Props = {
  placeholder: string;
  mode: InputModeOptions;
  value?: string;
  passwordRules?: string;
  isPassword?: boolean;
};

export default function InputText(props: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      inputMode={props.mode}
      value={props.value}
      passwordRules={props.passwordRules}
      secureTextEntry={props.isPassword ?? false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: 'transparent',
    color: '#900',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 20,
    textAlign: 'center',
  },
});

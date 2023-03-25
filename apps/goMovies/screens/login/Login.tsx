import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import InputText from '../../components/InputText';
import ThemColorButton from '../../components/Button';
import {buildLoginPresenter} from './loginPresenter';
import {themConnector} from '../../utils/WrapperConnector';

function LoginComponent() {
  const {toHome} = buildLoginPresenter();
  const divider = (title: string) => (
    <View style={styles.visitContainer}>
      <View style={styles.div} />
      <Text style={styles.visitText}>{title}</Text>
      <View style={styles.div} />
    </View>
  );

  return (
    <>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <ThemColorButton
        title="Continue as Guest"
        onPressDelay={200}
        onPress={() => null}
      />
      {divider('or Login')}
      <View style={styles.inputContainer}>
        <InputText placeholder="username" mode="text" />
        <InputText
          placeholder="password"
          passwordRules="minlength: 4"
          mode="text"
          isPassword={true}
        />
      </View>
      <ThemColorButton title="Submit" onPressDelay={200} onPress={toHome} />
      {divider('visit us')}
      <Text style={{color: 'white'}}>https://Brandini.co.uk</Text>
      <Text style={styles.noteText}>
        * Brandini LTD is a zon where you can find interesting digital products
        and services in UK{' '}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 10,
    borderRadius: 20,
  },
  noteText: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  visitContainer: {
    marginVertical: 20,
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  div: {
    borderWidth: 1,
    width: '30%',
    borderColor: 'white',
  },
  visitText: {
    color: 'white',
  },
});

export const LoginScreen = () => themConnector(<LoginComponent />);

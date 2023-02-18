import {NavigationContainer} from '@react-navigation/native';
import React, {RefObject} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {RootNavigationNavigator} from './services/Navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './reducer/store';
import {navigationRef} from './services/Navigation/ReactNavigationNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'black'} />
      <Provider store={store}>
        <NavigationContainer ref={navigationRef as RefObject<any>}>
          <RootNavigationNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

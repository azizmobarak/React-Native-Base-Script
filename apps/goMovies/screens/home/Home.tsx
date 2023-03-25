import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigateToLogin} from '../../services/Navigation/helpers';
import {themConnector} from '../../utils/WrapperConnector';

function HomeComponent() {
  return (
    <View>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text>hello text</Text>
      </TouchableOpacity>
    </View>
  );
}

export const HomeScreen = () => themConnector(<HomeComponent />);

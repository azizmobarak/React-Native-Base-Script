import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigateToLogin} from '../../services/Navigation/helpers';

export default function Home() {
  return (
    <View>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text>hello text</Text>
      </TouchableOpacity>
    </View>
  );
}

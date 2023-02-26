import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HorizentalList from '../../components/HorizentalList';

export default function Home() {
  return (
    <View style={styles.container}>
      <HorizentalList title={'Popular Movies'} />
      {/* <Image
        style={{width: 200, height: 200, borderWidth: 1}}
        source={{
            uri: 'https://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageStyle,
} from 'react-native';
import {FontSize, FontSizes} from '../theme/fonts';

const exampleData = [
  {
    image:
      'https://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    text: 'some Text',
  },
  {
    image:
      'https://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    text: 'some Text',
  },
];

interface Props {
  title: string;
}

export default function HorizentalList(props: Props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        style={styles.listContainer}
        data={exampleData}
        renderItem={({item}) => {
          return (
            <View style={styles.itemContainer}>
              <Image
                style={[styles.image, getBorederLeftStyles()]}
                source={{uri: item.image}}
              />
              <Image style={styles.image} source={{uri: item.image}} />
              <Image
                style={[styles.image, getBorederRightStyles()]}
                source={{uri: item.image}}
              />
              <Text numberOfLines={1} style={styles.text}>
                {item.text}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index + item.text}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const getBorederLeftStyles = (): ImageStyle => {
  return {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  };
};

const getBorederRightStyles = (): ImageStyle => {
  return {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  };
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: 200,
  },
  text: {
    marginTop: '55%',
    position: 'absolute',
    padding: 8,
    ...FontSize(FontSizes.Header1),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    ...FontSize(FontSizes.Header2),
    padding: 5,
  },
});

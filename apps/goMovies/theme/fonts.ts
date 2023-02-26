import {TextStyle} from 'react-native/types';

export enum FontSizes {
  Header1 = 18,
  Header2 = 22,
  Header3 = 26,
  Header4 = 28,
  header5 = 32,
}

export const FontSize = (size: FontSizes): TextStyle => {
  return {
    fontSize: size,
  };
};

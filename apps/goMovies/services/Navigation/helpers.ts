// example of navigation function if needed

import {Navigation} from './ReactNavigationNavigator';
import {Screens} from './Screens';

const navigation = new Navigation();

export const navigateToCharScreen = (): void => {
  navigation.navigateTo(Screens.CharSlelectScreen);
};

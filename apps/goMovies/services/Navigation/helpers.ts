import {Navigation} from './ReactNavigationNavigator';
import {Screens} from './Screens';

const navigation = new Navigation();

export const navigateToHomeScreen = (): void => {
  navigation.navigateTo(Screens.Home, Screens.RootStack);
};

export const navigateToLogin = (): void => {
  navigation.navigateTo(Screens.Login);
};

import {navigateToHomeScreen} from '../../services/Navigation/helpers';

interface LoginPresentable {
  toHome: () => void;
}

export const buildLoginPresenter = () => new LoginPrsenter().build();

export class LoginPrsenter {
  build(): LoginPresentable {
    return {
      toHome: () => navigateToHomeScreen(),
    };
  }
}

import {NavigationService} from './NavigationService';
import {Screens} from './Screens';
import React, {RefObject} from 'react';

export const navigationRef: RefObject<any> = React.createRef();
export class Navigation implements NavigationService {
  private navigationDispatcher?: RefObject<any> = navigationRef;

  navigateTo(screen: Screens, stackName?: string) {
    if (!stackName) {
      this.navigationDispatcher?.current.navigate(screen);
    }
    this.navigationDispatcher?.current.navigate(stackName, {screen: screen});
  }

  goBack() {
    this.navigationDispatcher?.current.goBack();
  }
}

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name} from './app.json';
import MoviesApp from './apps/goMovies/App';
import {APP} from '@env';
import {appName} from './apps/shared/types/apps';

let app: any = null;

console.log('whitch app', APP);

if (APP === appName.MoviesApp) {
  app = MoviesApp;
}

AppRegistry.registerComponent(name, () => app);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MoviesApp from './apps/goMovies/App';
import Config from 'react-native-config';

let app: any = null;

console.log('whitch app', Config.APP);

if (Config.APP === 'MOVIES') {
  app = MoviesApp;
}

AppRegistry.registerComponent(appName, () => app);

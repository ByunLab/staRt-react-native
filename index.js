import {AppRegistry} from 'react-native';
import app from './app';
import * as firebase from 'firebase';

// todo: follow up
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('staRtrn', () => app);

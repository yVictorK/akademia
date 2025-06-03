import 'react-native-get-random-values'
import Realm from 'realm'
import uuid from "uuid";
import { registerRootComponent } from 'expo';

import App from './App';
uuid.v4()
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

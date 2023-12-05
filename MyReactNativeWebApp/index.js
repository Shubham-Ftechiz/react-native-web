import { AppRegistry } from 'react-native';
import App from './App'; // Your React Native components
import { name as appName } from './app.json';

// Register the app for the web platform
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('root') });
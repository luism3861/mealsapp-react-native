import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import {useScreens} from 'react-native-screens';

useScreens();

const App = () => {
  return <MealsNavigator />;
};

export default App;

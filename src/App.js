import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';

const App = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

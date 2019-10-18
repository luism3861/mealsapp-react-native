import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import {useScreens} from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import mealsReducer from './store/reducers/meals';

useScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;

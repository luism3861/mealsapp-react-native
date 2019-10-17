import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavoritesMeals = [...state.favoriteMeals];
        updatedFavoritesMeals.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavoritesMeals,
        };
      } else {
        const meal = state.meals.find(mea => mea.id === action.mealId);
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
      }
    default:
      return state;
  }
};

export default mealsReducer;

import React from 'react';
import {useSelector} from 'react-redux';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import styled from 'styled-components';

const CategoryMealScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  if (displayedMeals.length === 0) {
    return (
      <Container>
        <Text>No meals found, maybe check your filters?</Text>
      </Container>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export default CategoryMealScreen;

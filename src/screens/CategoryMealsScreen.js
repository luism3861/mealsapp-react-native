import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = ({navigation}) => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };

  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return (
    <Container>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </Container>
  );
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
  padding: 15px;
  margin-bottom: 10px;
`;

export default CategoryMealScreen;

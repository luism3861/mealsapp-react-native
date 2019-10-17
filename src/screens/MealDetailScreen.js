import React, {useEffect, useCallback} from 'react';
import {ScrollView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';

const ListItem = props => {
  return (
    <ContainerList>
      <Text>{props.children}</Text>
    </ContainerList>
  );
};

const MealDetailScreen = ({navigation}) => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = navigation.getParam('mealId');
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId),
  );
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({isFav: currentMealIsFavorite});
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} />
      <ContainerDetails>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </ContainerDetails>
      <TextTitle>Ingredients</TextTitle>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <TextTitle>Steps</TextTitle>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

const ContainerDetails = styled.View`
  flex-direction: row;
  padding: 15px;
  justify-content: space-around;
`;

const TextTitle = styled.Text`
  font-size: 22px;
  text-align: center;
`;

const ContainerList = styled.View`
  margin-vertical: 20px;
  margin-horizontal: 20px;
  border-color: #ccc;
  border-width: 3px;
  padding: 10px;
`;

const Text = styled.Text``;

export default MealDetailScreen;

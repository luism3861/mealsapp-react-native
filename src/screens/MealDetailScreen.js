import React,{useEffect} from 'react';
import {ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

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
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  // useEffect(() => {
  //   navigation.setParams({mealTitle: selectedMeal.title});
  // },[selectedMeal])

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
  const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="star-o"
          onPress={() => {
            console.log('hola');
          }}
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

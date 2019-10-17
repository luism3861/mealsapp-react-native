import React from 'react';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import styled from 'styled-components';

const FavoritesScreen = ({navigation}) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <Container>
        <TextFavorite>No Favorite Meals Found. Start adding some</TextFavorite>
      </Container>
    );
  }
  return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextFavorite = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export default FavoritesScreen;

import React, {useState, useEffect, useCallback} from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {Switch} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';

const FilterSwitch = props => {
  return (
    <FilterContainer>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        value={props.state}
        onValueChange={props.onChange}
      />
    </FilterContainer>
  );
};

const FiltersScreen = ({navigation}) => {
  const [isGlutenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLatoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      Vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <Container>
      <Text>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGluttenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLatoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </Container>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          color="black"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          color="black"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-vertical: 15px;
`;

const Text = styled.Text`
  font-size: 22px;
  margin: 20px;
  text-align: center;
`;

export default FiltersScreen;

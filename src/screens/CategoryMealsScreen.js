import React from 'react';
import styled from 'styled-components';

const CategoryMealScreen = ({navigation}) => {
  return (
    <Container>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate({
            routeName: 'MealDetail',
          });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.pop();
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;

export default CategoryMealScreen;

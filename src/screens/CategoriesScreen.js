import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = itemData => {
    return (
      <Button
        onPress={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </Button>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const Button = styled.TouchableOpacity`
  flex: 1;
  margin: 15px;
  height: 150px;
`;

const View = styled.View``;

const Text = styled.Text``;

export default CategoriesScreen;

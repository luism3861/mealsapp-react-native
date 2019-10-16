/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <Container>
      <TouchableCmp
        style={{flex: 1}}
        onPress={props.onSelect}
        gridItem={styles.gridItem}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text>{props.title}</Text>
        </View>
      </TouchableCmp>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin: 15px;
  height: 150px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
  },
});

const Text = styled.Text`
  font-size: 22px;
  text-align: right;
`;

export default CategoryGridTile;

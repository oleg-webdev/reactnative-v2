import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItem = (props) => (
  <View style={styles.listItem}>
    <Image resizeMode='cover' source={props.placeInfo.image} style={styles.placeImage}/>
    <Text>{props.placeInfo.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5
  },
  placeImage: {
    height: 30,
    width: 30,
    marginRight: 10
  }
});

export default ListItem;
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Goalitem = props => {
  const deletegoalhandler = () => {
    props.onDeleteitem(props.id);
  };

  return (
    <Pressable android_ripple={{color: '#000'}} onPress={deletegoalhandler}>
      <View style={styles.listtext}>
        <Text style={styles.textlist}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default Goalitem;
const styles = StyleSheet.create({
  listtext: {
    backgroundColor: 'blue',
    margin: 7,
    borderRadius: 5,
    fontSize: 20,
  },
  textlist: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
  },
});

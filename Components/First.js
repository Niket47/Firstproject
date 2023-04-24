import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const First = () => {
  const [enterGoaltext, setEnterGoaltext] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputhandler = entertext => {
    setEnterGoaltext(entertext);
  };

  const addgoalhandler = () => {
    setCourseGoals(currntgoal => [...currntgoal, enterGoaltext]);
  };

  return (
    <View>
      <View style={styles.appbox}>
        <TextInput
          style={styles.input}
          placeholder="your course goal"
          onChangeText={goalInputhandler}
        />

        <Button title="add goal" onPress={addgoalhandler} />
      </View>

      <View style={styles.textbox}>
        {courseGoals.map(goals => (
          <Text style={styles.titleText} key={goals}>{goals}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    margin: 12,
  },
  textbox: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  input: {
    borderWidth: 1,
    padding: 1,
    width: '70%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'green',
  },
});
export default First;

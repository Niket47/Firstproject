import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import Goalitem from './Goalitem';
import Goalinput from './Goalinput';

const APractice = () => {
  const [visiblemodel, setVisiblemodel] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const showmodelhandler = () => {
    setVisiblemodel(true);
  };
  const closemodel = () => {
    setVisiblemodel(false);
  };

  const addgoalhandler = entergoaltext => {
    // setCourseGoals([...courseGoals, entergoaltext]);
    setCourseGoals(currntgoals => [
      ...currntgoals,
      {text: entergoaltext, id: Math.random().toString()},
    ]);
    console.log(courseGoals);
    setVisiblemodel(false);
  };

  const deletegoalhandler = id => {
    setCourseGoals(currntgoals => {
      return currntgoals.filter(goal => goal.id !== id);
    });
  };
  return (
    <View>
      {/* <View style={styles.appbox}>
        <TextInput
          style={styles.input}
          placeholder="your course goal"
          onChangeText={goalinputhandler}
        />

        <Button title="add goal" onPress={addgoalhandler} />
      </View> */}
      <Button title="click to add goal" onPress={showmodelhandler} />

      <Goalinput
        visible={visiblemodel}
        onAddgoal={addgoalhandler}
        close={closemodel}
      />
      <View style={styles.textbox}>
        {/* <ScrollView>
          {courseGoals.map(goals => (
            <View style={styles.listtext} key={goals}>
              <Text style={styles.textlist}>{goals}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <Goalitem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteitem={deletegoalhandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'green',
  },
});
export default APractice;

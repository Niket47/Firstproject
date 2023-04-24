import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Modal,
  StyleSheet,
} from 'react-native';

const Goalinput = props => {
  const [entergoaltext, setEntergoaltext] = useState();

  const goalinputhandler = entertext => {
    setEntergoaltext(entertext);
  };
  // {
  //   if (entergoaltext == '') {
  //     console.warn('object');
  //   } else {
  //   }
  // }
  const addgoalhandler = () => {
    props.onAddgoal(entergoaltext);
    setEntergoaltext('');
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.appbox}>
        <Image
          style={styles.image}
          source={require('../assets/icon/text.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="your course goal"
          onChangeText={goalinputhandler}
          value={entergoaltext}
        />
        <View style={styles.btnbox}>
          <Button title="add goal" onPress={addgoalhandler} color="green" />
          <Button title="close model" onPress={props.close} color="#f31282" />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  appbox: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 15,
  },
  btnbox: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textbox: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  input: {
    borderWidth: 1,
    padding: 1,
    marginTop: 15,
    width: '70%',
  },
  image: {
    height: 100,
    width: 100,
  },
});
export default Goalinput;

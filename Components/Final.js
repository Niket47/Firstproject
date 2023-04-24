import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

const Final = () => {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [note, setNote] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <TextInput style={styles.input} placeholder="Title" />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
        />
        <TextInput style={styles.input} placeholder="Date" />
        <TextInput style={styles.input} placeholder="Note" />
      </View>

      <View style={styles.btnbox}>
        <Button title="Reset" color="#00bfff" />
        <Button title="Submit" color="#1e90ff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingTop: 10,
  },
  btnbox: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textbox: {
    backgroundColor: '#faebd7',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4682b4',
  },
});

export default Final;

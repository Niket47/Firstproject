import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const Third = () => {
  const Separator = () => <View style={styles.separator} />;

  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [useripnut, setUserinput] = useState([]);
  const onnameChanged = name => {
    SetName(name);
  };
  const onemailChanged = email => {
    SetEmail(email);
  };
  const addData = () => {
    setUserinput([
      ...useripnut,
      {
        name,
        email,
      },
    ]);
    SetEmail('');
    SetName('');
  };
  console.log(useripnut);
  const resetData = () => {
    SetEmail('');
    SetName('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <TextInput
          onChangeText={onnameChanged}
          style={styles.input}
          placeholder="name"
          value={name}
        />
        <TextInput
          onChangeText={onemailChanged}
          style={styles.input}
          placeholder="email"
          value={email}
        />
      </View>

      <View style={styles.bntbox}>
        <Button title="Submit" onPress={addData} />
        <Button title="Reset" onPress={resetData} color="#f194ff" />
      </View>

      <Separator />

      <View>
        {useripnut.map((data, index) => {
          return (
            <View style={styles.textbox}>
              <Text style={styles.titleText}>{data.name}</Text>
              <Text style={styles.titleText}>{data.email}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 26,
  },
  titleText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Cochin',
    textAlign: 'center',
    backgroundColor: 'aliceblue',
  },
  separator: {
    marginVertical: 18,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bntbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputbox: {
    backgroundColor: 'oldlace',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Third;

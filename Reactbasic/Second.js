import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Second = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      firstName: 'kia',
      lastName: 'Doe',
      age: 15,
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Rembo',
      age: 50,
    },
  ]);
  return (
    <View>
      <Text>
        {task.map((list, id) => (
          <Text key={id}>
            {list.firstName}
            {list.lastName}
            {list.age}
          </Text>
        ))}
      </Text>
    </View>
  );
};

export default Second;

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const RFirst = () => {
  const [count, setCount] = useState(0);

  const onPressaddMore = () => {
    setCount(count + 1);
  };
  const onPresssubMore = () => {
    setCount(count - 1);
  };
  const onPressReset = () => {
    setCount(0);
  };

  return (
    <View>
      <Text style={styles.titleText}>{count}</Text>
      <Button onPress={onPressaddMore} title="add More" />
      <Button onPress={onPresssubMore} title="sub More" />
      <Button onPress={onPressReset} title="reset" />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RFirst;

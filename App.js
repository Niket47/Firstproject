import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'react-native';
import First from './Components/First';
import RFirst from './Reactbasic/RFirst';
import Second from './Reactbasic/Second';
import Third from './Reactbasic/Third';
import Final from './Components/Final';
import APractice from './Course/APractice';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View>
        {/* <First /> */}
        {/* <RFirst /> */}
        {/* <Second /> */}
        {/* <Third/> */}
        {/* <Final/> */}
        <APractice />
      </View>
    </>
  );
};

export default App;

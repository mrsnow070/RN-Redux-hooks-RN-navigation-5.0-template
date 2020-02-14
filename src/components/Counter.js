import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default ({render, navigation, route}) => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const changeCoun = bool => {
    bool ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  const styles = {flex: 1, justifyContent: 'center', alignItems: 'center'};

  return (
    <View style={styles}>
      <Button title="toggle" onPress={() => setToggle(!toggle)} />

      {toggle ? null : (
        <>
          <Text>{counter}</Text>
          <Button title="increase" onPress={() => changeCoun(true)} />
          <Button title="decrease" onPress={() => changeCoun(false)} />
        </>
      )}
    </View>
  );
};

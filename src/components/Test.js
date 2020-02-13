import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCount} from '../redux/reducer/testReducer';
// import {subFromCount} from '../redux/actions/testActions';
// import {testActions} from '../redux/actions/';
import {addToCount, subFromCount} from '../redux/actions/testActions';
import styles from '../styles/testStyles';

const Test = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => getCount(state));

  // console.log(typeof subFromCount);
  console.log(addToCount);
  return (
    <View style={styles.test}>
      <Text>{count}</Text>
      <Button title="INC" onPress={() => dispatch(addToCount())} />
      <Button title="DEC" onPress={() => dispatch(subFromCount())} />
    </View>
  );
};

export default Test;

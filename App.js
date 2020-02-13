import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {StatusBar} from 'react-native';
import Test from './src/components/Test';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Test />
    </Provider>
  );
};

export default App;

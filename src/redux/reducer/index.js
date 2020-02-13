import {combineReducers} from 'redux';
import {DESTROY_SESSION} from '../../const';

import testReducer, {moduleName as testModule} from './testReducer';

const AppReducer = combineReducers({
  [testModule]: testReducer,
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined;
    const {navigation} = action.payload;
    navigation.navigate('Loading', {
      error: {status: true, message: 'Need to reload'},
    });
  }

  return AppReducer(state, action);
};

export default rootReducer;

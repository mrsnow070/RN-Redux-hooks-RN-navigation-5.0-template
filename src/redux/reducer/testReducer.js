export const moduleName = 'test';
export const COUNT_ADD = `${moduleName}/COUNT_ADD`;
export const COUNT_SUB = `${moduleName}/COUNT_SUB`;

const initState = {
  count: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case COUNT_ADD:
      return {...state, count: state.count + 1};

    case COUNT_SUB:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

//selectors
export const getState = state => state[moduleName];
export const getCount = state => getState(state).count;

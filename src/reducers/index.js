import { combineReducers } from 'redux';

import Registers from './reducerRegisters';

const rootReducer = combineReducers({
  registers: Registers
});

export default rootReducer;
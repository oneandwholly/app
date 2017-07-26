import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  profile: profileReducer
});

export default rootReducer;

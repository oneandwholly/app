import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { cardReducer } from './modules/card';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  profile: profileReducer,
  card: cardReducer
});

export default rootReducer;

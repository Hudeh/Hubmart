import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import authReducer from './authReducer/reducer';
import cartReducer from './cartReducer/reducer';
import allProductReducer from './productReducer/reducer';
import headerReducer from './headerReducer/reducer'
import {LOGOUT_SUCCESS} from '../actions/auth/types'
const appReducer = combineReducers({
    form: formReducer,
    authReducer,
    headerReducer,
    allProductReducer,
    cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
}
const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
      state = undefined;
    }
    return appReducer(state, action);
  };
  
export default persistReducer(persistConfig, rootReducer)
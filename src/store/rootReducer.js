import {combineReducers} from 'redux';
import modalReducer from '../modals/modalReducer';
import authReducer from './authStore/authReducer';
import fightReducer from './fightStore/fightReducer';
import navReducer from './navStore/navReducer';


export const rootReducer = combineReducers({
    fight: fightReducer,
    modals: modalReducer,
    nav: navReducer,
    auth: authReducer
})
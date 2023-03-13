import {applyMiddleware, createStore} from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";


const initialState = {};

const middleware = [thunk];

export function configureStore(){
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
        
        
        );
}


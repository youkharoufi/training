
import { CREATE_TECHNICS, DELETE_TECHNICS, GET_TECHNICS, UPDATE_TECHNICS } from "./fightConstants"

const initialState = {
    technics:[]
}

export default function fightReducer(state=initialState, {type, payload}){

    switch(type){
        case GET_TECHNICS: 
        return {
            ...state,
            technics:payload
        };

        case CREATE_TECHNICS:
            return {
                ...state,
                technics:[...state.technics, payload]
            };

        case UPDATE_TECHNICS:
            return {
                ...state,
                technics:[...state.technics.filter(e => e.id !== payload.id), payload]
            };
        
        case DELETE_TECHNICS:
            return {
                ...state,
                technics:[...state.technics.filter(o=>o.id !== payload.id)]
            };
        
        default:
            return state;
    }
}
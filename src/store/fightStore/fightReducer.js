
import { CREATE_TECHNICS, DELETE_TECHNICS, GET_TECHNIC, GET_TECHNICS, UPDATE_TECHNICS } from "./fightConstants"


const initialState = {
    technics:[],
    currentTechnicId:'',
    currentTechnic:{}
}

export default function fightReducer(state=initialState, {type, payload}){

    switch(type){
        case GET_TECHNICS: 
        return {
            ...state,
            technics:payload
        };

        case GET_TECHNIC:
            return{
                ...state,
                technic:payload
            }

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
                technics:[...state.technics.filter(o=>o.id !== payload)],
                currentTechnicId:payload
            };
        
        default:
            return state;
    }
}
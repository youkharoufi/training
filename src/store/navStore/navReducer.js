import { HIDE_NAV, SHOW_NAV } from "./navConstants"


const initialState = {
    showHide:true,
}



export default function navReducer(state = initialState, {type, payload}){

    switch(type){

        case SHOW_NAV:

            return {
                ...state,
                showHide:true
            };

        case HIDE_NAV:

            return {
                ...state,
                showHide:false
            };

        default:
            return state;
    }
}
import { SIGN_IN, SIGN_OUT } from "./authConstants";



const initialState={
    authenticated:false, 
    currentUser:{
        email:'y@y.com',
        password:'1234'
    }
}


export default function authReducer(state = initialState, {type, payload}){

    switch(type){

        case SIGN_IN:
            return {
                ...state, 
                authenticated:true,
                currentUser:{
                    email:payload.email,
                    password:payload.password
                }
            };
        
        case SIGN_OUT:
            return{
                ...state,
                authenticated:false
            };

        default: 
        return state;
    }
}
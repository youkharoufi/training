import { SIGN_IN, SIGN_OUT } from "./authConstants";



export function signin(payload){
    return{
        type:SIGN_IN,
        payload
    }
}

export function signout(){
    return{
        type:SIGN_OUT,
        
    }
}
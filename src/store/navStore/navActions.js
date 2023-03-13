import { HIDE_NAV, SHOW_NAV } from "./navConstants";

export function showNav(){
    return {
        type:SHOW_NAV,
    }
}

export function hideNav(){
    return {
        type:HIDE_NAV,
    }
}
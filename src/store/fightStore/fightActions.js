import { GET_TECHNICS, CREATE_TECHNICS, UPDATE_TECHNICS, DELETE_TECHNICS} from "./fightConstants";
import FightService from "./fightService";



export const getTechnics = () => async (dispatch) => {
    try{
        const res = await FightService.getAll();

        dispatch({
            type:GET_TECHNICS,
            payload:res.data
        })

    }catch(err){
        console.log(err)
    }
}

export const createTechnic = () => async (dispatch) => {
    try{
        const res = FightService.create();

        dispatch({
            type:CREATE_TECHNICS,
            payload:res.data
        })
    }catch(err){
        console.log(err);
    }
}

export const editTechnic = (id, data) => async (dispatch) => {
    try{
        const res = await FightService.update(id, data)

        dispatch({
            type:UPDATE_TECHNICS,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}

export const deleteTechnic = (id) => async (dispatch) => {
    try{
        const res = await FightService.remove(id);

        dispatch({
            type:DELETE_TECHNICS,
            payload:res.data
        })

    }catch(err){
        console.log(err)
    }
}




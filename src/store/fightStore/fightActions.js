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

export const getTechnic = (id) => async (dispatch) => {
    try{
        const res = await FightService.getOne(id);

        dispatch({
            type:GET_TECHNICS,
            payload:res.data
        })

    }catch(err){
        console.log(err)
    }
}

export const createTechnic = (data) => async (dispatch) => {
    try{
        const res = await FightService.create(data);

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
        await FightService.remove(id);

        dispatch({
            type:DELETE_TECHNICS,
            payload:id
        })

    }catch(err){
        console.log(err)
    }
}




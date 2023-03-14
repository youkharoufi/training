import http from '../global-store/http-common';

const getAll = () =>{
    return http.get('/technics');
}

const getOne = (id) =>{
    return http.get(`/technics/${id}`)
}

const update = (id, data) => {
    return http.put(`/technics/${id}`, data)
}

const create = (data) =>{
    return http.post('/technics', data)
}

const remove = (id) => {
    return http.delete(`/technics/${id}`)
}

const FightService = {
    getAll,
    update,
    create,
    remove
}

export default FightService;
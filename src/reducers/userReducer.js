import uuid from 'uuid/dist/v1';
import {GET_USERS,DELETE_USER,ADD_USER} from '../actions/types'; 
 
const initialState = {
    users: [
        {id: uuid(),name: 'Michał', surname: 'Kozak', birthday: '1989-05-18'}
    ]
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_USERS:
            return {
                ...state
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user=>user.id!==action.payload)
            };
        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        default:
            return state
    };
};  
import { USER_LIST, NEW_USER, DELETE_USER,GET_USER,UPDATE_USER } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    id: {}
}

export default (state = initialState, action) => {
    switch (action.type) { 
        case USER_LIST:
            return {
                ...state,
                items: action.payload
            }
        
        case NEW_USER:
            return {
                ...state,
                item: action.payload
            }    
        case DELETE_USER:
            return {
                ...state,
                id: action.payload
            }    
        case GET_USER:
            return {
                ...state,
                item: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                item: action.payload
            }
        

        default:
            return state;    
    }
 }
import { USER_LIST, NEW_USER, DELETE_USER ,GET_USER,UPDATE_USER} from '../actions/types';
import axios from 'axios';

export const getUsers = () => dispatch => { 
    axios.get('http://localhost:9020/users')
        .then(users => dispatch({
        type: USER_LIST,
        payload: users.data
    }));
}
export const createUser = (userData) => dispatch => { 
    axios.post('http://localhost:9020/users',userData)
        .then(user => dispatch({
        type: NEW_USER,
        payload: user.data
    }));
}
export const deleteUser = (id) => dispatch => {
    axios.delete('http://localhost:9020/users/' + id + '')
        .then(dispatch({
            type: DELETE_USER,
            payload:id
    }));

}
export const updateUser = (userData, id) => dispatch => {
    axios.put('http://localhost:9020/users/' + id + '', userData)
        .then(user => dispatch({
            type: UPDATE_USER,
            payload: user.data    
    }));

}
export const getUser = (id) => dispatch => {
    axios.get('http://localhost:9020/users/' + id + ''
    ).then(user => dispatch({
        type: GET_USER,
        payload: user.data
    }));

}
import axios from 'axios';
import { returnErrors } from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
} from './types';

// Check Token and Load User
export const loadUser = () => (dispatch, getState) => {
    // Set the user loading
    // Dispatch an action with the type = USER_LOADING
    dispatch({ type: USER_LOADING });

    // Get the token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // If it is a token, add it to the header
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('/api/auth/user', config).then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    })
};
import { CREATE_MESSAGE, GET_ERRORS } from './types';

// Create a Message
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

// Create an action to return Errors
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    };
};
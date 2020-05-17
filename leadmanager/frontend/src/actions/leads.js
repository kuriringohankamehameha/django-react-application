// Any actions go here: For example, HTTP Requests
import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { tokenConfig } from './auth';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';

// Making an async request using axios
export const getLeads = () => (dispatch, getState) => {
    axios.get('/api/leads/', tokenConfig(getState))
    .then(response => {
        dispatch({
            // Pass an object with type of GET_LEADS
            type: GET_LEADS,
            // And the payload data
            payload: response.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteLead = (id) => (dispatch, getState) => {
    axios.delete(`/api/leads/${id}`, tokenConfig(getState))
    .then(response => {
        dispatch(createMessage({
            deleteLead: "Lead Deleted!"
        }));
        dispatch({
            // Pass an object with type of GET_LEADS
            type: DELETE_LEAD,
            // And the payload data
            payload: id
        });
    }).catch(err => console.log(err));
}

export const addLead = (lead) => (dispatch, getState) => {
    axios.post("/api/leads/", lead, tokenConfig(getState))
    .then(response => {
        // Dispatch the action directly
        dispatch(createMessage({
            addLead: "Lead Added!"
        }));
        dispatch({
            // Pass an object with type of GET_LEADS
            type: ADD_LEAD,
            // And the payload data
            payload: response.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
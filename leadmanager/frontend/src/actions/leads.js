// Any actions go here: For example, HTTP Requests
import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// Making an async request using axios
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
    .then(response => {
        dispatch({
            // Pass an object with type of GET_LEADS
            type: GET_LEADS,
            // And the payload data
            payload: response.data
        });
    }).catch(err => console.log(err));
}

export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}`)
    .then(response => {
        dispatch({
            // Pass an object with type of GET_LEADS
            type: DELETE_LEAD,
            // And the payload data
            payload: id
        });
    }).catch(err => console.log(err));
}

export const addLead = (lead) => dispatch => {
    axios.post("/api/leads/", lead)
    .then(response => {
        dispatch({
            // Pass an object with type of GET_LEADS
            type: ADD_LEAD,
            // And the payload data
            payload: response.data
        });
    }).catch(err => console.log(err));
}
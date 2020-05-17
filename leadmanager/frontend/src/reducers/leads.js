import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js';

// Create the initial state variable
const initialState = {
    leads: []
};

// Dispatch an action to the reducer
// The action object also has the payload,
// containing the leads information
export default function(state=initialState, action) {
    // Evaluate the action type (GET, UPDATE or DELETE)
    switch(action.type) {
        case GET_LEADS:
            return {
                ...state,
                // Fill the leads with those sent
                // by the backend
                leads: action.payload
            };
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }
        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload]
            }
        default:
            return state;
    }
}
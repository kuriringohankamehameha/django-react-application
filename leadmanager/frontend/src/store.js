import { createStore, applyMiddleware } from 'redux';
import { composeWithDevtools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers';

// Initial state of the redux store
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // Sample
    applyMiddleware(...middleware)
);

export default store;
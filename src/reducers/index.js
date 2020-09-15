import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import data from './data';

const rootReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state = state + 1;

        case 'DECREMENT':
            return state = state -1;
        default:
            return state;
    }
};

export default rootReducer;

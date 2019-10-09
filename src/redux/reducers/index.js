import { combineReducers } from 'redux';
import customersReducers from './customers.reducers';

export default combineReducers({
    customers: customersReducers
});
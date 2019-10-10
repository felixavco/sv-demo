import { combineReducers } from 'redux';
import customersReducers from './customers.reducers';
import layoutReducers from './layout.reducer'

export default combineReducers({
    customers: customersReducers,
    layout: layoutReducers
});
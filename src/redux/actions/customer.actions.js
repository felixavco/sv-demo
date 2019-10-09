import axios from 'axios';
import { url } from '../../utils';
import { GET_ERRORS, GET_CUSTOMERS, GET_SINGLE_CUSTOMER } from '../types';


export const getCustomers = () => dispatch => {
    axios.get(url('/users'))
        .then(res => {
            dispatch({
                type: GET_CUSTOMERS,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error
            })
        })
}

export const getSingleCustomer = id => dispatch => {
    axios.get(url('/users/' + id))
        .then(res => {
            dispatch({
                type: GET_SINGLE_CUSTOMER,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error
            })
        })
}


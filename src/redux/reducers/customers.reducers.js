
import { GET_CUSTOMERS, GET_SINGLE_CUSTOMER } from '../types';

const initialState = {
    list: [],
    single: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_CUSTOMERS:
            return { ...state, list: action.payload }

        case GET_SINGLE_CUSTOMER:
            return { ...state, single: action.payload }

        default:
            return state
    }

}
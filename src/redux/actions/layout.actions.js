
import { CHANGE_SEARCH_MODAL_STATE } from '../types';


export const changeSeachModalState = (state) => dispatch => {
    dispatch({
        type: CHANGE_SEARCH_MODAL_STATE, 
        payload: state
    })
}


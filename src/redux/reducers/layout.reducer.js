import { CHANGE_SEARCH_MODAL_STATE } from '../types';

const initialState = {
    searchModalState: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_SEARCH_MODAL_STATE:
            return { ...state, searchModalState: action.payload }

        default:
            return state
    }

}
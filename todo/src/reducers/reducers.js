import { SET_ITEM, SET_COMPLETED, SET_ID } from '../actions/actions';

const reducer = (state, action) => {
    switch(action.type) {
        case(SET_ITEM):
            return({...state, item: action.payload});
        case(SET_COMPLETED):
            return({...state, completed: action.payload});
        case(SET_ID):
            return({...state, id: action.payload});
        default:
            return(state);
    }
}

export default reducer;
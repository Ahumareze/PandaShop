import * as actionTypes from '../actions/actionTypes';

const initialState = {
    collection: null
}

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SETCOLLECTION:
            return {...state, collection: action.value};
    }
    return state
};

export default reducer;
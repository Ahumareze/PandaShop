import * as actionTypes from '../actions/actionTypes';

const initialState = {
    collection: null,
    cart: []
}

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SETCOLLECTION:
            return {...state, collection: action.value};
        case actionTypes.SETCART:
            return{...state, cart: action.value}
    }
    return state
};

export default reducer;
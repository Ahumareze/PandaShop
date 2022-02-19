import * as actionTypes from './actionTypes';

export const setCollection = (data: any) => {
    return(dispatch: any) => {
        dispatch(setCollectionState(data))
    }      
}

const setCollectionState = (e: any) => {
    return{
        type: actionTypes.SETCOLLECTION,
        value: e
    }
}
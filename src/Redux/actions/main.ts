import * as actionTypes from './actionTypes';

export const setCollection = (data: any) => {
    return(dispatch: any) => {
        dispatch(setCollectionState(data))
    }      
}

export const init = () => {
    return(dispatch: any) => {
        const cart = localStorage.getItem('@pandaShop');
        if(cart){
            const newCart = JSON.parse(cart)
            dispatch(setCart(newCart));
        }
    }
}

export const setCart = (e: any) => {
    return{
        type: actionTypes.SETCART,
        value: e
    }
}

const setCollectionState = (e: any) => {
    return{
        type: actionTypes.SETCOLLECTION,
        value: e
    }
}
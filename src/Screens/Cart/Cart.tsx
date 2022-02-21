import React from 'react';
import './Cart.css';

import img from '../../Assets/Images/img3.jpg';

//Imported Components
import CartHeader from './Components/CartHeader';
import Item from './Components/Item';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';

function Cart(props: any) {

    const view = (
        <>
            {props.cart.map((i: any, idx: any) => <Item img={i.img} nameTag={i.nameTag} price={i.price} size={i.size} key={idx} value={idx} /> )}
            <div className='ProceedToCheckout' onClick={() => props.history.push('/checkout')} >Proceed to checkout</div>
        </>
    )

    const clear = () => {
        localStorage.setItem('@pandaShop', '[]');
        props.setCart();
    }

    return (
        <div className='CartPage'>
            <CartHeader props={props} clear={() => clear()} />
            <section>
                {props.cart.length !== 0 && view}
            </section>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        setCart: () => dispatch(actions.setCart([]))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
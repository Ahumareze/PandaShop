import React, { useEffect } from 'react';
import './HomePage.css';

import * as actions from '../../Redux/actions';

//Imported packeges
import { connect } from 'react-redux';
import { Header, SideDrawer } from '../../Components';
import Collections from './components/Collections';
import Item from './components/Item';
import NavBar from '../../Components/NavBar/NavBar';

//Imported Images
import img1 from '../../Assets/Images/img1.jpg';
import img2 from '../../Assets/Images/img2.jpg';
import img3 from '../../Assets/Images/img3.jpg';

function HomePage(props: any) {

    const onSelect = (e: any) => {
        props.setCollection(e);
        props.history.push('/collection')
    }

    return (
        <>
            <div className='HomePage'>
                <Header prop={props} num={props.cart} />
                <section>
                    <Collections />
                    <Item img={img1} title='New Arrivials' onSelect={(e) => onSelect(e)} />
                    <Item img={img2} title='Hottest' onSelect={(e) => onSelect(e)} />
                    <Item img={img3} title='Flash Sale' onSelect={(e) => onSelect(e)} />
                </section>
            </div>
            {/* <SideDrawer /> */}
        </>
    );
}

const mapStateToProps = (state: any) => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        setCollection: (e: string) => dispatch(actions.setCollection(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
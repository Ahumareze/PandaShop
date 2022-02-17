import React, { useEffect } from 'react';
import './HomePage.css';

//Imported packeges
import { connect } from 'react-redux';
import { Header } from '../../Components';
import Collections from './components/Collections';
import Item from './components/Item';
import NavBar from '../../Components/NavBar/NavBar';

function HomePage(props: any) {

    return (
        <div className='HomePage'>
            <Header />
            <section>
                <Collections />
                <Item />
                <Item />
                <Item />
            </section>
            <NavBar />
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return{
        
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        // fetchData: () => dispatch(actions.fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
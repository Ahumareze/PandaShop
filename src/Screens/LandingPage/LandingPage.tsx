import React from 'react';
import './LandingPage.css';

//Imported packages
import { connect } from 'react-redux';
import Canva from './components/Canva';

function LandingPage(props: any) {

    return (
        <div className='LandingPage'>
            <Canva />
            <section>
                <div className='Large_logo'></div>
                <div className="Bottom_button"></div>
            </section>
        </div>
    );
}


const mapDispatchToProps = (dispatch: any) => {
    return{
        
    }
}

export default connect(null, mapDispatchToProps)(LandingPage);
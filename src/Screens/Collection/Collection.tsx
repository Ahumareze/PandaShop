import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../../Components';
import './Collection.css';

function Collection(props: any) {
    return (
        <div className='CollectionsPage' >
            <Header />
            <section>
                <p className="pageTitle">{props.collection}</p>
                <div className="pageTitleLine"></div>
            </section>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return{
        collection: state.collection
    }
}

export default connect(mapStateToProps)(Collection);
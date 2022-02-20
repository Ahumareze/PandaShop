import React from 'react';
import './Collection.css';

import { connect } from 'react-redux';
import img from '../../Assets/Images/img1.jpg';

import { Header, Item, SelectedItem } from '../../Components';

function Collection(props: any) {
    return (
        <>
            <div className='CollectionsPage' >
                <Header />
                <section>
                    <p className="pageTitle">{props.collection}</p>
                    <div className="pageTitleLine"></div>
                    <div className="ItemContainer">
                        <Item nameTag='Gucci T-shirt' price={200} img={img} />
                    </div>
                </section>
            </div>
            <SelectedItem />
        </>
    );
}

const mapStateToProps = (state: any) => {
    return{
        collection: state.collection
    }
}

export default connect(mapStateToProps)(Collection);
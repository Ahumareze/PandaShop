import React, {useState} from 'react';
import './Collection.css';

import { connect } from 'react-redux';

import img from '../../Assets/Images/img1.jpg';
import img2 from '../../Assets/Images/img2.jpg';
import img3 from '../../Assets/Images/img3.jpg';

import { Header, Item, SelectedItem } from '../../Components';
import * as actions from '../../Redux/actions';

function Collection(props: any) {
    const [selected, setSelected] = useState<any>(null);

    return (
        <>
            <div className='CollectionsPage' >
                <Header prop={props} num={props.cart} />
                <section>
                    <p className="pageTitle">{props.collection}</p>
                    <div className="pageTitleLine"></div>
                    <div className="ItemContainer">
                        <Item nameTag='Black Hat' price={200} img={img} onSelect={(e) => setSelected(e)} />
                        <Item nameTag='Sleevless' price={300} img={img2} onSelect={(e) => setSelected(e)} />
                        <Item nameTag='Gucci scarf' price={400} img={img3} onSelect={(e) => setSelected(e)} />
                    </div>
                </section>
            </div>
            {selected && <SelectedItem data={selected} back={() => setSelected(null)} cart={props.cart} setCart={(e) => props.setCart(e)} />}
        </>
    );
}

const mapStateToProps = (state: any) => {
    return{
        collection: state.collection,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        setCart: (e: any) => dispatch(actions.setCart(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
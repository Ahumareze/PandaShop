import React, { useEffect } from 'react';
import './App.css';

//Imported packages
import {Redirect, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

//Imported components
import {HomePage, Collection, Cart, Checkout} from './Screens/index';
import * as actions from './Redux/actions';

function App(props:any) {

  useEffect(() => {
    props.init();
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path='/collection' component={Collection}/> 
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/' component={HomePage} exact />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    init: () => dispatch(actions.init())
  }
}

export default connect(null, mapDispatchToProps)(App);
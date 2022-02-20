import React from 'react';
import './App.css';

//Imported packages
import {Redirect, Route, Switch} from 'react-router-dom';

//Imported components
import {HomePage, Collection, Cart} from './Screens/index';

function App(props:any) {
  return (
    <div className="App">
      <Switch>
        <Route path='/collection' component={Collection}/> 
        <Route path='/cart' component={Cart} />
        <Route path='/' component={HomePage} exact />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
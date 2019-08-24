import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import HomepageTwo from './components/HomepageTwo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Switch>
     <Route exact path="/" component={Homepage} />
     <Route path="/create-store" component={HomepageTwo} />
     
   </Switch>
      </React.Fragment>
    )
  }
}


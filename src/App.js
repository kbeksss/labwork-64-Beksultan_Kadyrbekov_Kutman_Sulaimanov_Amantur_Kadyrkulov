import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Add from "./containers/Add/Add";
import Home from "./containers/Home/Home";

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/add' component={Add}/>
      </Switch>
    </BrowserRouter>

);

export default App;

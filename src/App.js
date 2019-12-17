import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Blog from "./containers/Blog/Blog";
import Add from "./containers/Add/Add";

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Blog}/>
        <Route path='/add' component={Add}/>
      </Switch>
    </BrowserRouter>

);

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Add from "./containers/Add/Add";
import Home from "./containers/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Post from "./components/Post/Post";

const App = () => (
    <BrowserRouter>
        <Navigation/>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/posts/add' component={Add}/>
        <Route path='/posts/:id' component={Post}/>
      </Switch>
    </BrowserRouter>

);

export default App;

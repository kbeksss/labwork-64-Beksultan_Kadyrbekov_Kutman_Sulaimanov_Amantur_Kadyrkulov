import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Add from "./containers/Add/Add";
import Home from "./containers/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Post from "./components/Post/Post";
import Edit from "./components/Post/Edit/Edit";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";

const App = () => (
    <BrowserRouter>
        <Navigation/>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/posts/add' component={Add}/>
        <Route path='/posts/:id' exact component={Post}/>
        <Route path='/posts/:id/edit' component={Edit}/>
        <Route path='/about' component={About}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </BrowserRouter>

);

export default App;

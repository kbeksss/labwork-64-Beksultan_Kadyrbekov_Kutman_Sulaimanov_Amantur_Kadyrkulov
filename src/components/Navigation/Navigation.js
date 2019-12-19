import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';
class Navigation extends Component {
    render() {
        return (
            <nav className='Navigation'>
                <h1>My Blog</h1>
                <ul className='Links'>
                    <li><NavLink className='Link' exact to='/'>Home</NavLink></li>
                    <li><NavLink className='Link' to='/posts/add'>Add</NavLink></li>
                    <li><NavLink className='Link' to='/about'>About</NavLink></li>
                    <li><NavLink className='Link' to='/contacts'>Contacts</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
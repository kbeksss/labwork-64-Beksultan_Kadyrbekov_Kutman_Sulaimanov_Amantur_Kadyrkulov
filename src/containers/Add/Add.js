import React, {Component} from 'react';
import './Add.css';

import Navigation from "../../components/Navigation/Navigation";
import Form from "../../components/Form/Form";
import axiosBlog from "../../axios-blog";


class Add extends Component{
    state = {
        title: '',
        text: '',
    };
    changeVal = event => this.setState({[event.target.name]: event.target.value});
    postForm = async event => {
        if(event){
            event.preventDefault();
        }
        const message = {
            title: this.state.title,
            text: this.state.text,
        };
        try {
            await axiosBlog.post('/blog.json', message);
            this.setState({title: '', text: ''});
        } catch (e) {
            console.error('Error occurred with network', e);
        }
    };
    postOnEnter = event => {
        if(event.shiftKey === false && event.keyCode === 13){
            this.postForm();
        }
    };
    render() {
        return (
            <div className='Add'>
                <Navigation/>
                <Form
                    title={this.state.title}
                    text={this.state.text}
                    changeValue={(event) => this.changeVal(event)}
                    submitForm={(event) => this.postForm(event)}
                    onEnter={(event) => this.postOnEnter(event)}
                />
            </div>
        );
    }
}


export default Add;
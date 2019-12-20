import React, {Component} from 'react';
import './Add.css';

import Form from "../../components/Form/Form";
import axiosBlog from "../../axios-blog";
import Spinner from "../../components/UI/Spinner/Spinner";


class Add extends Component{
    state = {
        title: '',
        text: '',
        loading: false,
    };
    changeVal = event => this.setState({[event.target.name]: event.target.value});
    postForm = async event => {
        const date = new Date();
        const currentDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}  at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        if(event){
            event.preventDefault();
        }
        const message = {
            title: this.state.title,
            text: this.state.text,
            date: currentDate,
        };
        this.setState({loading: true});
        const post = await axiosBlog.post('/blog.json', message);
        if(post.statusText === 'OK'){
            this.setState({title: '', text: '', loading: false});
        } else {
            this.setState({loading: false});
            alert('Your post wasn\'t sent')
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
                {!this.state.loading ? (
                    <Form
                        title={this.state.title}
                        text={this.state.text}
                        changeValue={(event) => this.changeVal(event)}
                        submitForm={(event) => this.postForm(event)}
                        onEnter={(event) => this.postOnEnter(event)}
                    />
                ) : <Spinner/>}
            </div>
        );
    }
}


export default Add;
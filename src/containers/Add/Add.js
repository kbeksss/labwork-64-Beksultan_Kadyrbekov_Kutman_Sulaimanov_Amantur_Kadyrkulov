import React, {Component} from 'react';
import Navigation from "../../components/Navigation/Navigation";
import Form from "../../components/Form/Form";

class Add extends Component{
    state = {
        title: '',
        text: '',
    };
    changeVal = event => this.setState({[event.target.name]: event.target.value});
    postForm = event => {
        event.preventDefault();

    };
    render() {
        return (
            <div className='Add'>
                <Navigation/>
                <Form
                    changeValue={(event) => this.changeVal(event)}
                    submitForm={(event) => this.postForm(event)}
                />
            </div>
        );
    }
}


export default Add;
import React, {Component} from 'react';
import './Form.css';

import Button from "../UI/Button/Button";

class Form extends Component {
    render() {
        return (
            <div className='Form'>
                <form action="#" onSubmit={this.props.submitForm}>
                    <h3>Add new post</h3>
                    <div className='Title'>
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' onChange={this.props.changeValue} name='title' value={this.props.title}/>
                    </div>
                    <div className='Description'>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" onChange={this.props.changeValue} name='text' cols="10" rows="5" value={this.props.text}/>
                    </div>
                    <Button type='submit'>Save</Button>
                </form>
            </div>
        );
    }
}

export default Form;
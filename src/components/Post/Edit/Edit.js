import React, {Component} from 'react';
import './Edit.css';
import axiosBlog from "../../../axios-blog";
import Form from "../../Form/Form";

class Edit extends Component {
    state = {
        title: '',
        text: '',
        loading: false,
    };
    async componentDidMount() {
        this.setState({loading: true});
        const response = await axiosBlog.get('blog/' + this.props.match.params.id + '.json');
        if(response.data){
            this.setState({title: response.data.title, text: response.data.text ,loading: false});
        }
    }
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
        const put = await axiosBlog.put('blog/' + this.props.match.params.id + '.json', message);
        if(put.statusText === 'OK'){
            this.setState({title: '', text: '', loading: false});
            this.props.history.replace('/');
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
            <div className='Edit'>
                <h2>Edit</h2>
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

export default Edit;
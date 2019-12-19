import React, {Component} from 'react';
import './Post.css';
import Button from "../UI/Button/Button";
import axiosBlog from "../../axios-blog";
class Post extends Component {
    state = {
        post: {},
    };
    async componentDidMount() {
        console.log(this.props.match.params.id);
        const response = await axiosBlog.get('blog/' + this.props.match.params.id + '.json');
        this.setState({post: response.data});
    }
    render() {
        return (
            <div className='Post'>
                <div className="Header">
                    <h2 className='Title'>{this.state.post.title}</h2>
                    <span className='Date'>Date</span>
                </div>
                <div className='TextWrapper'>
                    <p>{this.state.post.text}</p>
                </div>
                <Button type='button'>Edit</Button>
                <Button type='button'>Delete</Button>
            </div>
        );
    }
}

export default Post;
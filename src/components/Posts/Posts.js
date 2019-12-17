import React, {Component} from 'react';
import './Posts.css';

import Post from "./Post/Post";

class Posts extends Component {
    render() {
        return (
            <div className='Posts'>
                {Object.keys(this.props.posts).map((key) => (
                    <Post key={key} text={this.props.posts[key].text}/>
                ))}
            </div>
        );
    }
}

export default Posts;
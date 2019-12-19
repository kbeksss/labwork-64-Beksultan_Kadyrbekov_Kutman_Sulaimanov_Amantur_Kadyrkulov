import React, {Component} from 'react';
import './Posts.css';

import Button from "../UI/Button/Button";

class Posts extends Component{
    state = {

    };
    readMore = (id) => {
        this.props.history.push('/posts/'+id);
    };
    render() {
        return (
            <div className='Posts'>
                {Object.keys(this.props.posts).map((key) => (
                    <div className='Post' key={key}>
                        <p className='Date'>{this.props.posts[key].date}</p>
                        <p className='Text'>{this.props.posts[key].title}</p>
                        <Button type='button' onClick={() => this.readMore(key)}>Read more >></Button>
                    </div>
                ))}
            </div>
        );
    }
}


export default Posts;
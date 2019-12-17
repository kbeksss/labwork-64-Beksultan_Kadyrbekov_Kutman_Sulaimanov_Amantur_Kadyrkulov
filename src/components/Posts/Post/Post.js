import React from 'react';
import './Post.css';

import Button from "../../UI/Button/Button";

const Post = props => {
    return (
        <div className='Post'>
            <p className='Date'>{props.date}</p>
            <p className='Text'>{props.text}</p>
            <Button type='button'>Read more >></Button>
        </div>
    );
};

export default Post;
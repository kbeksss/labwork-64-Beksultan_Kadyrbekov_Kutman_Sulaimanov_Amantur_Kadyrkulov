import React, {Component, Fragment} from 'react';
import './Post.css';
import Button from "../UI/Button/Button";
import axiosBlog from "../../axios-blog";
import Spinner from "../UI/Spinner/Spinner";
class Post extends Component {
    state = {
        post: {},
        loading: false,
    };
    async componentDidMount() {
        this.setState({loading: true});
        const response = await axiosBlog.get('blog/' + this.props.match.params.id + '.json');
        this.setState({post: response.data, loading: false});
    }
    render() {
        let post = !this.state.loading ? (
            <div className='Post'>
                <div className="Header">
                    <h2 className='Title'>{this.state.post.title}</h2>
                    <span className='Date'>{this.state.post.date}</span>
                </div>
                <div className='TextWrapper'>
                    <p>{this.state.post.text}</p>
                </div>
                <Button type='button'>Edit</Button>
                <Button type='button'>Delete</Button>
            </div>
        ) : <Spinner/>;
        return (
            <Fragment>
                {post}
            </Fragment>
        );
    }
}

export default Post;
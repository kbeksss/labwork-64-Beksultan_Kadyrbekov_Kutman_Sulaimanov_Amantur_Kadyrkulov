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
        const post = await axiosBlog.get('blog/' + this.props.match.params.id + '.json');
        if(post.statusText === 'OK'){
            this.setState({post: post.data, loading: false});
        } else{
            this.setState({loading: false});
            alert('Your post hasn\'t been found');
        }
    }
    deletePost = async () => {
       const deleted = await axiosBlog.delete('blog/' + this.props.match.params.id + '.json');
       if(deleted.statusText === 'OK'){
           this.props.history.replace('/');
       } else{
           alert('Your message hasn\'t been deleted');
       }
    };
    editPost = () => {
        this.props.history.push(this.props.match.params.id + '/edit');
    };
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
                <Button type='button' onClick={this.editPost}>Edit</Button>
                <Button type='button' onClick={this.deletePost}>Delete</Button>
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
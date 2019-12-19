import React, {Component} from 'react';
import './Home.css';
import axiosBlog from "../../axios-blog";
import Posts from "../../components/Posts/Posts";

class Home extends Component {
    state = {
        posts: {},
    };
    async componentDidMount() {
        const response = await axiosBlog.get('blog.json');
        const posts = {...response.data};
        this.setState({posts});
    }
    render() {
        return (
            <div className='Home'>
                <Posts
                    posts={this.state.posts}
                />
            </div>
        );
    }
}

export default Home;
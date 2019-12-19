import React, {Component} from 'react';
import './Home.css';
import axiosBlog from "../../axios-blog";
import Button from "../../components/UI/Button/Button";

class Home extends Component {
    state = {
        posts: {},
    };
    async componentDidMount() {
        const response = await axiosBlog.get('blog.json');
        this.setState({posts: response.data});
    }
    readMore = (id) => {
        this.props.history.push('/posts/' + id);
    };
    render() {
        return (
            <div className='Home'>
                <div className='Posts'>
                    {Object.keys(this.state.posts).map((key) => (
                        <div className='EPost' key={key}>
                            <p className='EDate'>{this.state.posts[key].date}</p>
                            <p className='ETitle'>{this.state.posts[key].title}</p>
                            <Button type='button' onClick={() => this.readMore(key)}>Read more >></Button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
import React, {Component, Fragment} from 'react';
import './Home.css';
import axiosBlog from "../../axios-blog";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

class Home extends Component {
    state = {
        posts: {},
        loading: false,
    };
    async componentDidMount() {
        this.setState({loading: true});
        const response = await axiosBlog.get('blog.json');
        this.setState({posts: response.data, loading: false});
    }
    readMore = (id) => {
        this.props.history.push('/posts/' + id);
    };
    render() {
        let home = !this.state.loading ? (
            <div className='Home'>
                <div className='Posts'>
                    {this.state.posts ? (Object.keys(this.state.posts).map((key) => (
                        <div className='EPost' key={key}>
                            <p className='EDate'>Created on: {this.state.posts[key].date}</p>
                            <p className='ETitle'>{this.state.posts[key].title}</p>
                            <Button type='button' onClick={() => this.readMore(key)}>Read more >></Button>
                        </div>
                    ))) : <h2 className='Empty'>Your blog is empty</h2>}
                </div>
            </div>
        ) : <Spinner/>;
        return (
            <Fragment>
                {home}
            </Fragment>
        );
    }
}

export default Home;
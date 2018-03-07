import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts : [],
        selectedPostId : null,
        selectedPost : null,
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const postsFetched = response.data.slice(0, 4);
            const postsWithAuthors = postsFetched.map(p => {
                return {
                    ...p,
                    author: 'Amar'
                }
            });
            this.setState({
                posts: postsWithAuthors
            })
        });
    }

    postSelectedHandler(id) {
        console.log('postselectedhandler called');
        const [p] = this.state.posts.filter(p => p.id === id);

        this.setState({
            selectedPostId : id,
            selectedPost: p,
        })
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} clicked={this.postSelectedHandler.bind(this, post.id)}/>;
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} post={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
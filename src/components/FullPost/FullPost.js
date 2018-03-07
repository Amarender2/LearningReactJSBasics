import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        
        if(this.props.id) {
            console.log(this.props.post);
            console.log(this.props.id + ', ' + this.props.post.title + ', ' + this.props.post.body);
            post = (
                <div className="FullPost">
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;
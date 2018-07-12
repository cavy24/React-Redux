import React from 'react';

import BlogPost from './BlogPost';
import BlogPostButton from './BlogPostButton';

export default class BlogPosts extends React.Component // -> Blog
{
   /* constructor(props){
        super(props);

        this.state = {
            blogposts: []
        };
    };*/

    render () {

    let blogposts = this.props.listBlogposts.map((blogpost, index) => {
        return <BlogPost key={index} {...blogpost} />;
    });

    let buttons = this.props.listButtons.map((button, index) => {
        return <BlogPostButton key={index} {...button} />;
    });
   
    return <div>
         <div className = "col-sm-12 blog-main">
       {blogposts}
       <ul className = "pager">
       {buttons}
       </ul>
        </div>
    </div>
};
};
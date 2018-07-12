import React from 'react';
import {Link} from 'react-router';

export default class BlogPostButton extends React.Component // -> BlogPosts 
{
    render()
    {
        return <li><Link to={this.props.hrefBlogPostButton}>{this.props.nameButtonBlog}</Link></li>;
    }
}

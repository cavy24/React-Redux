import React from "react";
import BlogPosts from '../components/blogpost/BlogPosts';

export default class Blog extends React.Component {

    render() {
        let blogposts = [
        {
            titleBlogItem: 'Sample blog post',
            descriptionBlogItem: <div><p>December 23, 2013 by <a>Mark</a></p></div>,
            textBlogItem: <div><p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p></div>,
            hrefBlogPost: 'blogpost1',
            nameButton: 'Подробнее'
        },
        {
            titleBlogItem: 'Another blog post',
            descriptionBlogItem: <div><p>December 14, 2013 by <a>Chris</a></p></div>,
            textBlogItem: <div><p>Cum sociis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote></div>,
            hrefBlogPost: 'blogpost2',
            nameButton: 'Подробнее'
        },
        {
            titleBlogItem: 'New feature',
            descriptionBlogItem: <div><p>January 1, 2014 by <a>Jacob</a></p></div>,
            textBlogItem: <div><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><li>Donec id elit non mi porta gravida at eget metus.</li><li>Nulla vitae elit libero, a pharetra augue.</li></ul></div>,
            hrefBlogPost: 'blogpost3',
            nameButton: 'Подробнее'
        }
        ];

        let buttons = [
            {
                hrefBlogPostButton: '/comments',
                nameButtonBlog: 'Предыдущая'
            },
            {
                hrefBlogPostButton: '/notfound',
                nameButtonBlog: 'Следующая'  
            }
        ];
        return <div>
             {(!this.props.children) ?
            <BlogPosts listBlogposts = {blogposts} listButtons = {buttons}/> :
            (this.props.children)
             }
            </div>
    }
}
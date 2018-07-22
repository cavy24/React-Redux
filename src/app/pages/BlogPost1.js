import React from 'react';

import BlogPost from '../components/blogpost/BlogPost';

export default class BlogPost1 extends React.Component
{
   

    render()
    {
        let blogposts = [
            {
                titleBlogItem: 'Sample blog post',
                descriptionBlogItem: <div><p>December 23, 2013 by <a>Mark</a></p></div>,
                textBlogItem: <div><p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p></div>
            },
            {
                titleBlogItem: 'Another blog post',
                descriptionBlogItem: <div><p>December 14, 2013 by <a>Chris</a></p></div>,
                textBlogItem: <div><p>Cum sociis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote></div>
                
            },
            {
                titleBlogItem: 'New feature',
                descriptionBlogItem: <div><p>January 1, 2014 by <a>Jacob</a></p></div>,
                textBlogItem: <div><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><li>Donec id elit non mi porta gravida at eget metus.</li><li>Nulla vitae elit libero, a pharetra augue.</li></ul></div>
            }
            ];

            console.log(blogposts);

            let hrefBlogPost = '';
            let nameButton = 'Назад';

            let elem = this.props.params.hrefBlogPost - 1;

            console.log(this.props.params.hrefBlogPost);
                   
           /* switch (this.props.params.hrefBlogPost) {
                case 'blogpost1':{
                   elem = 0;
                   break;
                 };
                 case 'blogpost2':{
                    elem = 1
                    break;
                 };
                 case 'blogpost3':{
                    elem = 2
                    break;
                 }
                default:
                elem = null;
                    break;
            }*/
    
            console.log(elem);
        return <div>
          
           <BlogPost titleBlogItem = {blogposts[elem]['titleBlogItem']} 
           descriptionBlogItem = {blogposts[elem]['descriptionBlogItem']}
           textBlogItem = {blogposts[elem]['textBlogItem']}
           hrefBlogPost = {hrefBlogPost} nameButton = {nameButton}/>
           
            </div>
    }
}
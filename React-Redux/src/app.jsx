import React from 'react';
import ReactDOM from 'react-dom';
import LayoutMenu from "./app/layouts/LayoutMenu";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import PageNotFound from './app/pages/PageNotFound';
import Main from './app/pages/Main';
import Comments from './app/pages/Comments';
import Blog from './app/pages/Blog';
import BlogPost1 from './app/pages/BlogPost1';

import store from './app/stores/store';
import {Provider} from 'react-redux';

const app = document.getElementById('app');

ReactDOM.render(
 <Provider store={store}>
 <Router history={browserHistory}>
    <Route path="/" component={LayoutMenu}>
        <IndexRoute component={Main} />
        <Route path="comments" component={Comments} />
        <Route path="blog" component={Blog}>
            <Route path=":hrefBlogPost" component={BlogPost1} />
        </Route>
        <Route path="*" component={PageNotFound} />
    </Route>
    </Router>
 </Provider>, app);
    
    
    
       
        
    

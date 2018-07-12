import React from 'react';
import Menu from '../components/menu/Menu';
import MenuItem from '../components/menu/MenuItem';


export default class LayoutMenu extends React.Component
{
    render()
    {

        return <div>
            <Menu brand="React group">
                <MenuItem href="/">Главная</MenuItem>
                <MenuItem href="/comments">Комментарии</MenuItem>
                <MenuItem href="/blog">Блог</MenuItem>
                <MenuItem href = "/notfound">404</MenuItem>
            </Menu>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
            <footer>
            <div className = "container">
            <div className = "row">
            <div className = "col-xs-3"></div>
            <div className = "col-xs-6">
            <hr/>
            <p>This application has made Elena Vakulenko &copy;2018.</p>
            </div>
            <div className = "col-xs-3"></div>
            </div>
            </div>
            </footer>
        </div>;
    }
}
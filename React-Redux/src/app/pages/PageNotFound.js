import React from "react";
import Img3 from '../img/404.png';

export default class PageNotFound extends React.Component {
    render() {
        return <div className = "page-not-found">
            <img src = {Img3} />
        </div>;
    }
}
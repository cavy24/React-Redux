import React from "react";
import CommentList from '../components/comment/CommentList';

import CommentActions from '../actions/CommentActions';
import store from '../stores/store';
import {connect} from 'react-redux';


class Comments extends React.Component {
    render() {

        if(this.props.is_loading){
            return <p>Данные загружаются</p>;
        }

        return <div> 
            <ul className = 'pager'>
                <button className="btn btn-primary" onClick={this.newComment}>Добавить новый комментарий</button>
            </ul>
        {
            (!this.props.children) ?
            (<CommentList comments={this.props.comments}/>):
            (this.props.children)
        }
        </div>
    }

    componentDidMount()
    {
        let comments = CommentActions.getComments();
        this.props.dispatch(comments);
    }

}

function mapStateToProps(store) {
    return {
        comments: store.comments.comments,
        is_loading: store.comments.is_loading
    }
}

export default connect(mapStateToProps)(Comments);
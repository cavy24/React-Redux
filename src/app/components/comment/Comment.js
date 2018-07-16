import React from 'react';
import store from '../../stores/store';
import {connect} from 'react-redux';
import './comment.css'
import CommentActions from '../../actions/CommentActions';
class Comment extends React.Component {

    constructor(props)
    {
        super(props);
    
        this.comments = [];
        this.deleteComment = this.deleteComment.bind(this);
        this.editeComment = this.editeComment.bind(this);
    }
    render() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.userId}</h3>
            </div>
            <div className="panel-body">
                <p>{this.props.id}</p>
                <p id = "commentTitle">{this.props.title}</p>
                <p id = "commentBody">{this.props.body}</p>
                <ul className = 'pager'>
                <button className="btn btn-primary" onClick={this.deleteComment}>Удалить комментарий</button>
                <button className="btn btn-primary" onClick={this.editeComment}>Редактировать комментарий</button>
                </ul>
            </div>
        </div>
    );
    }

    deleteComment(){
       
        this.props.dispatch(CommentActions.delComment(this.props.id));
    }

    editeComment(){
      
        let title = prompt('Тема');
        let body = prompt('Текст');
        
        this.props.dispatch(CommentActions.editComment(this.props.id, title, body));
    }
}

function mapStateToProps(store) {
    return {
        comments: store.comments.comments,
        is_loading: store.comments.is_loading
    }
}

export default connect(mapStateToProps)(Comment);
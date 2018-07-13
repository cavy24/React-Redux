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
        let id = this.props.id;
        console.log(this.props.id);
       
        let comment = CommentActions.delComment(id);
        this.props.dispatch(comment);
    }

    editeComment(){
        let title = document.getElementById('commentTitle').innerHTML;
        let id = this.props.id;
        let body = document.getElementById('commentBody').innerHTML;
        console.log(id, title, body);
        //document.getElementById("commentTitle").innerHTML = '';
        //document.getElementById("commentBody").innerHTML = '';
        title = prompt('Тема');
        body = prompt('Текст');
        console.log(title, body);
        let comment = CommentActions.editComment(title, id, body);
        this.props.dispatch(comment);
        
      }
      /** let comments = CommentActions.getComments();
        this.props.dispatch(comments); */
}

function mapStateToProps(store) {
    return {
        comments: store.comments.comments,
        is_loading: store.comments.is_loading
    }
}

export default connect(mapStateToProps)(Comment);
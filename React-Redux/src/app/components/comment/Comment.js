import React from 'react';

import './comment.css'
import {delComment, editComment} from "../../actions/CommentActions";
export default class Comment extends React.Component {

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

    deleteComment(deliteComment){
        let deliteComment = this.props.id;
        console.log(this.props.id);
             
        delComment(deliteComment);
    }

    editeComment(){
        let title = document.getElementById('commentTitle').innerHTML;
        let id = this.props.id;
        let body = document.getElementById('commentBody').innerHTML;
        console.log(id, title, body);
        document.getElementById("commentTitle").innerHTML = '';
        document.getElementById("commentBody").innerHTML = '';
        title = prompt('Тема');
        body = prompt('Текст');
        console.log(title, body);
        editComment({id, title, body})
      }

    /*editeComment(){
        let id = this.props.id;
        let title = document.getElementById('commentTitle');
        let body = document.getElementById('commentBody');
        //console.log(this.props.id, this.props.title, this.props.body);
        console.log(id, title, body);
        title.innerText = prompt('Enter some name');
        body.innerText = prompt('Enter some text');
        editComment({id, title, body});
    }*/

      /* componentDidMount(){
        getComments(); //Action, получаем комменты
    }*/

}
import React from "react";
import Comment from './Comment';

export default class CommentList extends React.Component {
    
    render() {
        if(!this.props.comments.length){
            return null;
        }

        //let userNames = ['Peter', 'Dominic', 'Alex', 'Sara', 'Jhon','Elisabet', 'Ben', 'George', 'Kate', 'Met'];
        
        let comments = this.props.comments.map((comment, index) => {
            
            //this.props.comments[index]["userId"] = userNames[this.props.comments[index]["userId"]-1]
            //console.log(this.props.comments[index]["userId"]);
            return <Comment key={index} {...comment} />;
        });

        
        return <div>
            <h1>Комментарии</h1>
            {comments}
        </div>;
    }
   
}
import axios from 'axios';
import {GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DEL_COMMENT} from "../constants/commentConstants";

export default class CommentActions
{
    static getComments(){
        return {
            type: GET_COMMENTS,
            payload: axios.get('https://jsonplaceholder.typicode.com/posts/')
        }
    };

    static addComment(userId, id, title, body)
    {
        let comment = {
            userId, id, title, body
        };

        return {
            type: ADD_COMMENT,
            payload: comment
        };
    }

    static editComment(id, title, body)
    {
        let edComment = {
            id, title, body
        };

        return {
            type: EDIT_COMMENT,
            payload: edComment
        };
    }

    static delComment(id)
    {
        let comment = {
            id
        };
        return {
            type: DEL_COMMENT,
            payload: comment
        };
    }


}

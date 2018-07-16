import * as CommentConstants from '../constants/commentConstants';

export function commentReducer(state = {comments: [], is_loading: false}, action) {
    switch (action.type)
    {
        case CommentConstants.GET_COMMENTS_PENDING: {
            //Первый способ
            // state = {
            //     users: [],
            //     is_loading: true,
            // };

            //Второй способ
            state = {...state, is_loading: true};
            break;
        }
        case CommentConstants.GET_COMMENTS_FULFILLED: {
            state = {...state, is_loading: false, comments: action.payload.data.reverse()};
            break;
        }
        case CommentConstants.GET_COMMENTS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message};
            break;
        }

        case CommentConstants.ADD_COMMENT: {
            console.log(action.payload);
            let comments;
           
            //state.comments.unshift(action.payload);
            state = {...state, 
            comments: [action.payload].concat(state.comments)};
            break;
        }

        case CommentConstants.EDIT_COMMENT: {
          
           let comments;
           
          /**(function(comment) {
            if(comment.id == action.payload.id) {
             comment.title = action.payload.title;
             comment.body = action.payload.body;
            } */
         
           state = {...state, 
           comments: state.comments.map(comment => comment.id === action.payload.id ? (comment.title = action.payload.title, comment.body = action.payload.body, comment) : comment)};
           break;
        }

        case CommentConstants.DEL_COMMENT: {
           
            state = {
                ...state,
                comments: state.comments.filter(elem => elem.id !== action.payload.id && elem ) } ;
            break;
        }
    }
    return state;
}
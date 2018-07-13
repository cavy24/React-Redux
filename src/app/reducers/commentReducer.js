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
            state = {...state, is_loading: false, comments: action.payload.data};
            break;
        }
        case CommentConstants.GET_COMMENTS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message};
            break;
        }

        case CommentConstants.ADD_COMMENT: {
            let comments = state.comments;
            comments.unshift(action.payload);
            state = {...state, comments};
            break;
        }

        case CommentConstants.EDIT_COMMENT: {
                let comments = state.comments;
                for (let i = 0; i < comments.length; i++) 
                {
                let comment = comments[i];
                if (comment.id['id'] === comments[i].id){
                comments[i].title = comment.id['title'];
                comments[i].body = comment.id['body'];
                break;
                }
            }
            /*let comments = state.comments;
            let comment = this.comments[i];
            for (let i = 0; i < comments.length; i++) 
            {
                if (comment['id'] === comments[i]['id']){
                    comments[i]['title'] = comment['title'];
                    comments[i]['body'] = comment['body'];
                    break;
                }
            };
            state = {...state, comments};
            break;*/
        }

        case CommentConstants.DEL_COMMENT: {
            let comments = state.comments;
            for(let i = 0; i < comments.length; i++) {
                let comment = comments[i];
                if(comment['id'] == comments[i]['id'])
                comments.splice(i, 1);
            }
            
            state = {...state, comments};
            break;
        }
    }
    return state;
}
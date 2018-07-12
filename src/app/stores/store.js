import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

//Reducers
import {commentReducer} from '../reducers/commentReducer';

//Объединения
const middleware = applyMiddleware(promiseMiddleware(), logger());
const reducers = combineReducers({
    comments: commentReducer,
    comment: commentReducer
    //user: usersReducer
});

//Создаем стор
const store = createStore(reducers, middleware);

export default store;
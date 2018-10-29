import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// 리듀서(reducer) 는 어플리케이션 state를 반환하는 함수이다.
const rootReducer = combineReducers({ // 이 객체를 combineReducers 로 넘길 때, 리덕스가 어플리케이션 스테이트를 생성한다.
    books: BooksReducer,
    // books (키는 state의 이름): BooksReducer (리듀서 그 자체) 
});

export default rootReducer;
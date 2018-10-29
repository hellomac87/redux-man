import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// reducer 는 어플리케이션 state를 반환하는 함수이다.
const rootReducer = combineReducers({
    books: BooksReducer,
});

export default rootReducer;
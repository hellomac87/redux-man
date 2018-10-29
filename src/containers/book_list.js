import React, { Component } from 'react';
// 애플리케이션 스테이트와 이 컴포넌트를 연결하는 것
// 리액트 뷰와, 리덕스 스테이트를 합쳐주는 것
// 컨테이너는 리액트 컴포넌트이다. 하지만 다른 컴포넌트들과는 달리 리덕스에의해 관리되는 스테이트에 직접접근하는 컴포넌트이다. 한마디로 리덕스랑 연결하는 컴포넌트가 컨테이너.
// react-redux 라이브러리를 사용해서 리액트와 리덕스를 연결하여 리덕스 안의 스테이트를 리액트 컴포넌트에서 사용 할 수 있게 해준다.
import { connect } from 'react-redux'; // 파일로부터 싱글 프로퍼티를 가져오기 위해 {}사용

class BookList extends Component {

    // 북 리스트를 작성하는 부분을 함수로 작성
    _renderList(){
        // 상위 컴포넌트에서 props를 가져오듯이 this.props에 접근하여 books 를 가져온다. 마치 state를 하위 컴포넌트에 뿌려줄때처럼 props를 사용한다.
        return this.props.books.map(book => {
            return (
                <li className="list-group-item" key={book.title}>{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4 ">
                {this._renderList()}        
            </ul>
        );
    }
}

function mapStateToProps(state){
    // 리덕스 state 와 컴포넌트를 맵핑하기 위한 함수
    // state를 가져와서 리턴되는 무엇이든 booklist 컴포넌트 안의 props로 맵핑 될것이다.
    return {
        books: state.books // 키값이 props 의 value값이고 state.books는 리덕스 앱 스테이트를 가져오는 값이다.  리덕스와 컨테이너를 연결하는 방식이다.
    };
}

export default connect(mapStateToProps)(BookList);
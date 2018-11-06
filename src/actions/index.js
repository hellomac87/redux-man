// 우리가 만들 모든 액션 생성자가 들어간다.
// 액션 생성자는 함수이다.
const selectBook = (book) => { // 어플리케이션 안 다른 곳에서 사용하기 위해 export 한다.
    // book :: 제목을 가진 object
    console.log('A book has been selected', book.title)
}

export {selectBook};
// 이 액션이 반환되어 모든 리듀서로 흘러들어가는 것을 확인 할 필요가 있다. 
// 이 액션 생성자는 리덕스에 연결되어야 한다.
#### createAction
- 액션을 좀 더 편하게 자동화하는 방법
```JavaScript
// 1. 파라미터가 1개인 경우
// 기존 코드
export const increment = (index) => {
    return ({
        type: types.INCREMENT,
        index
    })
}

// 변경 코드
import { createAction } from 'redux-actions';
export const increment = createAction(types.INCREMENT)

// 호출
increment(3)



// 2. 파라미터가 여러개일 경우
export const setColor = createAction(types.SET_COLOR)

// 뭘 받는지 명시
export const setColor = createAction(types.SET_COLOR, 
({index, color}) => ({index, color}));

// 호출
setColor({ index : 5, color : 'black' })
```
#

#### handleActions
- switch문 대신에 사용 (switch문은 같은 이름의 변수 사용 못함)
```JavaScript
// 기존 코드
const number = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }

        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }

        default:
            return state;
    }
}

// 변경 코드
import { handleActions } from 'redux-actions';

const number = handleActions({
  INCREMENT : (state, action) => ({
    number: state.number + 1
  }),

  DECREMENT : (state, action) => ({
    number: state.number - 1
  })
}, { number : 0 })


// export 바로 하기
export default handleActions({
  INCREMENT : (state, action) => ({
    number: state.number + 1
  }),

  DECREMENT : (state, action) => ({
    number: state.number - 1
  })
}, { number : 0 })
```

- 액션 타입 정의 힐 때 handleActions 선언하는 방법
```JavaScript
// 변수명과 액션명이 같을 때
const INSERT = 'INSERT'
let reducer = handleActions({
    INSERT : (state, action) => { }
})

// 변수명과 액션명이 다를 때
const INSERT = 'todos/INSERT'
let reducer = handleActions({
    [INSERT] : (state, action) => { }
})
```
#

#### bindActionCreators
- 액션 생성 함수들을 연결시켜주는 내장 함수
- 액션 생성 함수들을 여러개 설정 가능
- 파라미터 2개를 가짐
1. 액션 생성 함수들이 들어있는 객체
2. dispatch
```JavaScript
// 형태
InputActions: bindActionCreators(inputActions, dispatch)
```
#


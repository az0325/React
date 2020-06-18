import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT' // 추가
const TOGGLE = 'todos/TOGGLE' // 토글
const REMOVE = 'todos/REMOVE' // 삭제

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 초기값 설정
const initialState = List([
    Map({
        id: 0,
        text: 'STUDY REACT',
        done: true
    }),
    Map({
        id: 1,
        text: 'STYLING COMPONENT',
        done: false
    })
])

// 리듀서 생성
let reducer = handleActions({
    [INSERT]: (state, action) => {
        // 액션이 어떤 데이터를 처리하는지 쉽게 보기
        const { id, text, done } = action.payload

        return state.push(Map({
            id, text, done
        }))
    },

    [TOGGLE]: (state, action) => {
        const { id } = action.payload

        // 전달 받은 id를 가지고 index 조회
        const index = state.findIndex(todo => todo.get('id') === id)

        // 현재 값을 참조해서 반대 값으로 설정
        // return state.setIn([index, 'done'], state.getIn([0, 'index']))
        return state.updateIn([index, 'done'], done => !done)
    },

    [REMOVE]: (state, action) => {
        const { id } = action.payload

        const index = state.findIndex(todo => todo.get('id') === id)
        return state.delete(index)
    }
}, initialState)

export default reducer;
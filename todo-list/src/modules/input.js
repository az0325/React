import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const SET_INPUT = 'input/SET_INPUT';

// 액션 생성 함수
export const setInput = createAction(SET_INPUT);

const initialState = Map({
    value: ''
})

// 리듀서 생성
export default handleActions({
    [SET_INPUT]: (state, action) => {
        console.log("[SET_INPUT] reducer : ", state.toJS())
        return state.set('value', action.payload)
    }
}, initialState)
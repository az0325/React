import * as types from '../actions/ActionTypes'

// reducer 초기값
const initialState = {
    color: "black",
    number: 0
}


// reducer 함수
const counter = (state = initialState, action) => {
    console.log(action)
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

        case types.SET_COLOR:
            return {
                ...state,
                number: action.color
            }
        default:
            return state;
    }
}

export default counter;
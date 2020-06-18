import * as types from '../actions/ActionTypes'

const initialState = {
    number: 0
}

const number = (state = initialState, action) => {
    console.log("reducers : numbers - ", state)
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

export default number;
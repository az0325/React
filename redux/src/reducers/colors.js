import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black'
}

const color = (state = initialState, action) => {
    console.log("reducers : colors")
    switch (action.type) {
        case types.SET_COLOR:
            return {
                ...state,
                number: action.color
            }
        default:
            return state;
    }
}

export default color;
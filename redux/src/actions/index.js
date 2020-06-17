// 액션 생성 함수들 선언

import * as types from './ActionTypes';

export const increment = () => {
    console.log("action index : INCREMENT")
    return ({
        type: types.INCREMENT
    })
}


export const decrement = () => {
    console.log("action index : DECREMENT")
    return ({
        type: types.DECREMENT
    })
}

export const setColor = (color) => {
    console.log("action index : SET_COLOR")
    return ({
        type: types.SET_COLOR,
        color
    })
}
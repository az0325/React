import React, { useRef } from "react";
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

// 액션 생성 함수
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

const TodoInputContainer = ({ InputActions, TodosActions, value }) => {
    const nextId = useRef(1)

    const getId = () => {
        return ++nextId.current
    }

    const handleChange = (e) => {
        const { value } = e.target;
        InputActions.setInput(value)
    }

    const handleInsert = () => {
        const todo = {
            id: getId(),
            text: value,
            done: false
        };

        TodosActions.insert(todo);
        InputActions.setInput('')
    }

    return (
        <TodoInput
            onChange={handleChange}
            onInsert={handleInsert}
            value={value}
        />
    )
}

// mapStateToProps, mapDispatchToProps 사용하지 않음
const TodoInputContainers = connect(
    // mapStateToProps
    (state) => ({ value: state.input.get('value') }),

    // mapDispatchToProps
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer)

export default TodoInputContainers;
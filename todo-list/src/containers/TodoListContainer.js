import React from "react";
import TodoList from '../components/TodoList';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

const TodoListContainer = ({ TodosActions, todos }) => {

    const handleToggle = (id) => {
        TodosActions.toggle(id)
    }

    const handleRemove = (id) => {
        TodosActions.remove(id)
    }

    return (
        <TodoList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
        />
    )
}

const TodoListContainers = connect(
    (state) => ({ todos: state.todos }),
    (dispatch) => ({ TodosActions: bindActionCreators(todosActions, dispatch) })
)(TodoListContainer)

export default TodoListContainers;
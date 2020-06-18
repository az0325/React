import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.todos !== nextProps.todos;
  // }

  const todoList = todos.map(
    todo => (
      <TodoItem
        key={todo.get('id')}
        done={todo.get('done')}
        onToggle={() => onToggle(todo.get('id'))}
        onRemove={() => onRemove(todo.get('id'))}>
        {todo.get('text')}
      </TodoItem>
    )
  );

  return (
    <div>
      {todoList}
    </div>
  );
}


export default TodoList;

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;

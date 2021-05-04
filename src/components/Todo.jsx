import React from 'react';
// import { Link } from 'react-router-dom';
import IconDelete from './IconDelete';
import IconEdit from './IconEdit';

const Todo = ({ todo, toggleComplete, removeTodo }) => {

  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  }

  const handleRemove = () => {
    removeTodo(todo.id);
  }

  return (
    <li className={todo.completed ? "completed" : ""}>
      <label>
        <input type="checkbox" onClick={handleCheckboxClick} />
        <span>{todo.task}</span>
      </label>
      {/* <Link className="button button-edit" to="/edit-todo"> */}
      <button className="button button-edit">
        <IconEdit />
      </button> 
      {
        todo.completed ? 
        <button className="button button-delete" onClick={handleRemove}>
          <IconDelete />
        </button> 
        : 
        <button className="button button-delete" disabled>
          <IconDelete />
        </button>
      }
    </li>
  )
}

export default Todo;


import React, { useState } from 'react';
import IconDelete from './IconDelete';
import IconEdit from './IconEdit';
import IconUpdate from './IconUpdate';

const Todo = ({ todo, toggleComplete, removeTodo }) => {

  const [newTodo, setNewTodo] = useState({
    task: todo.task
  })

  const [toggle, setToggle] = useState(false);

  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  }

  const handleRemove = () => {
    removeTodo(todo.id);
  }

  const handleChange = e => {
    setNewTodo({
      ...newTodo, task: e.target.value
    })
    // alert(newTodo)
  }

  const editText = () => {
    setToggle(
      !toggle
    )
  }

  const updateText = e => {
    e.preventDefault();
    setNewTodo({
      ...newTodo,
      task: newTodo.task,
    });
    editText()
  }

  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        {toggle &&
          <form className="update-form" onSubmit={updateText}>
            <input type="text" className="input-field" onChange={handleChange} name="task" value={newTodo.task} />
            <button className="button button-edit">
              <IconUpdate />
            </button>
          </form>
        }

        <label>
          <input type="checkbox" onClick={handleCheckboxClick} />
          <span>
            {!newTodo.task && todo.task}

            {newTodo.task && newTodo.task}
          </span>
        </label>
        <button className="button button-edit" onClick={editText}>
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
    </>
  )
}

export default Todo;


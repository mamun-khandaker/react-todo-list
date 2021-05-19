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
  }

  const editText = () => {
    setToggle(true)
  }

  const updateText = e => {
    e.preventDefault();
    setNewTodo({
      ...newTodo,
      task: newTodo.task,
    });
    setToggle(false)
  }

  return (
    <li className={todo.completed ? "completed" : ""}>
      <label>
        <input type="checkbox" onClick={handleCheckboxClick} />
        {toggle &&
          <form className="update-form" onSubmit={updateText}>
            <input type="text" autoFocus className="input-field" onChange={handleChange} name="task" value={newTodo.task} />
            <button className="button button-edit">
              <IconUpdate />
            </button>
          </form>
        }
        
        {!toggle &&
          <span>
            {!newTodo.task && todo.task}

            {newTodo.task && newTodo.task}
          </span>
        }
      </label>

      {!todo.completed && !toggle &&
        <button className="button button-edit" onClick={editText}>
          <IconEdit />
        </button>
      }

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

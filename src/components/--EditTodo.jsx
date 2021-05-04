import React, { useState } from 'react';

const EditTodo = ({ edit }) => {
  const [editTodo, setEditTodo] = useState({
    id: '',
    task: '',
  });

  const handleChange = e => {
    setEditTodo({
      ...editTodo, task: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (editTodo.task.trim()) {
      editTodo({ ...editTodo, id: Math.floor(Math.random() * 10000) });
      setEditTodo({ ...editTodo, task: '' }) // Reset task input
    }
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <div className="todo-input">
          <input type="text" className="input-field" onChange={handleChange} name="task" value={editTodo.task} />
          <button className="button">Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default EditTodo;

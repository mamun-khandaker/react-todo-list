import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  });

  const handleChange = e => {
    setTodo({
      ...todo, task: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(todo.task.trim()) {
      addTodo({ ...todo, id: Math.floor(Math.random() * 10000) });
      setTodo({ ...todo, task: '' }) // Reset task input
    }
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <div className="todo-input">
          <input type="text" className="input-field" onChange={handleChange} name="task" value={todo.task} />
          {
            todo.task.length !== 0 ? 
            <button className="button">Add Todo</button> 
            : 
            <button className="button" disabled>Add Todo</button>
          }
        </div>
      </form>
    </div>
  )
}

export default TodoForm;


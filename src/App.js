import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  const addTodo = todo => {
    setTodos([...todos, todo]);
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // const editTodo = edit => {
  //   setTodos([...todos, edit]);
  // }

  return (
    <div className="container">
      <h1 className="title-h1">Todo list</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      {/* <Route path="/" exact>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </Route>
      <Route path="/edit-todo">
        <EditTodo editTodo={editTodo} />
      </Route> */}
    </div>
  );
}

export default App;

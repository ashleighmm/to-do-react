import React, { useState } from 'react';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css';

function App() {

  const[todos, setTodos]= useState([
    { text: "Feed the cats" },
    { text: "Watch tutorial at lunch" },
    { text: "Build something" }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

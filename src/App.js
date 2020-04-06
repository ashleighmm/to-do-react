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
      </div>
    </div>
  );
}

export default App;

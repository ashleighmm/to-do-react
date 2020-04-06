import React, { useState } from 'react';
import './App.css';

function App() {

  const[todos, setTodos]= useState([
    { text: "Feed the cats" },
    { text: "Watch tutorial at lunch" },
    { text: "Build something" }
  ])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

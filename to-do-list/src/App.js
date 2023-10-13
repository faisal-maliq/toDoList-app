import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  function handleInput(e) {
    const newInput = e.target.value;
    setInput(newInput);
  }
  function addItem() {
    setItem((previtems) => {
      return [...previtems, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={input} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';





function App() {
  

  const [todo, settodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    settodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo ===""){
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    settodo("");
  }

  useEffect(() => {console.log("==AppStart==")},[]);
  useEffect(() => {console.log(todos)}, [todos]);
   
  return (
    <div>
      <h1>일정 [{todos.length}]</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={todo} 
          onChange={onChange} 
          placeholder="Write here to do..."
        />
        <button>add Todo List</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
      
    </div>
  );
}

export default App;

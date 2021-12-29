import './App.css';
import { useState } from 'react';



function App() {
  const [name, setName] = useState('')
  const [fullname,setfullname] = useState();
 
  const val =(event)=>{
    setName(event.target.value);
    event.preventDefault();
  
}
const hello= ()=>{
  setfullname(name);
}
  return (
    <div className="App">
    <h1>Hello {fullname}</h1>
    <input placeholder='name' type="text"  onChange={val}  value={name}  />
    <br />
    <button onClick={hello}> submit</button>
    </div>
  );
}

export default App;

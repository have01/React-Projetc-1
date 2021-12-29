import './App.css';
import { useState } from 'react';



function App() {
  const [name, setName] = useState('')
  const [fullname,setfullname] = useState();
const[bg,setbg]=useState('aliceblue')
 
  const val =(event)=>{
    setName(event.target.value);
    event.preventDefault();
    setbg('aliceblue')
    
  
}

const hello= ()=>{
  setfullname(name);
  setbg('yellow')
}
  return (
    <div className="App" style={{backgroundColor: bg}}>
    
    <h1>Hello {fullname}</h1>
    <input placeholder='Enter your Name' type="text"  onChange={val}  value={name}  />
    <br />
    <button onClick={hello}> Submit</button>
    </div>
  );
}

export default App;

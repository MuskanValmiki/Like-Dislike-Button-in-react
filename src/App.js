import React,{useState} from 'react';
import './App.css';

function App() {
  let [num1,setNum1]=useState(0)
  return (
    <div className="App">
      <h1>Like Dislike button.</h1>
       <h1>{num1}</h1>
       <button id='btn1' onClick={()=>{
        setNum1(num1+1)
       }}>LIKE</button>
       <button  id='btn2' onClick={()=>{
        if(num1<1){
          setNum1(0)
        }
        else{
          setNum1(num1-1)
        }
       }}>DISLIKE</button>
    </div>
  );
}

export default App;

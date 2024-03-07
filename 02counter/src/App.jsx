import { useState } from 'react';
import './App.css'


// useState is a hook from react library which help to change state 

function App() {

  // useState() when used return two things first a variable second a method which controls that variable we can pass any value as parameter to useState()

  let [counter, setCounnter ] = useState(0)

 // let counter = 5  this was created just for fun 

  // this function updates the value in console but in ui the value is not being updated 

  // 

const addValue = () => {
  if(counter < 20){
    counter = counter+1;
    console.log(counter)
    setCounnter(counter)

  }
}

const decreseValue = () =>{
  if(counter>0){

    console.log("clicked")
    setCounnter(counter-1)

  }  
}
   

  return (
    <>
       <h1>CHai aur react </h1>

       <h2>Counter Value : {counter}</h2>

       <button onClick={addValue}> Add value {counter}</button>

       <br />

       <button onClick={decreseValue}>Subtract Value {counter}</button>
    </>
  )
}

export default App

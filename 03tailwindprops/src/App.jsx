 
import './App.css'
import Card from '../components/card'

function App() {
 
  // let myobj = {
  //   MyUsername: "shyam",
  //   myAge: "21",
  //   btnText:"isTaraBhaago"
  // }
  // let myArray = [1,2,3,4]

  return (
    <>
   
    
      <h1 className='bg-yellow-300 text-black p-4 rounded-bl-3xl'>Tailwind test</h1> 
      <Card  username="shyam" btnText= "click here "/>
      <Card  username ="ram" btnText = "press me "/>
       
     </>

    // we can add tailwind as shown above in <h1>

    // we have created card component we can use it multiple time and the things we are passing in card are set to the component through props 

    // array and objects can also be passed as props 

  )
}

export default App

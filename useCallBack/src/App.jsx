import { useState , useCallback } from "react"
import Child from "./compo/Child";


function App() {
const [count , setCount] = useState(0);
const handleIncrement = useCallback(() =>{
setCount(count +1); 
})


  return (
    <>
  <div className="flex items-center gap-2 flex-col justify-center h-screen bg-gray-700 text-white ">
    <h2 className="text-3xl"> This is useCallback hook. </h2>
    <div className=" text-center bg-black p-1 rounded-lg"> Count : {count} </div>
    <button onClick={handleIncrement} className="bg-black p-1 rounded-lg "> Increment</button>
    <Child buttonName = {"Increment"}/>
   
  </div>
    </>
  )
}

export default App

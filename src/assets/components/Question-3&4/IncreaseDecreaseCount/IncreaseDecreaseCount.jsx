import React,{useState} from 'react'

 function IncreaseDecreaseCount() {
    //functions
   const[count,setCount]= //distracturing//
    useState(0)
    function Increase(){
        setCount((prevcount) =>{
            return prevcount + 1
        })
    }

     function Decrease() {
       setCount((prevcount) => {
         return prevcount - 1;
       });
     }

      function Reset() {
        setCount(0)
      }

    //display on browser
  return (
     <div style={{textAlign:"center" }}>
      
      <h2>intial click count: {count} </h2>
      <div style={{ textAlign:"center" , color:"green"}}>
        <button onClick={Increase}>increase</button> 
        <button onClick={Decrease}>decrease</button>
        <button onClick={Reset}>reset</button>
      </div>
    </div>
  )
}

export default IncreaseDecreaseCount

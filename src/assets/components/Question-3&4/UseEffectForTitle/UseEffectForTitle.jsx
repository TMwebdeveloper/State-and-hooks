import React,{useState,useEffect} from 'react'

function UseEffectForTitle() {
    const [count,setCount]=useState(0)
      function Increase() {
        setCount((prevcount) => {
          return prevcount + 1;
        });
      }
      useEffect(() =>{
        alert("Component is mounted")
      },[])

      useEffect(() => {
        document.title=`titleCounter:${count}`
      },[count]);


  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{ background: "green", color: "white" }}
        onClick={Increase}
      >
        Click here
      </button>
      <h1>Count Displayer{count}</h1>
    </div>
  );
}

export default UseEffectForTitle

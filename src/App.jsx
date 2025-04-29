import { useState } from "react"
import MyCounter from "./assets/components/Question-1&2/MyCounter"
import IncreaseDecreaseCount from "./assets/components/Question-3&4/IncreaseDecreaseCount/IncreaseDecreaseCount";
import UseEffectForTitle from "./assets/components/Question-3&4/UseEffectForTitle/UseEffectForTitle";


function App() {

  return (
    <>
      <MyCounter />
      <IncreaseDecreaseCount />
      <br/>
      <UseEffectForTitle />
    </>
  );
}

export default App

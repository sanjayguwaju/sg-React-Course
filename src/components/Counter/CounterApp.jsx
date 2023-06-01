import { ClassNames } from "@emotion/react"
import { useState } from "react"

const CounterApp = () => {

    // State === Change bhairaakhxa
    const [counter, setCounter] = useState(0)
    console.log(counter)
    console.log(setCounter)


    const handleAdd = () => {
        setCounter(counter + 2)
    }

    const handleSubstract = () => {
        setCounter(counter - 3)
    }


    

  return (
    <div>
        <h1>CounterApp</h1>
        <button onClick={handleAdd}>+</button>
        <h1>{counter}</h1>
        <button onClick={handleSubstract}>-</button>
      
    </div>
  )
}

export default CounterApp

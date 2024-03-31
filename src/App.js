import React, { useState } from "react";


function App() {

  const [number, setNumber] = useState(1)


function Increase (){
  setNumber(c => c+1)
}
function Decrease (){
  setNumber(c => c-1)
}
function Reset (){
  setNumber(0)
}


  return (
    <>

      <div className="counter">
        <h1>Basic UseState Examples</h1>
        <h2 className="numero">{number}</h2>
        <button className="buttons" onClick={Increase}>INCREASE</button>
        <button className="buttons" onClick={Reset}>CLEAR</button>
        <button className="buttons" onClick={Decrease}>DECREASE</button>
      </div>
    </>






  )

}

export default App;

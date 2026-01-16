import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/couterSlice";

function App() {
  const dispatch=useDispatch()
  const count=useSelector(state=>state.counter.value)
  const [num, setnum] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button
      onClick={()=>{
        dispatch(increment())
      }}
      > Increment
      </button>

      <button
        onClick={()=>{
          dispatch(decrement())
        }}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
      <button
        onClick={()=>{
          dispatch(incrementByAmount(Number(num)))
        }}
        style={{ marginLeft: "10px" }}
      >
        increseBy{num}
      </button>
      <input
      onChange={(e)=>setnum(e.target.value)}
      type="number" name="" id="" placeholder="Select Number" value={num} />
    </div>
  );
}

export default App;

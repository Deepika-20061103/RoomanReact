import React, { useState,useCallback } from 'react'
function App3(){
    const [count,setCount]=useState(0);
    const sum=useCallback(()=>{
        let s=0;
        for(let i=0;i<=count;i++){
            s=s+i;
        }
        console.log("sum:",s)
    },[count]);

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count +1)}>
        Increment
      </button>
    <button onClick={sum}>sum</button>
    </div>
  )
}

export default App3

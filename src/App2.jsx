import React, { useMemo, useState } from 'react'
export function App2(){
    const [count1,setcount1]=useState(0);
        const [count2,setcount2]=useState(0);


const double=useMemo(()=>{
    console.log("calculating..");
    return count1*2
},[count1])
  return (
    <div>
      <h2>count1 : {count1}</h2>
      <button onClick={()=>setcount1(count1+1)}>increase count</button>
      <h2>Double: {double}</h2>

      <hr />

      <h2>count1 : {count2}</h2>
      <button onClick={()=>setcount2(count2+1)}>increase count</button>
    </div>
  )
}

export default App2

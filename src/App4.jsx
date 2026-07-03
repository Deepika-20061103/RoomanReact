import React, { useState } from "react";

 function App4(){
    const [count, setCount] = useState(0);

  const showCount = () => {
    console.log(count);
  };
   return (
    <>

    <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={showCount}>
        Show
      </button>
    </>
  );
}

export default App4 ;

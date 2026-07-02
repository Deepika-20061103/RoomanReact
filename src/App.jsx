import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [dogs, setdogs] = useState([]);

  const getdog=() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setdogs((prevDogs) => [...prevDogs, data.message]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
useEffect(() => {
    getdog(); // Load first dog image when page opens
  }, []);
 return (
  <>
    <div className="container">
  <button onClick={getdog}>Click</button>
</div>

<div className="dog-gallery">
  {dogs.map((dog, index) => (
    <img
      key={index}
      src={dog}
      alt={`Dog ${index}`}
      width="250"
    />
  ))}
</div>
  </>
);
}
export default App;
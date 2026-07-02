import React, { useState } from "react";

const App1 = () => {
  const [img, setImage] = useState("");

  const click = () => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.addEventListener("load", () => {
      setImage(xhr.response.message);
      console.log(xhr);
    });

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
  };

  return (
    <div>
      <img src={img} alt="Dog" width="300" />
      <br />
      <button onClick={click}>
        Get Dog Image
      </button>
    </div>
  );
};

export default App1;
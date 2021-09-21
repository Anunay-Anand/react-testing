// importing React and other important libraries
import React, { useState } from "react";

// Importing custom components
import Output from "./Output";

const Greeting = () => {
  // Maintaing the changing text with state
  const [changedText, setChangedText] = useState(false);

  // Text changing handler function
  const textChangeHandler = () => {
    setChangedText(true);
  };

  return (
    <React.Fragment>
      <h2>Hello Client!</h2>
      {!changedText && <p>Nice to see you</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={textChangeHandler}>Change Text</button>
    </React.Fragment>
  );
};

export default Greeting;

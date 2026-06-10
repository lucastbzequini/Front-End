import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { StrictMode } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";
import { useState } from "https://esm.sh/react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}



function Board() {
 return (
 <>
 <div className="board-row">
 <Square  />
 <Square />
 <Square />
 </div>
     <div className="board-row">
 <Square />
 <Square />
 <Square />
 </div>
     <div className="board-row">
 <Square />
 <Square />
 <Square />
 </div>
     </>
     );
  }   
     
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);
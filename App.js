import React from "react";
import ReactDOM from "react-dom/client"; 

const heading = <h1 className="root"> This is heading...</h1>

const heading2 = React.createElement("h1",{},"This is heading2..."); 

const root = ReactDOM.createRoot(document.getElementById("root")); 




console.log(heading);
console.log(heading2);

root.render(heading); 
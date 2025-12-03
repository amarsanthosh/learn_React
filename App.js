import React from "react";
import ReactDOM from "react-dom/client"; 


/*
<div id = "parent">
    <div id = "child">
        <h1> Iam an h1 tag </h1>
        <h2> Iam an h2 tag </h2>
    </div>
</div>        

*/



const heading2 = React.createElement("h1",{id:"heading"},"Hello WOrld from React..."); 
const root2 = ReactDOM.createRoot(document.getElementById("root")); 

const nestedstruct = React.createElement("div",{id : "parent"}, React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Iam h1 tag"), 
    React.createElement("h2",{},"Iam h2 tag"),    
])); 



console.log(heading2); //Object 

root2.render(heading2);
root2.render(nestedstruct);
root2.render(heading2);
root2.render(nestedstruct);
import React from "react";
import ReactDOM from "react-dom/client"; 


//React element
const heading = <div><h1
 className="root"> 
This is heading...
this lala
</h1></div>


//React Functional components are  JS function which return JSX or react element ! 

// const Heading = () => {
//     return <h2> This is a react Component </h2>
// }

const Title = () => (
    <h1> The TiTle... </h1>
);


const Heading = () => (
  <>
    <h2>{heading}</h2>
    <Title/>
    <Title></Title>
    {Title()} 

    <h2>This is a react Component</h2>
  </>
);




const root = ReactDOM.createRoot(document.getElementById("root")); 




console.log(heading);

root.render(heading); 
root.render(<Heading/>)
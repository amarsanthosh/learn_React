import { useContext } from "react";
import StoreContext from "../utils/StoreContext";

const Carttt =() => {

    const {addedItems} = useContext(StoreContext); 

    console.log(addedItems); 
    return (
    <div>
        <h1>Hello</h1> 
        {
            addedItems.map(id=>(<p>THe ResId : {id}</p>))
        }
    </div>
    )
}

export default Carttt; 
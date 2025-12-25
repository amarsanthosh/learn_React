import { createContext } from "react";

const StoreContext = createContext({
    addedItems : [],
    setAddedItems : ()=>{}
});

export default StoreContext; 
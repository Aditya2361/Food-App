import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)
const StoreContextProvider =(props)=>{
    const [cartitems, setcartitems]= useState({});
    const addtocart = (itemId)=>{
        if(!cartitems[itemId]){
            setcartitems((prev)=>({...prev,[itemId]:1}))

        }
        else{
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removefromcart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cartitems)
    },[cartitems])
    const contextValue={
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
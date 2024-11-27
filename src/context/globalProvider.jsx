import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name:"Luis",id:12377758});

    function addToCart(){
        console.log("Adding to cart...");
    }

    function removeFromCart(){
        console.log("Removing from cart...");
    }

    function clearCart(){
        console.log("Cart Cleared!");
    }

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
import GlobalContext from "../context/globalContext";
import "./styles/quantityPicker.css";
import { useContext, useState } from "react";

function QuantityPicker(){

    const [quantity, setQuantity] = useState(1);

    function increase(){
        const val = quantity + 1;
        setQuantity(val);
    }

    function decrease(){
        if(quantity === 1) return;

        const val = quantity - 1;
        setQuantity(val);
    }

    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-dark" onClick={decrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-dark" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
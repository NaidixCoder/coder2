import { useState } from "react"
import { Link } from "react-router-dom";

function ItemCount( {stock, initial, onAdd} ) {

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => quantity < stock && setQuantity(quantity + 1);
    const handleDectrement = () => quantity > 0 && setQuantity(quantity - 1);

    return (
        <div className="bg-main w-auto inline-block  flex-col justify-center items-center p-4">
            <div className="flex p-2 justify-center gap-4 items-center">
                <button onClick={handleIncrement} className="bg-second py-1 px-3 rounded-sm text-main">+</button>
                <span className="text-font text-center min-w-[1.2rem]">{quantity}</span>
                <button onClick={handleDectrement} className="bg-second py-1 px-3 rounded-sm text-main">-</button>
            </div>
            <div className="px-2 flex justify-center">
                <Link to="/cart" onClick={ () => onAdd(quantity)} disabled={!stock} className="bg-second py-1 px-3 rounded-sm text-main w-[100%] text-center">Agregar</Link>
            </div>
        </div>
    )
}

export default ItemCount
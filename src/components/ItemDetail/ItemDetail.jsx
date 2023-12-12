import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


function ItemDetail({id, name, img, categoria, desc, price, stock}) {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (
        <article className="mt-10 place-items-center grid grid-cols-2 grid-rows-2 mx-[10%]" >
                <picture className="border-2 col-start-1 row-start-1 row-end-3" >
                    <img src={img} className="col-start-1 col-end-2 row-start-1 row-end-3 "/>
                </picture>
            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                <header>
                    <h2 className="text-center text-3xl text-main uppercase pt-6 pb-4">{name}</h2>
                </header>
                <section className="flex gap-2 flex-col text-lg">
                    <p className="uppercase">Categoria: {categoria}</p>
                    <p>Descripcion: {desc}</p>
                    <p>Precio: $ {price}</p>
                </section>
            </div>    
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="">Terminar Compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
                        )
                    }

                </footer>

        </article>
    )
}

export default ItemDetail;
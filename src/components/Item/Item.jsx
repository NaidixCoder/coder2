import { Link } from "react-router-dom";

function Item({name, img, price, stock, id}) {
    
    return (
        <>
        <article className="h-auto max-w-[240px] p-5 rounded-md bg-main overflow-hidden text-white"> 
            <header >
                <h2 className="pb-2">{name}</h2>
            </header>
            <Link to={`/item/${id}`}>
                <picture className="block rounded-sm overflow-hidden" >
                    <img src={img} className="h-[200px] object-cover min-w-[200px]"/>
                </picture>
            </Link>
            <section className="pt-2">
                <p>Precio: $ {price}</p>
                <p>Stock: {stock}</p>
            </section>
            <footer className="pt-2 grid place-items-center">
                <Link to={`/item/${id}`} className="bg-second py-1 px-3 rounded-sm text-main">Ver detalles</Link>
            </footer>
        </article>
        </>
    )
}

export default Item;
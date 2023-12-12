import { useState, useEffect } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();
    
    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error);
            })

    }, [categoryId])

    return (
        <div>
            <h1 className="text-3xl text-center font-semibold mt-10 text-main">{greeting}</h1>
            <div>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;
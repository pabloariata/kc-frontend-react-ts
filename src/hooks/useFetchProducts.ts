import { useState, useEffect } from "react";
import { getProductsApi } from "../api/Product";


export const useFetchProducts = () => {

    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getProducts = async () => {
        const products = await getProductsApi();
        console.log(products);
        setProducts(products!);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getProducts();
    }, [])

    return {
        products,
        isLoading
    }

}
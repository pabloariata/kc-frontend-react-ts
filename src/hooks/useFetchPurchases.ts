import { useState, useEffect, useContext } from "react";
import { getPurchasesApi } from '../api/Purchase';
import { CustomerContext } from "../context/CustomerContext";


export const useFetchPurchases = () => {

    const { customer } = useContext( CustomerContext );

    const customerId = customer.id;

    
    const [purchases, setPurchases] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getPurchases = async (customerId: number) => {
        const purchases = await getPurchasesApi(customerId);
        console.log(purchases);
        setPurchases(purchases!);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getPurchases(customerId);
    }, [])

    return {
        purchases,
        isLoading
    }

}
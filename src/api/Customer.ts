import { useContext } from "react";
import { CustomerInterface } from "../interfaces/interrfaces";
import { CustomerContext } from '../context/CustomerContext';
import { api_url } from "../global/environment";


export const SignUp = async (customer: CustomerInterface) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    };
    
    const url = `${api_url}customers`;

    const resp = await fetch(url, requestOptions);

    const customerData = await resp.json();

    return customerData.newCustomer;

}
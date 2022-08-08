import { api_url } from "../global/environment";



export const getPurchasesApi = async (customerId: number) => {

    const url = `${api_url}purchases/${customerId}`;
    const resp = await fetch(url);
    const purchasesData = await resp.json();

    return purchasesData.purchases;
}

export const sendPurchase = async (ProductId: number, quantity: number, CustomerId: number) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({CustomerId, quantity, ProductId})
    };

    const url = `${api_url}purchases`;
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();

    return data;
}
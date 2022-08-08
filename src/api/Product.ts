import { api_url } from "../global/environment";


export const getProductsApi = async () => {

    const url = `${api_url}products`;
    const resp = await fetch(url);

    const productData = await resp.json();
  
    // console.log(productData);

    return productData.products;

}
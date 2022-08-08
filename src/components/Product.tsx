import { useContext, useState } from "react";
import { sendPurchase } from "../api/Purchase";
import { CustomerContext } from "../context/CustomerContext";

export const Product = ({name, price, id}: any) => {

    const { customer, logged, setWallet } = useContext( CustomerContext );

    console.log(name);
    console.log(price);
    console.log(id);

    const [quantityValue, setQuantityValue] = useState(1);

    const onQuantityChange = (event: any) => {
        setQuantityValue(event.target.value);
    }

    const purchaseItem = async () => {

        const resp = await sendPurchase(id, quantityValue, customer.id);
        setQuantityValue(1);
        const newWallet = resp.wallet;
        setWallet(newWallet);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Unit Price: {price}</h6>
                    <input className="input-quantity" type="phone"
                    value={quantityValue}
                    onChange={ (event) =>  onQuantityChange(event)}/>
                    <br /><br />
                     
                  <button onClick={purchaseItem} className="btn btn-success"> BUY IT </button>
                </div>
            </div>
        </>
    )
}
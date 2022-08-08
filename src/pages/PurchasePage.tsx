import { Product } from '../components/Product';
import { Purchase } from '../components/Purchase';
import { useFetchPurchases } from '../hooks/useFetchPurchases';
export const PurchasePage = () => {


    const {purchases, isLoading} = useFetchPurchases();

    return (
        <>
            <h1>My Purchases</h1>
            <hr />

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                {purchases.map((purchase: any) => 
                    <Purchase key = {purchase.id} 
                   {...purchase}
                    />
                )}
                </tbody>
            </table>

            

        </>
    )
}
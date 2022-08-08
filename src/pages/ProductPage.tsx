
import { useFetchProducts } from '../hooks/useFetchProducts';
import { Product } from '../components/Product';


export const ProductPage = () => {
    
    const {products, isLoading} = useFetchProducts();

    console.log(products);

    return (
        <>
            <h1>Available products</h1>
            <hr />

            <div className="card-container">
                {products.map((product: any) => 
                    <Product key = {product.id} 
                   {...product}
                    />
                )}
            </div>

        </>
    )
}
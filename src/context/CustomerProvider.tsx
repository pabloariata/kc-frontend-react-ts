import { useState } from "react"
import { CustomerContext } from "./CustomerContext"

interface props {
    children: JSX.Element | JSX.Element[]
}

export const CustomerProvider = ({ children }: props) => {

    const [customer, setCustomer] = useState({id:0, name: ''});
    const [logged, setLogged] = useState(false);
    const [wallet, setWallet] = useState(0);

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <CustomerContext.Provider value={{ customer, setCustomer, logged, setLogged, wallet, setWallet }}>
            { children }
        </CustomerContext.Provider>
    )
}
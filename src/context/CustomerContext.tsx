import { createContext } from 'react';

export const CustomerContext = createContext({
    customer: {id: 0, name: ''},
    logged: false,
    setCustomer: (customer: any) => {},
    setLogged: (logged: any) => {},
    setWallet: (wallet: number) => {},
    wallet: 0
});
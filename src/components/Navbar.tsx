import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CustomerContext } from '../context/CustomerContext';


export const NavBar = ()  => {

    const { customer, logged, wallet } = useContext( CustomerContext );

    return (
       
        <>
         {logged && 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-3">
                <span className='white'>Hello, {customer.name}</span>
                   <span className='wallet-amount'><small>Your wallet amount is</small> {Math.round(wallet*100)/100}</span>
                
                   <NavLink className={({isActive}) => {
                    
                        return `nav-link ${isActive? 'active' : ''}`
                    }} 
                    to="/products">
                        Products
                    </NavLink>
               
                   <NavLink className={({isActive}) => {
                    
                        return `nav-link ${isActive? 'active' : ''}`
                    }} 
                    to="/purchases">
                        My Purchases
                    </NavLink>
                
            </nav>

        }
           
        </>
    )
}
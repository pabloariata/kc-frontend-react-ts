import { useContext, useState } from 'react'
import {Routes, Route, Navigate, Link} from 'react-router-dom';

import { CustomerProvider } from './context/CustomerProvider';

import { NavBar } from './components/Navbar';

import { RegisterPage } from './pages/RegisterPage';
import { ProductPage } from './pages/ProductPage';
import { PurchasePage } from './pages/PurchasePage';
import { CustomerContext } from './context/CustomerContext';

import './App.scss'
import { Header } from './components/Header';

export const App = () => {

  const { customer, logged } = useContext( CustomerContext );
  
  return (
          <CustomerProvider>
            <Header/>
            <NavBar/> 
            <Routes>
                <Route path="/" element = {<RegisterPage/>}/>
                <Route path="/products" element = {<ProductPage/>}/>
                <Route path="/purchases" element = {<PurchasePage/>}/>

            </Routes>
        </CustomerProvider>
  )
 
}

export default App

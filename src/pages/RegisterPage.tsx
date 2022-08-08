import { useContext, useState } from "react"
import { SignUp } from "../api/Customer";
import { CustomerInterface } from "../interfaces/interrfaces";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from '../context/CustomerContext';

export const RegisterPage = () => {

    const context: any = useContext( CustomerContext );

    const navigate = useNavigate();

    const onSubmit = (event: any) => {
        event.preventDefault();    
        signUp();
    }
    
    const signUp =  async () => {

        try {
            const customer: CustomerInterface = {
                name: nameValue,
                card: cardValue,
                email: emailValue,
                password: passwordValue
            }
            const customerData = await SignUp(customer);
            context.setCustomer(customerData);
            context.setLogged(true);
            navigate("/products", { replace: true });
            
        } catch (error) {
            throw new Error("Error al registrarse");
        }
    }

    const [nameValue, setNameValue] = useState('');
    const [cardValue, setCardValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onNameChange = (event: any) => {
        event.preventDefault();
        setNameValue(event.target.value);
    }
    const onCardChange = (event: any) => {
        event.preventDefault();
        const value = event.target.value.replace(/\D/g, "");
        setCardValue(value);
    }
    const onEmailChange = (event: any) => {
        event.preventDefault();

        setEmailValue(event.target.value);
    }
    const onPasswordChange = (event: any) => {
        event.preventDefault();

        setPasswordValue(event.target.value);
    }

    return (
        <>  
            
            <h4>Register your account</h4>
            <hr />
            <div className="container form-container">
            <form className="" onSubmit={(event) => onSubmit(event)}>
            <div className="mb-3 form-input">
                <label className="form-label">Name</label>
                <input 
                type="text" 
                autoComplete="off"
                className="form-control" 
                id="name" 
                value={nameValue}
                onChange={ (event) =>  onNameChange(event)}>
                </input>
            </div>
            <div className="mb-3 form-input">
                <label className="form-label">Email address</label>
                <input 
                type="email" 
                autoComplete="off"
                className="form-control"
                 id="email" 
                 value={emailValue}
                onChange={ (event) =>  onEmailChange(event)}>
                </input>
            </div>
            <div className="mb-3 form-input">
                <label className="form-label">Password</label>
                <input
                 type="password" 
                 className="form-control" 
                 id="password"
                 minLength={6}
                value={passwordValue}
                onChange={ (event) =>  onPasswordChange(event)}>
                 </input>
            </div>
            <div className="mb-3 form-input">
                <label className="form-label">Credit/Debit Card Number</label>
                <input 
                type="text" 
                autoComplete="off"
                className="form-control" 
                id="card"  
                value={cardValue}
                onChange={ (event) =>  onCardChange(event)}
                maxLength={12}>
                </input>
            </div>
            
            <button type="submit" className="btn btn-danger">Sign Up</button>
            </form>

            </div>


        </>
    )
}
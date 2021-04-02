import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const [product, setProduct] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        fetch(`http://localhost:4200/product/${id}`)
        .then(result => result.json())
        .then(data => {
            setProduct(data)
           // console.log(data);
        })
    }, [])

    const handleProductOrder = (data)=>{
        console.log('Order submitted');
        const orderDetails = {...loggedInUser, ...product, date: new Date() }
        console.log(orderDetails);
        fetch('http://localhost:4200/addOrder', {
           method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log('server side response', data);
            alert('Order placed successfully');
        });
        
    }
    return (
        <div className="container mt-3">
            <h1>Checkout</h1><br/>
            <table class="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <th colspan="2">Total</th>
                        <th>{product.price}</th>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleProductOrder} className="btn btn-success" style={{float: 'right'}}>Checkout</button>
        </div>
    );
};

export default Checkout;
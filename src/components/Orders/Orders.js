import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orderedProduct, setOrderedProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch("https://banana-crisp-28043.herokuapp.com/orderedProduct")
            .then(result => result.json())
            .then(data => {
                setOrderedProduct(data)
                console.log(data);
            })
    }, [])

    let newOrders = [];
    for (let i = 0; i < orderedProduct.length; i++) {
        if (orderedProduct[i].email === loggedInUser.email) {
            newOrders[i] = orderedProduct[i];
            console.log(newOrders);
        }
    }
    return (
        <div className="container mt-3 text-center">
            <h1 className="text-center">Congratulations {loggedInUser.name}! Your have {newOrders.length} orders</h1><br />
            {
                newOrders.length === 0 &&
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
            {
                <table className="table ordersTable">
                    <thead>
                        <tr className="bg-primary">
                            <th>Description</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderedProduct.map(pd =>
                            loggedInUser.email === pd.email && <tr>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td>{pd.date}</td>
                                <td>{pd.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default Orders;
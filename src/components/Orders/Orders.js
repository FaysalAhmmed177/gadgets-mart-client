import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orderedProduct, setOrderedProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4200/orderedProduct")
            .then(result => result.json())
            .then(data => {
                setOrderedProduct(data)
                console.log(data);
            })
    }, [])
    return (
        <div className="container mt-3">
            <h1>Order List</h1><br />
            <table class="table caption-top">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            orderedProduct.map(pd => {
                                console.log(pd);
                                return <tr>
                                    <td>{pd.name}</td>
                                    <td>{pd.price}</td>
                                    <td>{pd.date}</td>
                                    <td>{pd.email}</td>
                                </tr>
                            })
                        }
                </tbody>
            </table>

        </div>
    );
};

export default Orders;
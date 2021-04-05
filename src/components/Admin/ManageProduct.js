import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    //console.log(products);
    useEffect(() => {
        fetch('https://banana-crisp-28043.herokuapp.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                //console.log(data);
            })
    }, [])

    const handleDelete = (id) => {
        console.log('Delete item', id);
        fetch(`https://banana-crisp-28043.herokuapp.com/delete/${id}`,
            {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
              
            })
    }

    return (
        <div className="container p-3 text-center">
            <h1 className="mt-3 mb-3 text-left">Manage Product</h1>
            {
                products.length === 0 &&
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
            <table className="table productTable">
                <thead>
                    <tr className="bg-primary">
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(pd =>

                        <tr>
                            <td>{pd.name}</td>
                            <td>1</td>
                            <td>{pd.price}</td>
                            <td><button className="btn btn-success"><EditIcon /></button> <button className="btn btn-danger" onClick={() => handleDelete(pd._id)}>< DeleteIcon /></button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
};

export default ManageProduct;
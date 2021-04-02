import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageProduct = () => {
    const [products, setProducts] = useState([])

   useEffect(() => {
       fetch('http://localhost:4200/products')
       .then(response => response.json())
       .then(data => {
           setProducts(data);
           console.log(data);
       })
   }, [])

    return (
        <div>
            <h1 className="mt-3 mb-5">Manage Product</h1>
            <table class="table caption-top">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        products.map(pd => {
                            console.log(pd);
                            return <tr>
                                <td>{pd.name}</td>
                                <td>1</td>
                                <td>{pd.price}</td>
                                <td><button className="btn btn-success"><EditIcon/></button> <button className="btn btn-danger">< DeleteIcon/></button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
          
        </div>
    );
};

export default ManageProduct;
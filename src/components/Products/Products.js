import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = ({ product }) => {
    //console.log(product);
    return (
        <div>
            <div className="col-md-3 mt-3">
                <div class="card p-3 mb-3"  >
                    <img style={{ height: '150px', width: '180px'}} src={product.imageURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="d-flex h-50 justify-content-center align-items-center">
                            <h5 class="card-title">{product.name} - {product.model}</h5>
                        </div><br/>
                        <div className="d-flex justify-content-center align-items-center justify-content-between">
                            <h5 class="card-text ">{product.price}</h5>
                            <Link to={`/checkout/${product._id}`}><button className="btn btn-primary rounded">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
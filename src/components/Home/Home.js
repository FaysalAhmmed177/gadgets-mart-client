import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://banana-crisp-28043.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-around">
                    {products.length === 0 &&
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    }
                {products.map(product => <Products product={product}></Products>)}
            </div>
        </div>
    );
};

export default Home;
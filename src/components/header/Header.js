import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-sm mt-3">
                <div className='container'>
                    <h2 className ="navbar-brand text-dark">GADGETS MART</h2>
                    
                    <div className="navbar-nav d-flex">
                       <a href="/home" className="text-dark link">Home</a>
                       <a href="/orders" className="text-dark link">Orders</a>
                       <a href="/admin" className="text-dark link">Admin</a>
                       <a href="/deals" className="text-dark link">Deals</a>
                       <a href="/login"><button class="btn btn-success link">Login</button></a>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;
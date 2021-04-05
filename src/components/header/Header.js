import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div >
            <nav className="navbar navbar-expand-sm mt-3">
                <div className='container'>
                    <h2 className="navbar-brand">GADGETS MART</h2>

                    <div className="navbar-nav d-flex">
                        <Link to="/home" className="text-dark link">Home</Link>
                        <Link to="/orders" className="text-dark link">Orders</Link>
                        <Link to="/admin" className="text-dark link">Admin</Link>
                        <Link to="/deals" className="text-dark link">Deals</Link>
                        {
                            loggedInUser.name? <img src={loggedInUser.photo} style={{height: '50px', width: '50px'}} className="rounded-circle ml-4" alt=""/>
                            :
                            <Link to="/login"><button class="btn btn-primary link">Login</button></Link>
                        }
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
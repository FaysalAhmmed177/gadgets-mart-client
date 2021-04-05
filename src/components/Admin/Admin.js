import React, { useContext, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Admin.css'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ManageProduct from './ManageProduct';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { path, url } = useRouteMatch();
    return (
        <div className="row">
            <div className="col-md-3 p-4 Sidebar" style={{height: '150vh'}}>
                <Link to="/home" className="text-white" id="goToHome">GADGETS MART</Link><br /><br />
                <Link to={`${url}/manageProduct`} className="text-white " ><DashboardIcon />   Manage Product</Link><br /><br />
                <Link to={`${url}/addProduct`} className="text-white text-center"><AddIcon /> Add Product</Link><br /><br />
                <Link to={`${url}/editProduct`} className="text-white text-center"><EditIcon />  Edit Product</Link><br />

            </div>
            <div className="col-md-9">
                <Switch>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct />
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/editProduct`}>
                        <EditProduct />
                    </Route>
                </Switch>

            </div>
        </div>
    );
};

export default Admin;
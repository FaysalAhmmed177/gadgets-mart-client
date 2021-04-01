import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    const [click, setClick] = useState({
        productManage: false,
        productAdd: false,
        productDelete:false
    });
    return (
        <div>
            <Link to="/home" className="text-white" id="goToHome">Fresh vally</Link><br /><br />
            <Link  className="text-white text-center" ><DashboardIcon />   Manage Product</Link><br /><br />
            <Link to="/addProduct" className="text-white text-center" ><AddIcon /> Add Product</Link><br /><br />
            <Link to="/editProduct" className="text-white text-center" ><EditIcon />  Edit Product</Link><br />
        </div>
    );
};

export default Sidebar;
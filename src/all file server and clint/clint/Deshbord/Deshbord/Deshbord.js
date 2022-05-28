import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Myprofile from '../MyProfile/Myprofile';


const Deshbord = () => {
    return (
        <div class="drawer drawer-mobile bg-teal-600">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
                <Myprofile></Myprofile>
            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-78 bg-teal-800 text-white">
                    <li><Link to="/deshbord/myorders">My Orders</Link></li>
                    <li><Link to="/deshbord/addreview">Add A Review</Link></li>
                    <li><Link to="/deshbord/profile">My Profile</Link></li>
                    <li><Link to="/deshbord/allorders">Manage All Orders</Link></li>
                    <li><Link to="/deshbord/addProduct">Add A Product</Link></li>
                    <li><Link to="/deshbord/admin">Make Admin</Link></li>
                    <li><Link to="/deshbord/manageProducts">Manage Products</Link></li>
                </ul>

            </div>

        </div>
    );
};

export default Deshbord;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebaseinit';
import useAdmin from '../../Hooks/useAdmin';
import Myprofile from '../MyProfile/Myprofile';


const Deshbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile bg-teal-600">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-center mt-4 text-white'>Welcome to Hero Paint Tools Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-78 bg-teal-800 text-white">
                    <li><Link to="/deshbord/myorders">My Orders</Link></li>
                    <li><Link to="/deshbord/addreview">Add A Review</Link></li>
                    <li><Link to="/deshbord/profile">My Profile</Link></li>
                    {admin && <>
                        <li><Link to="/deshbord/manageProducts">Manage Products</Link></li>
                        <li><Link to="/deshbord/allorders">Manage All Orders</Link></li>
                        <li><Link to="/deshbord/addProduct">Add A Product</Link></li>
                        <li><Link to="/deshbord/admin">Make Admin</Link></li>
                    </>}


                </ul>

            </div>

        </div>
    );
};

export default Deshbord;
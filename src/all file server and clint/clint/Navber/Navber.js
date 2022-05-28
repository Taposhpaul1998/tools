import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebaseinit';

const Navber = () => {
  const [user] = useAuthState(auth);
  const handelsignOut = () => {
    signOut(auth);
  }
  const menuTitle = <>
    <li><Link to='/'>HOME</Link></li>
    <li><Link to='/blog'>BLOG</Link></li>
    <li><Link to='/reviews'>REVIEWS</Link></li>
    <li>
      {user && <Link to='/deshbord'>DESHBOARD</Link>}
    </li>
    <li>
      {
        user ?
          <Link to="/#" onClick={handelsignOut}>SIGN OUT</Link> :
          <Link to='/login'>LOGIN</Link>
      }
    </li>

  </>
  return (
    <div className="navbar bg-teal-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box text-white font-semibold w-52">
            {menuTitle}
          </ul>
        </div>
        <img className='w-16' src="https://i.ibb.co/cYDRRCx/paint-logo-removebg-preview.png" alt="" /><a className="btn btn-ghost normal-case text-2xl font-bold text-white"> Hero Paint Tools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white font-semibold p-0">
          {menuTitle}
        </ul>
      </div>

    </div>
  );
};

export default Navber;
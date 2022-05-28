import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebaseinit';
import Loading from '../../Shear/Loading/Loading';


const RequireAuth = ({ children }) => {
    const [user, Loadings] = useAuthState(auth);
    const location = useLocation();
    if (Loadings) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;
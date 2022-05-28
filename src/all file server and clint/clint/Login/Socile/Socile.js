import React from 'react';
import auth from '../../../firebaseinit';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shear/Loading/Loading';
import useToken from '../../Hooks/useToken';
import { useNavigate } from 'react-router-dom';

const Socile = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();

    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className="text-red-600">Error:{error?.message}</p>
    }
    if (token) {
        navigate('/deshbord');
    }
    return (
        <div>
            {errorElement}
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full max-w-xs hover:bg-teal-800">Continue with google</button>
        </div>
    );
};

export default Socile;
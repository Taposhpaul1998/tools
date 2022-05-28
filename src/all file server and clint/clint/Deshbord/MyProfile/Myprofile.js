import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseinit';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-white'>{user.displayName}</h2>
            <h2 className='text-white'>{user.email}</h2>
        </div>
    );
};

export default Myprofile;
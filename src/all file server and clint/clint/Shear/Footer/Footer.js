import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='bg-teal-800 border-t-2'>
            <p className='text-center text-white font-semibold text-sm py-10'> &copy; {year} Cycle House All Rights Reserved</p>
        </div>
    );
};

export default Footer;
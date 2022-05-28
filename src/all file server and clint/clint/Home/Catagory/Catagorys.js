import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Catagory from './Catagory';

const Catagorys = () => {
    const [products] = useProducts();
    return (
        <div className='my-10'>
            <h2 className='font-bold text-3xl text-white text-center my-8'>Catagory</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3 m-10 mt-20'>
                {
                    products?.slice(-6).map(product => <Catagory
                        key={product._id}
                        product={product}
                    ></Catagory>)
                }
            </div>

        </div>
    );
};

export default Catagorys;
import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2 className='font-bold text-3xl text-white text-center mt-8'>Our Products</h2>

            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 m-10 mt-20 ">
                {
                    products?.slice(- 6).map(product => <Tool
                        key={product._id}
                        product={product}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;
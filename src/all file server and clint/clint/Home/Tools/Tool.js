import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ product }) => {
    const { name, img, price, description, orderQuantity, quantity, _id } = product;
    const navigate = useNavigate();
    const handelPurchase = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div class="card card-compact w-96 bg-base-200 shadow-xl gap-4 mb-4">
            <figure><img className='max-h-[220px] rounded mt-6' src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='font-bold text-sm'>Available quantity:{quantity}</p>
                <p className='font-bold text-sm'>Minimum order :{orderQuantity}</p>
                <p className='font-bold text-sm'>Price:{price}/pcs</p>
                <div class="card-actions justify-center">
                    <button onClick={() => handelPurchase(_id)} class="btn btn-accent bg-teal-900 text-white font-bold">Purchase now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
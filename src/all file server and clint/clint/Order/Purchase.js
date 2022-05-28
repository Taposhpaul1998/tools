import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebaseinit';
import Footer from '../Shear/Footer/Footer';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { productid } = useParams();
    const { register, handleSubmit } = useForm();
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/products/${productid}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const onSubmit = data => {
        const url = "http://localhost:5000/orders";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };


    return (
        <div className='bg-teal-600'>
            <div className="w-[75%] mx-auto block lg:flex h-screen lg:justify-between items-center bg-hero-pattern">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">

                    <figure><img className='max-h-[220px] rounded mt-6' src={product.img} alt={product.name} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className='font-bold text-sm'>Available quantity:{product.quantity}</p>
                        <p className='font-bold text-sm'>Minimum order :{product.orderQuantity}</p>
                        <p className='font-bold text-sm'>Price:{product.price}/pcs</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold  text-center">Purchase Now</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="name" value={user.displayName} class="input input-bordered w-full max-w-xs" readOnly {...register("name")} />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" value={user.email} class="input input-bordered w-full max-w-xs" readOnly {...register("email")} />
                            <label class="label">
                                <span class="label-text">Pruduct Name</span>
                            </label>
                            <input type="name" value={product.name} class="input input-bordered w-full max-w-xs" readOnly {...register("pruductName")} />

                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            {Error}
                            <input type="number" placeholder={product.orderQuantity} class="input input-bordered w-full max-w-xs" required {...register("quantity")} />

                            <label class="label">
                                <span class="label-text">Pruduct Image</span>
                            </label>
                            <input type="img" value={product.img} class="input input-bordered w-full max-w-xs" readOnly {...register("img")} />

                            <input type="submit" value={"Purchase"} class="btn btn-accent w-full max-w-xs text-lg font-normal mt-3" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;
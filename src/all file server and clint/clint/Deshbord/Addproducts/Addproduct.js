import React from 'react';
import { useForm } from 'react-hook-form';


const Addproduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = "http://localhost:5000/products";
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
        <div className="card w-96 mx-auto bg-base-100 shadow-xl my-5">
            <div className="card-body">
                <h2 className="text-xl font-semibold  text-center">Purchase Now</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="name" class="input input-bordered w-full max-w-xs" required {...register("name")} />
                    <label class="label">
                        <span class="label-text">Pruduct Image</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs" required {...register("img")} />
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs" required {...register("description")} />
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input type="number" placeholder='price' class="input input-bordered w-full max-w-xs" required {...register("price")} />
                    <label class="label">
                        <span class="label-text">Minimum order </span>
                    </label>
                    <input type="number" class="input input-bordered w-full max-w-xs" required {...register("orderQuantity")} />
                    <label class="label">
                        <span class="label-text">Available quantity</span>
                    </label>
                    <input type="number" class="input input-bordered w-full max-w-xs" required {...register("quantity")} />



                    <input type="submit" value={"Add Product"} class="btn btn-accent w-full max-w-xs text-lg font-normal mt-3" />
                </form>
            </div>

        </div>
    );
};

export default Addproduct;
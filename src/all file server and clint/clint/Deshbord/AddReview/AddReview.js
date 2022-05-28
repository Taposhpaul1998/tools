import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebaseinit';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = "http://localhost:5000/review";
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
                <h2 className="text-xl font-semibold  text-center">Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" value={user.displayName} class="input input-bordered w-full max-w-xs" readOnly {...register("name")} />
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input type="text" placeholder='description' class="input input-bordered w-full max-w-xs" required {...register("description")} />
                    <label class="label">
                        <span class="label-text">Rating</span>
                    </label>
                    <input type="number" placeholder='star' class="input input-bordered w-full max-w-xs" required {...register("rating")} />




                    <input type="submit" value={"Add Review"} class="btn btn-accent w-full max-w-xs text-lg font-normal mt-3" />
                </form>
            </div>

        </div>
    );
};

export default AddReview;
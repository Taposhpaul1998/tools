import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../../firebaseinit';
import Loading from '../../Shear/Loading/Loading';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const email = user.email

    const { data: users, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/user/${email}`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div className='block lg:flex lg:justify-around p-16'>
            <div className='card w-96'>
                <div className='mb-4'><img className='rounded-full' src={user.photoURL} alt="" /></div>
                <h2 className='text-white text-lg font-semibold mb-2'>User Name: {users[0]?.name}</h2>
                <h2 className='text-white text-lg font-semibold mb-2'>User Name: {users[0]?.email}</h2>
                <p className='text-white font-semibold mb-2'>Education: {users[0]?.education}</p>
                <p className='text-white font-semibold mb-2'>Location: {users[0]?.location}</p>
                <p className='text-white font-semibold mb-2'>Phone: {users[0]?.phone}</p>
                <p className='text-white font-semibold mb-2'>LinkedIn profile link: <a>{users[0]?.LinkedIn}</a></p>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-xl font-bold text-center text-teal-800'>Update Profile</h2>
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder={users[0]?.name} class="input input-bordered w-full max-w-xs"  {...register("name")} />
                        <label class="label">
                            <span class="label-text">Education</span>
                        </label>
                        <input type="text" placeholder='education' class="input input-bordered w-full max-w-xs" required {...register("education")} />
                        <label class="label">
                            <span class="label-text">Location</span>
                        </label>
                        <input type="text" placeholder='city/district' class="input input-bordered w-full max-w-xs" required {...register("location")} />
                        <label class="label">
                            <span class="label-text">LinkedIn profile</span>
                        </label>
                        <input type="text" placeholder='Link' class="input input-bordered w-full max-w-xs" {...register("LinkedIn")} />
                        <label class="label">
                            <span class="label-text">Phone number</span>
                        </label>
                        <input type="number" placeholder='phone number' class="input input-bordered w-full max-w-xs" {...register("phone")} />

                        <input type="submit" value={"Update Profile"} class="btn btn-accent w-full max-w-xs text-lg font-normal mt-3" />
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Myprofile;
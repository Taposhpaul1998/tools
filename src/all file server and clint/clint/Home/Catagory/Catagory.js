import React from 'react';


const Catagory = ({ product }) => {
    const { img, name } = product

    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <figure><img className='max-h-[280px]' src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
            </div>
            <div class="card-actions justify-center mb-2">
                <button class="btn btn-accent bg-teal-900 text-white font-bold">Order now</button>
            </div>
        </div>
    );
};

export default Catagory;
import React from 'react';

const ManageProduct = ({ product, hendelDelete }) => {
    const { name, img, price, orderQuantity, quantity, _id } = product;

    return (
        <tr>
            <th><img className='w-[100px]' src={img} alt="" /></th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{orderQuantity}</td>
            <td>{quantity}</td>
            <td><button onClick={() => hendelDelete(_id)} class="btn btn-xs bg-red-600">Delete</button></td>
        </tr>
    );
};

export default ManageProduct;
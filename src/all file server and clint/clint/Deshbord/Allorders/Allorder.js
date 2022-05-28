import React from 'react';

const Allorder = ({ order }) => {
    const { pruductName, img, quantity, name, email } = order;
    return (
        <tr>
            <th><img className='w-[100px]' src={img} alt="" /></th>
            <td>{pruductName}</td>
            <td>{quantity}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button class="btn btn-xs">Remove Order</button> <button class="btn btn-xs">Payment</button></td>
        </tr>
    );
};;

export default Allorder;
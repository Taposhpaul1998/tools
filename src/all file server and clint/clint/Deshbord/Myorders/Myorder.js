import React from 'react';

const Myorder = ({ order }) => {
    const { pruductName, img, quantity } = order;
    return (
        <tr>
            <th><img className='w-[100px]' src={img} alt="" /></th>
            <td>{pruductName}</td>
            <td>{quantity}</td>
            <td><button class="btn btn-xs">Payment</button></td>
            <td><button class="btn btn-xs">Remove Order</button></td>
        </tr>
    );
};

export default Myorder;
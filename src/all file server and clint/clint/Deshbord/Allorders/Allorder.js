import React from 'react';
import { toast } from 'react-toastify';

const Allorder = ({ order, refetch }) => {
    const { pruductName, img, quantity, name, email, _id } = order;

    const hendelDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`success to deleted.`)
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th><img className='w-[100px]' src={img} alt="" /></th>
            <td>{pruductName}</td>
            <td>{quantity}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button onClick={() => hendelDelete(_id)} class="btn btn-xs">Remove Order</button></td>
        </tr>
    );
};;

export default Allorder;
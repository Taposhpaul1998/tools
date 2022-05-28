import React, { useEffect, useState } from 'react';
import Allorder from './Allorder';

const Allorders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl text-center my-4">All Orders :{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Remove Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Allorder
                                key={order._id}
                                order={order}
                            ></Allorder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorders;
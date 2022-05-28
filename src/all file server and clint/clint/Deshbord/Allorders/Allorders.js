import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shear/Loading/Loading';
import Allorder from './Allorder';

const Allorders = () => {

    const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/orders').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

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
                                refetch={refetch}
                            ></Allorder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorders;
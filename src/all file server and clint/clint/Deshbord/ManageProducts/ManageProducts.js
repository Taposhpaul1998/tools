import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const hendelDelete = (id) => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    toast.success('success to delete')
                })
        }
    }
    return (
        <div>
            <h2 className="text-2xl text-center my-4">All Products :{products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Available quantity</th>
                            <th>Minimum order</th>
                            <th>Delete product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageProduct
                                key={product._id}
                                product={product}
                                hendelDelete={hendelDelete}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
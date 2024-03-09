import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout'
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

function ManageProducts() {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoaing] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        setIsLoaing(true)
        fetch("https://panda-backend.onrender.com/product/all")
            .then((res) => res.json())
            .then((product) => {
                setProduct(product.products);
                setIsLoaing(false);
            });
    }, [isDelete]);

    //  delete product 
    const handleDeleteProduct = (id) => {

        fetch(`https://panda-backend.onrender.com/product/deleteProduct/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => {
                toast.success(data.message)
                setIsDelete(!isDelete)
            })
    }
 
    return (
        <AdminLayout>
            <h2 className='text-3xl text-center mb-4 uppercase'>List Of Products</h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: "2" }}

                className='overflow-x-auto text-center '>

                {isLoading ?
                    "Loading . . "
                    :
                    <table className='table bg-gray-50'>
                        <thead className='uppercase font-normal'>
                            <tr>
                                <th>sl No</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product && product.slice().reverse().map((pd, i) => (
                                    <tr key={pd._id}>
                                        <td>{i + 1}</td>
                                        <td>
                                            <img className='w-12 h-12 rounded-sm' src={pd.image} alt="" />
                                        </td>
                                        <td>
                                            {pd.categorie}
                                        </td>
                                        <td>
                                            {pd.price} <span className='text-sm text-blue-800'>- BDT</span>
                                        </td>
                                        <td>
                                            <CiEdit onClick={() => toast.error("edit functionality under processing")} className='text-3xl cursor-pointer bg-blue-500 p-1 text-white' />
                                        </td>
                                        <td>
                                            <AiTwotoneDelete onClick={() => handleDeleteProduct(pd._id)} className='text-3xl cursor-pointer bg-red-500 p-1 text-white' />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>}

            </motion.div>

        </AdminLayout>
    )
}

export default ManageProducts
import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import AdminLayout from '../AdminLayout'
import { toast } from 'react-toastify'
import {motion} from "framer-motion"

function AddProduct() {
  const [imgLoading, setImgLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState({
    title: "",
    price: "",
    desc: "",
    categorie: "",
    image: ""
  })

  const handleChange = (e) => {
    const text = (e.target.value).toLowerCase()
    setProduct({ ...product, [e.target.name]: text })
  }

  // file upload handler 
  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    setImgLoading(true)
    const formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", "shopUp")
    formData.append("cloud_name", "dhivoejt4")

    const res = await fetch("https://api.cloudinary.com/v1_1/dhivoejt4/image/upload", {
      method: "POST",
      body: formData
    })
    const data = await res.json()
    const imgUrl = data.secure_url
    setProduct((prevProduct) => ({
      ...product,
      image: imgUrl
    }))
    setImgLoading(false)
  }

  //// handle submit form with condition basis in prodcuct image 
  const handleSubmit = (e) => {
    setIsLoading(true)
    if (!product.image) {
      toast("upload a Image or please Wait a second")
    } else {
      fetch("https://panda-backend.onrender.com/product/addProduct", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
      }).then(res => {
        if (res.ok) {
          toast("Product added successfully") 
          setIsLoading(false)
        
        } else {
          toast("shomthing went wrong ")

        }
      })
    }

    e.preventDefault()
  }
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: "0.5" }} 
    
      className='w-full text-gray-600'>
        <div className="w-full md:w-[70%] m-auto py-5 px-3 bg-gray-100">
          <form onSubmit={handleSubmit} method='POST'>
           <h2 className='text-xl md:text-3xl text-center uppercase my-3 italic font-normal'>Add Product</h2>
          
            <input
              type="text"
              onChange={handleChange}
              name='title'
              placeholder='Title'
              required
              className="formInput"
            />

         
            <input
              type="number"
              onChange={handleChange}
              name='price'
              placeholder='Price'
              required
              className="formInput"
            />

            <input
              type="text"
              onChange={handleChange}
              name='categorie'
              placeholder='Category'
              required
              className="formInput"
            />

        
            <textarea
              rows={5}
              onChange={handleChange}
              className='formInput'
              type="text"
              placeholder='Description'
              name='desc'
              required
            />


            <input
              type="file"
              onChange={handleFileChange}
              name="file"
              required
              className="formInput"
            />
            <small className='my-2 text-red-500'>
              {imgLoading ? "Image Uplaoding ..." : <span className='text-gray-500'> Add Product Photo</span> }
            </small>
            <button disabled={imgLoading} type='submit' className='button w-full py-2 my-3 font-medium flex items-center justify-center gap-2 text-black bg-[color:var(--special-color)] '> <AiOutlinePlus />
              {
                isLoading ? "Adding . . ." : "Add Product"
              }
            </button>


          </form>
        </div>

      </motion.div>
    </AdminLayout>
  )
}

export default AddProduct
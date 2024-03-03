import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import "./Addpost.css"

function Addpost() {
  const nevigate = useNavigate()
  const [massage, setMassage] = useState("")
  const [product, setProduct] = useState({
    title: "",
    price: "",
    desc: "",
    categorie: "",
    image: ""
  })

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  // file upload handler 
  const handleFileChange = async (e) => {
    const file = e.target.files[0]
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

  }

  //// handle submit form with condition basis in prodcuct image 
  const handleSubmit = (e) => {
    if (!product.image) {
      setMassage("upload a Image or please Wait a second")
    } else {
      fetch("https://panda-backend.onrender.com/product/addProduct", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
      }).then(res => {
        if (res.ok) {
          setMassage("Product added successfully")
          setTimeout(() => {
            nevigate('/allProducts')
          }, 1500);
        } else {
          setMassage("shomthing went wrong ")

        }
      })
    }

    e.preventDefault()
  }
  return (
    <div className='addPostContainer'>

      <div className="addPostForm">
        <form onSubmit={handleSubmit} method='POST'>
          <input onChange={handleChange} className='form-control mb-2' type="text" placeholder='Title' name='title' required />
          <input onChange={handleChange} className='form-control mb-2' type="number" placeholder='Price' name='price' required />
          <input onChange={handleChange} className='form-control mb-2' type="text" placeholder='Categorie' name='categorie' required />
          <textarea onChange={handleChange} className='form-control mb-2' type="text" placeholder='Description' name='desc' required />
          <input onChange={handleFileChange} type="file" name="file" className={`form-control mb-2 ${!product.image ? "bg-danger" : "bg-info"}`} />
          <button type='submit' className='form-control btn-btn-success fw-bold mb-2'> <AiOutlinePlus className='btnIcon' />Submit</button>

          {
            massage.includes("successfully") ? <h5 className='text-center my-3 text-light'>{massage}</h5>
              : <h5 className='text-center my-3 text-danger'>{massage}</h5>
          }

        </form>
      </div>

    </div>
  )
}

export default Addpost
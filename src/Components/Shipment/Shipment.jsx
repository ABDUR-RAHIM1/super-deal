import { useContext } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { CartContext } from '../../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

function Shipment() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [cart, setCart] = useContext(CartContext)
  const [order, SetOrder] = useState({
    name: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
    phone: "",
    city: "",
    zip: "",
    order: cart
  })
  const handleOrderChange = (e) => {
    SetOrder({ ...order, [e.target.name]: e.target.value })
  }

  const handleOrderSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()

    fetch("https://panda-backend.onrender.com/order/createOrder", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(order)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        toast("Order Submit Successful")
        if (data.message === "order is fully completed") {
          setCart([]);
          navigate('/thanks')
        }
      })
  }



  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: "0.5" }}
      className="shipmentContainer">
      <h2 className='text-center text-2xl capitalize my-3'>
        Fill up the form to submit the order
      </h2>
      <Form onSubmit={handleOrderSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <input className="formInput text-black"
              onChange={handleOrderChange}
              required
              name="name"
              type="text"
              disabled={cart.length <= 0}
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <input className="formInput text-black"
              onChange={handleOrderChange}
              name="email"
              required
              type="email"
              disabled={cart.length <= 0}
              placeholder="Enter Email"
            />
          </Form.Group>
        </Row>
        {/*  address   */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Present Address</Form.Label>
            <input className="formInput text-black"
              onChange={handleOrderChange}
              name="presentAddress"
              required
              type="text"
              disabled={cart.length <= 0}
              placeholder="Present Address"
            />

          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Permanent Address</Form.Label>
            <input className="formInput text-black"
              onChange={handleOrderChange}
              name="permanentAddress"
              required
              type="text"
              disabled={cart.length <= 0}
              placeholder="Permanent Address"
            />
          </Form.Group>
        </Row>


        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone No</Form.Label>
          <input className="formInput text-black"
            onChange={handleOrderChange}
            type="number"
            required
            name="phone"
            disabled={cart.length <= 0}
            placeholder="Phone No"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>City</Form.Label>

            <select disabled={cart.length <= 0} className='formInput text-black' onChange={handleOrderChange} name="city" required defaultValue="Choose..." >
              <option>Choose One...</option>
              <option>Dhaka</option>
              <option >Rangpur    </option>
              <option>Chittagong </option>
              <option>Rajshahi </option>
              <option>Khulna  </option>
              <option>Barisal  </option>
              <option>Sylhet   </option>
            </select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <input className="formInput text-black"
              onChange={handleOrderChange}
              type="number"
              required
              placeholder='Enter zip code'
              name="zip"
              disabled={cart.length <= 0}
            />

          </Form.Group>
        </Row>

        <button disabled={cart.length <= 0} className='mb-3 button px-4 py-2 bg-[color:var(--special-color)] text-black font-medium ' type="submit">
          {
            isLoading ? "Processing..." : "Submit Order"
          }
        </button>
      </Form>


    </motion.div>
  );
}

export default Shipment;
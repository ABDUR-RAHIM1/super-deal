import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { adminContext } from '../../App';
import ClickLoading from '../ClickLoading/ClickLoading';
import "./AdminLogin.css"
function AdminLogin() {
    const nevigate = useNavigate()
    const [clickBtn, setClikBtn] = useState(false)
    const [isAdminLogin, setIsAdminLogin] = useContext(adminContext)
    const [message, setMessage] = useState("")
    const [isAdmin, setIsAdmin] = useState({
        email: "",
        password: "",
        roll: ""

    })
    const handleAdminChange = (e) => {
        setIsAdmin({ ...isAdmin, [e.target.name]: e.target.value })
    }

    const handleAdminSubmit = (e) => {
        e.preventDefault()
        setClikBtn(true)
        fetch("https://panda-backend.onrender.com/admin/loginAdmin", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(isAdmin)
        }).then(res => res.json())
            .then(data => {
                setMessage(data.message)
                if (data.message === "login successfully") {
                    setClikBtn(false)
                    setIsAdminLogin(true)
                    setTimeout(() => {
                        nevigate('/dashboard')
                    }, 1500);
                }

            })
            .catch(err => console.log(err))
    }
    return (
        <div className='adminLoginContainer '>
            <h2 className='text-center fst-italic mb-4 border-bottom '>Admin can login</h2>
            <Form onSubmit={handleAdminSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleAdminChange} type="email" placeholder="Enter email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleAdminChange} type="password" placeholder="Enter Password" name="password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Roll</Form.Label>
                    <Form.Control onChange={handleAdminChange} type="password" name="roll" placeholder="Enter Your Roll" required />
                </Form.Group>

                <Button className='mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        { clickBtn &&  <ClickLoading/> }
            <div className="messageArea my-4">
                {
                    message.includes("successfully") ?
                        <h5 className="text-center text-success my-3">{message}</h5>
                        :
                        <h5 className="text-center text-danger my-3">{message}</h5>
                }
            </div>
        </div>
    )
}

export default AdminLogin
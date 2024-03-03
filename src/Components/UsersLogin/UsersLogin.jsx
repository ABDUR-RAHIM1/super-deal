import "./UsersLogin.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../../App";
import ClickLoading from "../ClickLoading/ClickLoading";

function UsersLogin() {
    const [clickBtn, setClikBtn] = useState(false)
    const [isLogin , setIsLogin] = useContext(loginContext)
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const [check, setCheck] = useState(true)
    const [createUsers, setCreateUsers] = useState({
        username: "",
        email: "",
        password: "",
    })
    // chekc box handler
    const handleCheck = () => {
        setCheck(!check)
    }

    const handleChange = (e) => {
        setCreateUsers({ ...createUsers, [e.target.name]: e.target.value })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setClikBtn(true)
        fetch('https://panda-backend.onrender.com/users/register', {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(createUsers)
        })
            .then(res => res.json())
            .then(data => { 
                setClikBtn(false)
                setMessage(data.message)
            })
    }

    //  handl login 
    const handleLogin = (e) => {
        e.preventDefault()
        setClikBtn(true)
        
        fetch('https://panda-backend.onrender.com/users/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(createUsers)
        }).then(res => res.json())
            .then(data => {
                setClikBtn(false)
                setMessage(data.message) 
                setIsLogin(true)
                if (data.message === 'logged In successfully') {
                    setTimeout(() => {
                        navigate("/shipment")
                    }, 1500);
                }
            })
    } 
    return (
        <div className="UserLoginContainer ">

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={handleCheck} type="checkbox" label="Register / sign in" />
            </Form.Group>
            {
                check ? <h5 className="text-center border-bottom my-3">Register</h5> : <h5 className="text-center border-bottom my-3">Sign in</h5>
            }

            {check ?
                (<div className="registerForm">
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={handleChange} required type="text" placeholder="Enter Username" name="username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChange} required type="email" placeholder="Enter email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} required type="password" placeholder="Password" name="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Check type="checkbox" label="i agree all terms and condition" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                           REGISTER
                        </Button>
                    </Form>
                </div>)

                //     login form
                :

                (<div className="loginForm">
                    <Form onSubmit={handleLogin}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChange} required type="email" placeholder="Enter email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} required type="password" placeholder="Password" name="password" />
                        </Form.Group>
                        <Button className="mb-3" variant="primary" type="submit">
                            SIGN IN
                        </Button>
                    </Form>
                </div>)
            }



{clickBtn && <ClickLoading/>}

            <div className="messageArea">

                {
                    message.includes("successfully") ?
                        <h5 className="text-center text-success my-3">{message}</h5>
                        :
                        <h5 className="text-center text-danger my-3">{message}</h5>
                }
            </div>

        </div>
    );
}

export default UsersLogin;
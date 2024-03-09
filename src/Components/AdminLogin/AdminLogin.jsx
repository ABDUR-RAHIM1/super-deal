import { useContext, useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";

function AdminLogin() {
  const nevigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); 
  const [isAdmin, setIsAdmin] = useState({
    email: "",
    password: "",
    roll: "",
  });
  const handleAdminChange = (e) => {
    setIsAdmin({ ...isAdmin, [e.target.name]: e.target.value });
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://panda-backend.onrender.com/admin/loginAdmin", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(isAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.message);
        if (data.message === "login successfully") {
          setIsLoading(false);
          localStorage.setItem("adminLogin", JSON.stringify(true));
          setTimeout(() => {
            nevigate("/admin-dashboard");
          }, 1500);
        }
      })
      .catch((err) => toast.error(err));
  };

  //    redirect admin already login

  useEffect(() => {
    const isAdminLogin = localStorage.getItem("adminLogin");
    if (isAdminLogin) {
      nevigate("/admin-dashboard");
    }
  }, []);
  return (
    <div className="adminLoginContainer ">
      <h2 className="text-center italic mb-4 border-b text-2xl ">
        Admin login
      </h2>
      <Form onSubmit={handleAdminSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input
            className="formInput"
            onChange={handleAdminChange}
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input
            className="formInput"
            onChange={handleAdminChange}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Role</Form.Label>
          <input
            className="formInput"
            onChange={handleAdminChange}
            type="password"
            name="roll"
            placeholder="Enter Role"
            required
          />
        </Form.Group>

        <button
          className="mb-3 button px-5 py-2 font-medium gradColor hover:gradHoverColor"
          type="submit"
        >
          {isLoading ? "Checking..." : "Login"}
        </button>
      </Form>
    </div>
  );
}

export default AdminLogin;

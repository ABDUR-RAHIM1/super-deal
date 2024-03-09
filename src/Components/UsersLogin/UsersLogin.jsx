import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import { motion } from "framer-motion"

function UsersLogin() {
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();
  const [click, setClick] = useState(true);

  const [createUsers, setCreateUsers] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCreateUsers({ ...createUsers, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://panda-backend.onrender.com/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(createUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        toast(data.message);
      });
  };

  //  handl login
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("https://panda-backend.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(createUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        toast(data.message); 
        if (data.message === "logged In successfully") { 
          localStorage.setItem("userLogin", JSON.stringify(true));

          setTimeout(() => {
            navigate("/shipment");
          }, 1500);
        }
      });
  };

  //    redicrect while user already login

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
      navigate("/shipment");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: "0.5" }}
      className="UserLoginContainer ">
      <div>
        <Form
          className="loginForm"
          onSubmit={click ? handleLogin : handleRegister}
        >
          <h2 className="text-center my-4 text-4xl font-medium text-[color:var(--special-color)]">
            {click ? "Login" : "Register"}
          </h2>
          {click ? (
            <p className=" text-center my-3">
              Don't have An account ?{" "}
              <span
                onClick={() => setClick(!click)}
                className="text-orange-500 font-medium cursor-pointer"
              >
                Create an account
              </span>
            </p>
          ) : (
            <p className=" text-center my-3">
              I have Already an account ?{" "}
              <span
                onClick={() => setClick(!click)}
                className="text-orange-500 font-medium cursor-pointer"
              >
                Login Now
              </span>
            </p>
          )}

          {!click && (
            <input
              className="formInput"
              type="text"
              onChange={handleChange}
              required
              placeholder="Enter Username"
              name="username"
            />
          )}

          <input
            className="formInput"
            type="email"
            onChange={handleChange}
            required
            placeholder="Enter email"
            name="email"
          />

          <input
            className="formInput"
            type="password"
            onChange={handleChange}
            required
            placeholder="Password"
            name="password"
          />

          <button
            className="button px-4 py-2 gradColor hover:gradHoverColor font-medium"
            type="submit"
          >
            {isLoading ? "Checking" : click ? "LOGIN" : "REGISTER"}
          </button>
        </Form>
      </div>

    </motion.div>
  );
}

export default UsersLogin;

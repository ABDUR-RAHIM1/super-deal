import React, { useEffect, useState } from 'react';
import Loading from '../Spinner/Spinner';
import './Users.css';

function Users() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([]);
  const [message , setMessage] = useState("")
  useEffect(() => {
    fetch('https://panda-backend.onrender.com/users/getUser')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user)
        setLoading(false)
      });
  }, [user]);

  const handleDelete = (id) => {
    fetch(`https://panda-backend.onrender.com/users/deleteUser/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
    .then(data => {
      setMessage(data.message)
    }) 
  };
  if (loading) {
    return <Loading />
  }
  return (
    <div className="text-center usersContainer">
      <h5 className='text-light my-3'>{message}</h5>
      <table className="table table-striped border">
        <thead className="text-light">
          <tr>
            <th>Join Date</th>
            <th>Username</th>
            <th>Email</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user._id}>
              <td>{Date(user.date).slice(0,16)}</td>
              <td className="py-3">{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

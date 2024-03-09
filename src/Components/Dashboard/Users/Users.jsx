import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AdminLayout from '../AdminLayout';

function Users() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([]);
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
        toast(data.message)
      })
  };

  return (
    <AdminLayout>
      <div className="text-center overflow-x-auto">
        <h2 className='text-center text-2xl mb-5 text-gray-600 uppercase'>List Of Users</h2>
        {loading ? "Loading . . ."
          : <table className="table bg-gray-50"  >
            <thead className=" uppercase text-sm  font-normal">
              <tr>
                <th>Join Date</th>
                <th>Username</th>
                <th>Email</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {user && user.slice().reverse().map((user) => (

                <tr key={user._id}>
                <td>{new Date(user.date).getDate()}/{new Date(user.date).getMonth() + 1}/{new Date(user.date).getFullYear()}</td>
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
        }
      </div>
    </AdminLayout>
  );
}

export default Users;

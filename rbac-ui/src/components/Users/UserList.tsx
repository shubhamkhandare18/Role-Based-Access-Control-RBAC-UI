import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number; // Adjust based on your API
  name: string;
  role: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:5000/users") // Specify expected response type
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 >User Management</h1>
      <button >
        Add User
      </button>
      <table >
        <thead>
          <tr>
            <th >ID</th>
            <th >Name</th>
            <th >Role</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td >{user.id}</td>
              <td >{user.name}</td>
              <td >{user.role}</td>
              <td >
                <button >
                  Edit
                </button>
                <button >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

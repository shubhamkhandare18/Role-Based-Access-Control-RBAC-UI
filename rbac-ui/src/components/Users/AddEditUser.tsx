import { useState, useEffect } from "react";
import axios from "axios";
import React from "react"
interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  user?: any; // If editing, pass the user data
}

const AddEditUser = ({ isOpen, onClose, onSave, user }: UserModalProps) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Active");
  const [roles, setRoles] = useState([]); // Fetch available roles

  useEffect(() => {
    axios.get("http://localhost:5000/roles").then((res) => setRoles(res.data));
    if (user) {
      setName(user.name);
      setRole(user.role);
      setStatus(user.status);
    }
  }, [user]);

  const handleSave = async () => {
    const newUser = { name, role, status };
    if (user) {
      // Update user
      await axios.put(`http://localhost:5000/users/${user.id}`, newUser);
    } else {
      // Create user
      await axios.post("http://localhost:5000/users", newUser);
    }
    onSave(); // Refresh user list
    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div >
      <div >
        <h2 >
          {user ? "Edit User" : "Add User"}
        </h2>
        <div >
          <label >Name</label>
          <input
            type="text"
            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div >
          <label >Role</label>
          <select
            
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            {roles.map((r: any) => (
              <option key={r.id} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div >
          <label >Status</label>
          <select
            
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div>
          <button
            
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditUser;

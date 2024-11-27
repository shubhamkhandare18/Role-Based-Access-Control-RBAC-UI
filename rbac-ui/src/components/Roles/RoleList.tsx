import { useEffect, useState } from "react";
import { getRoles, deleteRole } from "./RoleActions";
import AddEditRole from "./AddEditRole";
import React from "react"

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);

  const fetchRoles = async () => {
    const roles = await getRoles();
    setRoles(roles);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      await deleteRole(id);
      fetchRoles();
    }
  };

  return (
    <div>
      <h1 >Role Management</h1>
      <button
        
        onClick={() => {
          setEditingRole(null);
          setIsModalOpen(true);
        }}
      >
        Add Role
      </button>
      <table >
        <thead>
          <tr>
            <th >ID</th>
            <th >Name</th>
            <th >Permissions</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role: any) => (
            <tr key={role.id}>
              <td >{role.id}</td>
              <td >{role.name}</td>
              <td >
                {role.permissions.join(", ")}
              </td>
              <td >
                <button
                  
                  onClick={() => {
                    setEditingRole(role);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  
                  onClick={() => handleDelete(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddEditRole
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={fetchRoles}
        role={editingRole}
      />
    </div>
  );
};

export default RoleList;

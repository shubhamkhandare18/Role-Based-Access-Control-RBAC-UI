import React from "react"
import { useState, useEffect } from "react";
import { getPermissions, deletePermission } from "./PermissionActions";
import AddEditPermission from "./AddEditPermission";

const PermissionList = () => {
  const [permissions, setPermissions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPermission, setEditingPermission] = useState(null);

  const fetchPermissions = async () => {
    const perms = await getPermissions();
    setPermissions(perms);
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this permission?")) {
      await deletePermission(id);
      fetchPermissions();
    }
  };

  return (
    <div>
      <h1 >Permissions Management</h1>
      <button
        
        onClick={() => {
          setEditingPermission(null);
          setIsModalOpen(true);
        }}
      >
        Add Permission
      </button>
      <table >
        <thead>
          <tr>
            <th >ID</th>
            <th >Name</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((perm: any) => (
            <tr key={perm.id}>
              <td >{perm.id}</td>
              <td >{perm.name}</td>
              <td >
                <button
                  
                  onClick={() => {
                    setEditingPermission(perm);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  
                  onClick={() => handleDelete(perm.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddEditPermission
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={fetchPermissions}
        permission={editingPermission}
      />
    </div>
  );
};

export default PermissionList;

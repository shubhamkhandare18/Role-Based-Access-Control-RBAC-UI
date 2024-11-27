import { useState, useEffect } from "react";
import { addRole, updateRole } from "./RoleActions";
import React from "react";

interface AddEditRoleProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  role?: any;
}

const AddEditRole = ({ isOpen, onClose, onSave, role }: AddEditRoleProps) => {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState<string[]>([]); // Fixed initialization
  const availablePermissions = ["Read", "Write", "Delete"];

  useEffect(() => {
    if (role) {
      setName(role.name || "");
      setPermissions(role.permissions || []); // Ensure permissions is an array
    }
  }, [role]);

  const togglePermission = (permission: string) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSave = async () => {
    const newRole = { name, permissions };
    if (role) {
      await updateRole(role.id, newRole);
    } else {
      await addRole(newRole);
    }
    onSave();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div >
      <div >
        <h2 >
          {role ? "Edit Role" : "Add Role"}
        </h2>
        <div >
          <label >Role Name</label>
          <input
            type="text"
            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div >
          <label >Permissions</label>
          <div className="flex gap-4">
            {availablePermissions.map((perm) => (
              <label key={perm} >
                <input
                  type="checkbox"
                  checked={permissions.includes(perm)} // Permissions is always an array
                  onChange={() => togglePermission(perm)}
                />
                <span >{perm}</span>
              </label>
            ))}
          </div>
        </div>
        <div >
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

export default AddEditRole;

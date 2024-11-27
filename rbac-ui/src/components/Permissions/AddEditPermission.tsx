import { useState, useEffect } from "react";
import { addPermission, updatePermission } from "./PermissionActions";
import React from "react"
interface AddEditPermissionProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  permission?: any;
}

const AddEditPermission = ({
  isOpen,
  onClose,
  onSave,
  permission,
}: AddEditPermissionProps) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (permission) {
      setName(permission.name);
    }
  }, [permission]);

  const handleSave = async () => {
    const newPermission = { name };
    if (permission) {
      await updatePermission(permission.id, newPermission);
    } else {
      await addPermission(newPermission);
    }
    onSave();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div >
      <div >
        <h2 >
          {permission ? "Edit Permission" : "Add Permission"}
        </h2>
        <div >
          <label >
            Permission Name
          </label>
          <input
            type="text"
            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

export default AddEditPermission;

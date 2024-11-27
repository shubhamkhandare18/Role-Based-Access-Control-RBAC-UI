import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import UserList from "./components/Users/UserList";
import RoleList from "./components/Roles/RoleList";
import PermissionList from "./components/Permissions/PermissionList";
import './index.css'
import './components/Layout/Sidebar.css'
import './components/Layout/Header.css'
import './Table.css'
import './Form.css'
import './responsive.css'

const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          {/* Define routes for different sections */}
          <Route path="/" element={<UserList />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/permissions" element={<PermissionList />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;

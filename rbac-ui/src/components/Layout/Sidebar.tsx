import React from "react"
import { Link } from "react-router-dom";


const Sidebar = () => (
  <div className="aside">
    <h1 className="aside h1">RBAC Admin</h1>
    <nav>
      <ul>
        <li>
          <Link to="/users" className="aside ul">Users</Link>
        </li>
        <li>
          <Link to="/roles" className="aside ul li ">Roles</Link>
        </li>
        <li>
          <Link to="/permissions" className="aside ul li a">Permissions</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;


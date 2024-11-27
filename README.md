
RBAC Admin Dashboard

A Role-Based Access Control (RBAC) Admin Dashboard built using React, allowing administrators to manage users, roles, and permissions in a user-friendly interface. The application demonstrates essential RBAC functionality, including dynamic permission assignment, user management, and role handling.

Table of Contents

Features
Technologies Used
Getting Started
Project Structure
Detailed Implementation
User Management
Role Management
Permissions Management
Styling and Design
API Simulation
Screenshots
Future Enhancements
License

1. Features

User Management:
Add, edit, delete, and toggle user status (Active/Inactive)
Assign roles to users dynamically
Role Management:
Create, update, and delete roles
Assign multiple permissions to roles
Permissions Management:
Define permissions (Read, Write, Delete)
Assign permissions dynamically to roles
Responsive Design:
Desktop-focused layout with expandable sidebar and responsive header
Dynamic API Simulation:
Mock API for CRUD operations on users and roles

2. Technologies Used

Frontend Framework: React (TypeScript)
CSS Framework: Tailwind CSS / Custom CSS
State Management: React Hooks (useState, useEffect)
Routing: React Router (if added for navigation)
Mock API: Axios / Mock data handling

3. Getting Started

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:


git clone https://github.com/your-repo/rbac-dashboard.git
cd rbac-dashboard
Install dependencies:


npm install
Start the development server:


npm start
The application should be running on http://localhost:3000/.

4. Project Structure

css
Copy code
src/
├── components/

│   ├── Layout/

│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── DashboardLayout.tsx

│   ├── Users/

│   │   ├── UserList.tsx
│   │   ├── AddEditUser.tsx
│   │   └── UserActions.tsx

│   ├── Roles/

│   │   ├── RoleList.tsx
│   │   ├── AddEditRole.tsx
│   │   └── RoleActions.tsx

│   └── Permissions/

│       ├── PermissionList.tsx
│       └── PermissionActions.tsx

├── App.tsx
├── index.css
└── index.tsx

5. Detailed Implementation

User Management

UserList.tsx: Displays a table of users with options to edit, delete, or update status.
AddEditUser.tsx: Form to add a new user or edit an existing one.
UserActions.tsx: Manages the CRUD actions for users using mock API calls.

Role Management

RoleList.tsx: Lists all roles and associated permissions.
AddEditRole.tsx: Form to create or update roles.
RoleActions.tsx: Handles API calls for role manipulation.
Permissions Management
PermissionList.tsx: Displays a table of available permissions.
PermissionActions.tsx: API logic for assigning/removing permissions.

6. Styling and Design

Global Styling (index.css)

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f7;
  color: #333;
}

button {
  cursor: pointer;
  border-radius: 5px;
}

a {
  text-decoration: none;
}

Sidebar Styling (Sidebar.css)

aside {
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}
Header Styling (Header.css)
css
Copy code
header {
  background-color: white;
  height: 60px;
  padding: 10px;
}

7. API Simulation

Mock API Using Axios
Install Axios:

npm install axios
Create api.js in src:


import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // Mock endpoint
});
Example Mock API Usage in UserActions.tsx:


export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};


8. Screenshots
Include screenshots for the following views:

User List Page
Add/Edit User Modal
Role List Page
Assign Permissions Page

9. Future Enhancements

Implement dark mode for improved UI flexibility.
Add real API integration for persistent data.
Introduce search and filtering features for users and roles.

10. License

This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!

Troubleshooting
If the app shows a blank screen:

Check for any errors in the console (Inspect -> Console).
Ensure all component imports are correct (case-sensitive filenames).
Restart the server using npm start.

![Screenshot 2024-11-27 161945](https://github.com/user-attachments/assets/445b21d3-6bdc-46c3-b86d-9891f5198bee)

![Screenshot 2024-11-27 161916](https://github.com/user-attachments/assets/aa3ddbd9-c375-4b01-bd75-57a27bbffe20)




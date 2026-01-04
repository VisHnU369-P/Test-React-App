# Employee Management System

A modern, full-featured Employee Management System built with React. This application provides a complete solution for managing employee data with authentication, CRUD operations, search, filtering, and print functionality.

## 📋 Project Overview

This Employee Management System is a single-page application (SPA) that allows authorized users to:

- **Authenticate** using a login system
- **View** a comprehensive dashboard with employee statistics
- **Manage** employee records (Add, Edit, Delete)
- **Search and Filter** employees by name, gender, and status
- **Print** employee lists
- **Toggle** employee active/inactive status

The application features a modern, responsive UI with smooth animations and a clean design that follows current UX best practices.

## 🛠️ Tech Stack Used

### Core Technologies
- **React 19.2.0** - Modern React library for building user interfaces
- **Vite 7.2.4** - Next-generation frontend build tool for fast development
- **React Router DOM 6.30.2** - Client-side routing for navigation

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Node.js** - JavaScript runtime environment

### Key Features & Patterns
- **Context API** - For global state management (Authentication & Employee data)
- **LocalStorage** - For data persistence across browser sessions
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **React Hooks** - useState, useEffect, useContext, useMemo for component logic

## 🚀 Steps to Run the Project Locally

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd test-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including React, React Router DOM, and development dependencies.

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:5173` (or the next available port).

4. **Access the application**
   - Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)
   - You'll be redirected to the login page

5. **Login**
   - For demo purposes, **any username and password combination will work**
   - Enter any credentials and click "Sign In"
   - You'll be redirected to the dashboard

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Features & Functionality

### Authentication
- **Login Page**: Simple, elegant login interface
- **Mock Authentication**: Accepts any username/password for demo purposes
- **Protected Routes**: Dashboard is only accessible after login
- **Session Persistence**: Login state persists across page refreshes using localStorage
- **Logout**: Secure logout functionality that clears authentication state

### Dashboard
- **Summary Cards**: 
  - Total number of employees
  - Active employees count
  - Inactive employees count
- **Employee Table**: Comprehensive list with all employee details
- **Quick Actions**: Add employee and print list buttons

### Employee Management
- **Add Employee**: Create new employee records with validation
- **Edit Employee**: Update existing employee information
- **Delete Employee**: Remove employees with confirmation dialog
- **Toggle Status**: Quickly activate/deactivate employees

### Employee Form
- **Fields**:
  - Full Name (required, min 2 characters)
  - Gender (Male, Female, Other)
  - Date of Birth (required, validates future dates)
  - State (dropdown with all US states)
  - Profile Image (optional, with preview)
  - Active/Inactive status
- **Validation**: Real-time form validation with error messages
- **Image Upload**: Preview images before saving (max 5MB)
- **Responsive Design**: Works seamlessly on desktop and mobile

### Search & Filter
- **Search**: Real-time search by employee name
- **Gender Filter**: Filter by Male, Female, Other, or All
- **Status Filter**: Filter by Active, Inactive, or All
- **Combined Filtering**: All filters work together for precise results

### Print Functionality
- **Print-Friendly**: Optimized print layout
- **Hides Actions**: Action buttons are hidden when printing
- **Clean Format**: Professional print output

## 🏗️ Design Decisions & Assumptions

### State Management
- **Context API over Redux**: Chose React Context API for simplicity and to avoid over-engineering for this project size
- **LocalStorage Persistence**: Data persists in browser localStorage, making it suitable for demo purposes. In production, this would connect to a backend API

### Authentication
- **Mock Authentication**: Implemented simple mock authentication that accepts any credentials. In production, this would integrate with a proper authentication service (JWT, OAuth, etc.)
- **Client-Side Protection**: Protected routes are enforced on the client side. In production, server-side validation would be essential

### Data Structure
- **Employee ID**: Uses timestamp-based IDs for simplicity. In production, UUIDs or database-generated IDs would be preferred
- **Image Storage**: Profile images are stored as base64 strings in localStorage. In production, images should be uploaded to cloud storage (AWS S3, Cloudinary, etc.)

### UI/UX Decisions
- **Modern Gradient Design**: Used gradient backgrounds and modern color schemes for visual appeal
- **Smooth Animations**: Added transitions and animations for better user experience
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Loading States**: Implemented loading indicators for better feedback
- **Empty States**: Added helpful empty state messages when no data is available
- **Error Handling**: Form validation with clear error messages

### Component Architecture
- **Component Separation**: Separated concerns into pages, components, and contexts
- **Reusable Components**: EmployeeForm is reused for both Add and Edit operations
- **Custom Hooks Pattern**: Used Context API with custom hooks (useAuth, useEmployees) for cleaner component code

### Performance Optimizations
- **useMemo Hook**: Used for filtering employees to prevent unnecessary recalculations
- **Conditional Rendering**: Efficient rendering based on state
- **Image Optimization**: Image preview before upload to reduce unnecessary data storage

### Browser Compatibility
- **Modern Browsers**: Designed for modern browsers (Chrome, Firefox, Safari, Edge)
- **CSS Features**: Uses modern CSS features (Grid, Flexbox, CSS Variables)
- **No Polyfills**: Assumes modern browser support

### Future Enhancements (Not Implemented)
- Backend API integration
- Real authentication with JWT tokens
- Image upload to cloud storage
- Pagination for large employee lists
- Export to CSV/Excel
- Bulk operations
- Employee sorting
- Advanced search with multiple criteria
- User roles and permissions
- Audit logs

## 📁 Project Structure

```
test-react/
├── public/
├── src/
│   ├── components/
│   │   ├── EmployeeForm.jsx
│   │   ├── EmployeeForm.css
│   │   ├── EmployeeList.jsx
│   │   ├── EmployeeList.css
│   │   ├── ProtectedRoute.jsx
│   │   ├── SearchAndFilter.jsx
│   │   └── SearchAndFilter.css
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   └── EmployeeContext.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   ├── Login.jsx
│   │   └── Login.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage Guide

### Adding an Employee
1. Click the "+ Add Employee" button on the dashboard
2. Fill in all required fields (marked with *)
3. Optionally upload a profile image
4. Click "Add Employee" to save

### Editing an Employee
1. Click the edit (✏️) icon next to an employee in the table
2. Modify the information in the form
3. Click "Update Employee" to save changes

### Deleting an Employee
1. Click the delete (🗑️) icon next to an employee
2. Confirm the deletion in the dialog
3. The employee will be removed from the list

### Searching and Filtering
1. Use the search box to filter by name
2. Select gender from the dropdown filter
3. Select status (Active/Inactive) from the status filter
4. Filters work together for combined results

### Printing
1. Click the "🖨️ Print List" button
2. Use your browser's print dialog (Ctrl+P / Cmd+P)
3. The print layout is optimized for paper

## 📝 Notes

- All employee data is stored in browser localStorage
- Data persists across page refreshes
- Clearing browser data will remove all employees
- The application works offline (after initial load)
- No backend server is required for this demo

## 🤝 Contributing

This is a demo project. For production use, consider:
- Adding backend API integration
- Implementing proper authentication
- Adding unit and integration tests
- Setting up CI/CD pipeline
- Adding error monitoring (Sentry, etc.)
- Implementing proper image storage


**Built using React and Vite**

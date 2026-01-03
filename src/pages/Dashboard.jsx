import { useState, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useEmployees } from '../contexts/EmployeeContext';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import SearchAndFilter from '../components/SearchAndFilter';
import './Dashboard.css';

const Dashboard = () => {
  const { logout } = useAuth();
  const { employees } = useEmployees();
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      const matchesSearch = emp.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGender = genderFilter === 'all' || emp.gender === genderFilter;
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'active' && emp.active) ||
        (statusFilter === 'inactive' && !emp.active);
      
      return matchesSearch && matchesGender && matchesStatus;
    });
  }, [employees, searchTerm, genderFilter, statusFilter]);

  const activeCount = employees.filter(emp => emp.active).length;
  const inactiveCount = employees.length - activeCount;

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setShowForm(true);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Employee Management Dashboard</h1>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-summary">
          <div className="summary-card">
            <div className="summary-icon total">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="summary-info">
              <h3>Total Employees</h3>
              <p className="summary-number">{employees.length}</p>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon active">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="summary-info">
              <h3>Active</h3>
              <p className="summary-number">{activeCount}</p>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon inactive">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div className="summary-info">
              <h3>Inactive</h3>
              <p className="summary-number">{inactiveCount}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-actions">
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            genderFilter={genderFilter}
            onGenderFilterChange={setGenderFilter}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />
          <div className="action-buttons">
            <button onClick={handleAddEmployee} className="btn btn-primary">
              + Add Employee
            </button>
            <button onClick={handlePrint} className="btn btn-secondary">
              🖨️ Print List
            </button>
          </div>
        </div>

        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
        />

        {showForm && (
          <EmployeeForm
            employee={editingEmployee}
            onClose={handleCloseForm}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;


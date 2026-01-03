import { useEmployees } from '../contexts/EmployeeContext';
import './EmployeeList.css';

const EmployeeList = ({ employees, onEdit }) => {
  const { deleteEmployee, toggleEmployeeStatus } = useEmployees();

  const handleDelete = (employee) => {
    if (window.confirm(`Are you sure you want to delete ${employee.fullName}?`)) {
      deleteEmployee(employee.id);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👥</div>
        <h3>No employees found</h3>
        <p>Try adjusting your search or filters, or add a new employee.</p>
      </div>
    );
  }

  return (
    <div className="employee-list-container">
      <div className="employee-table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>State</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="employee-id">{employee.id.slice(-6)}</td>
                <td>
                  <div className="profile-image-cell">
                    {employee.profileImage ? (
                      <img
                        src={employee.profileImage}
                        alt={employee.fullName}
                        className="profile-image"
                      />
                    ) : (
                      <div className="profile-placeholder">
                        {employee.fullName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                </td>
                <td className="employee-name">{employee.fullName}</td>
                <td className="employee-gender">{employee.gender}</td>
                <td className="employee-dob">{formatDate(employee.dateOfBirth)}</td>
                <td className="employee-state">{employee.state}</td>
                <td>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={employee.active}
                      onChange={() => toggleEmployeeStatus(employee.id)}
                    />
                    <span className="toggle-label">
                      {employee.active ? 'Active' : 'Inactive'}
                    </span>
                  </label>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => onEdit(employee)}
                      className="action-btn edit-btn"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(employee)}
                      className="action-btn delete-btn"
                      title="Delete"
                    >
                      🗑️
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="action-btn print-btn"
                      title="Print"
                    >
                      🖨️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;


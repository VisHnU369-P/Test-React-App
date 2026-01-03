import { createContext, useContext, useState, useEffect } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployees must be used within an EmployeeProvider');
  }
  return context;
};

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now().toString(),
      profileImage: employee.profileImage || null,
    };
    setEmployees([...employees, newEmployee]);
    return newEmployee;
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...updatedEmployee, id } : emp
    ));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const toggleEmployeeStatus = (id) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, active: !emp.active } : emp
    ));
  };

  return (
    <EmployeeContext.Provider value={{
      employees,
      addEmployee,
      updateEmployee,
      deleteEmployee,
      toggleEmployeeStatus,
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};


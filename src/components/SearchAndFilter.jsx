import './SearchAndFilter.css';

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  genderFilter,
  onGenderFilterChange,
  statusFilter,
  onStatusFilterChange,
}) => {
  return (
    <div className="search-filter-container">
      <div className="search-box">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="gender-filter">Gender:</label>
        <select
          id="gender-filter"
          value={genderFilter}
          onChange={(e) => onGenderFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="status-filter">Status:</label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;


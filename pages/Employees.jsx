import { useEffect, useState } from "react";

 function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // FETCH DATA FROM API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.results);
        setLoading(false);
      });
  }, []);

  // SEARCH FILTER
  const filteredEmployees = employees.filter((emp) =>
    emp.name.first.toLowerCase().includes(search.toLowerCase()) ||
    emp.name.last.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="content">

      {/* HEADER */}
      <header className="section">
        <h1>👨‍💼 Our Team</h1>
        <p>Meet the professionals behind BrewNest Coffee.</p>
      </header>

      {/* SEARCH BAR */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search employee by name..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* LOADING */}
      {loading && <p className="loading">⏳ Loading employees...</p>}

      {/* EMPLOYEE GRID */}
      <div className="card-container employee-grid">

        {!loading &&
          filteredEmployees.map((emp, index) => (
            <div className="card employee-card" key={index}>

              {/* IMAGE */}
              <img
                src={emp.picture.medium}
                alt="employee"
                className="emp-img"
              />

              {/* NAME */}
              <h3>
                {emp.name.first} {emp.name.last}
              </h3>

              {/* ROLE */}
              <p className="role">Barista Specialist</p>

              <p className="email">{emp.email}</p>

            </div>
          ))}

      </div>

    </div>
  );
}
export default  Employees;                                                                                                        
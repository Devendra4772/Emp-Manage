import { useState } from "react";
import api from "../api";

function SearchFilter() {

  const [department, setDepartment] =
  useState("");

  const [employees, setEmployees] =
  useState([]);

  const searchEmployee = async () => {

    try {

      const res = await api.get(
        `/employees/search?department=${department}`
      );

      setEmployees(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="card">

      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Search by Department"
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      />

      <button onClick={searchEmployee}>
        Search
      </button>

      {
        employees.map((emp) => (

          <div className="employee" key={emp._id}>

            <h3>{emp.name}</h3>

            <p>{emp.department}</p>

          </div>
        ))
      }

    </div>
  );
}

export default SearchFilter;
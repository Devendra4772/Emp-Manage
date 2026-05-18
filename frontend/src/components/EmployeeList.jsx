import { useEffect, useState } from "react";
import api from "../api";

function EmployeeList() {

  const [employees, setEmployees] =
  useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {

    try {

      const res = await api.get("/employees");

      setEmployees(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {

    await api.delete(`/employees/${id}`);

    fetchEmployees();
  };

  return (
    <div className="card">

      <h2>Employee List</h2>

      {
        employees.map((emp) => (

          <div className="employee" key={emp._id}>

            <h3>{emp.name}</h3>

            <p>Email: {emp.email}</p>

            <p>Department: {emp.department}</p>

            <p>
              Skills:
              {" "}
              {emp.skills.join(", ")}
            </p>

            <p>
              Performance:
              {" "}
              {emp.performanceScore}
            </p>

            <p>
              Experience:
              {" "}
              {emp.experience} years
            </p>

            <button
              onClick={() =>
                deleteEmployee(emp._id)
              }
            >
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
}

export default EmployeeList;
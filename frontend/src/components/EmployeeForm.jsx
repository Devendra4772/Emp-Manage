import { useState } from "react";
import api from "../api";

function EmployeeForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/employees", {
        ...formData,
        skills: formData.skills.split(",")
      });

      alert("Employee Added Successfully");

    } catch (error) {

      console.log(error);

      alert("Error Adding Employee");
    }
  };

  return (
    <div className="card">

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (React,Node,MongoDB)"
          onChange={handleChange}
        />

        <input
          type="number"
          name="performanceScore"
          placeholder="Performance Score"
          onChange={handleChange}
        />

        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          onChange={handleChange}
        />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;
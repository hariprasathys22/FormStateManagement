import React, { useState } from "react";
import "../styles/userData.css";

const UserData = () => {
  const form = {
    userName: "",
    password: "",
    salary: "",
  };
  const [formData, setFormData] = useState(form);
  const [userData, setUserData] = useState([]);

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const displayData = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, formData]);
    setFormData(form);
  };

  const handleEdit = (index) => {
    const userToEdit = userData[index];
    setFormData(userToEdit);
    setUserData((curuser) => curuser.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setUserData((user) => user.filter((_, i) => i !== index));
  };

  return (
    <div className="userData-container">
      <div className="userData-get">
        <h1 className="userData-head">User Details</h1>
        <div className="userData-forms">
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            value={formData.userName}
            onChange={handleData}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleData}
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleData}
          />
        </div>
        <button className="userData-btn" onClick={displayData}>
          Submit
        </button>
      </div>
      <div className="userData-details">
        <h2 className="userData-head">User Data</h2>

        <table className="userData-table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Password</th>
              <th>Salary</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>{user.salary}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="userData-optionBtn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="userData-optionBtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;

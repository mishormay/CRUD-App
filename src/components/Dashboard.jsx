import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import Axios from "axios";

function Dashboard() {
  const [employeeList, setEmployeeList] = useState([]);
  const getEmployees = () => {
    Axios.get("http://localhost:3001/getEmployees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div className="Dashboard">
      <table className="employeeTable">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>POSITION</th>
          <th>TASK</th>
          <th>WAGE</th>
          <th>ACTIONS</th>
        </tr>
        {employeeList.map((val, key) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.position}</td>
              <td>{val.task}</td>
              <td>{val.wage}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Dashboard;

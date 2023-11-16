import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h1 className="title">Project Management System</h1>
      <div className="options">
        <button>Table View</button>
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default NavBar;

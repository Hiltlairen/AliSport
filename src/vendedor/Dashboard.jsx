import React from "react";
import Sidebar from "../components/Sidebar/Sidebar"; // Ruta corregida
import DashboardContent from "../components/DashboardContent/DashboardContent"; // Ruta corregida
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
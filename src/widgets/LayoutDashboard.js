import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

const LayoutDashboard = (props) => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <Sidebar />
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutDashboard;

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Student = () => {
  return (
    <div className="h-screen w-full bg-[#f1f2f6] flex">
      <Sidebar />
      <div className="flex-[0.85]">
        <Header />
        <div className="flex-[0.9]"></div>
      </div>
    </div>
  );
};

export default Student;

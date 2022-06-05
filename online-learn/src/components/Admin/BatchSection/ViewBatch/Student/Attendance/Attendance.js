import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "../../Sidebar";
import Main from "./Main";

const Attendance = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="h-screen w-full bg-[#ffffff] flex overflow-hidden">
      <Sidebar />
      {user !== null && (
        <div className="flex flex-col  w-full">
          <Header />
          <Main />
        </div>
      )}
    </div>
  );
};

export default Attendance;

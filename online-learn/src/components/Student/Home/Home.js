import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeSidebar from "../HomeSidebar";
import Main from "./Main";

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("learner")));
  return (
    <div className="bg-[#1a1a1a] w-full h-screen flex">
      <HomeSidebar />
      {user !== null && <Main />}
    </div>
  );
};

export default Home;

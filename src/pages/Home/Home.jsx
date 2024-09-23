import React, { useState } from "react";
import "./Home.css";
import Sildebar from "../../components/Sildebar/Sidebar";
import Feed from '../../components/Feed/Feed'
const Home = ({ sidebar }) => {

  const [category,setCategory] = useState(0);

  return (
    <div>
      <Sildebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}></div>
      <Feed category={category} />
    </div>
  );
};

export default Home;

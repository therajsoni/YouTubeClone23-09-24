import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobile.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/user-check.svg";
import music from "../../assets/music1.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack4.jpg";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import airplay from '../../assets/airplay.svg'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (<div className={`sidebar ${sidebar ? "" : "small-side"}`}>
    <div className="shortcut-links">
        <div className={`side-link ${category===1?"active" : ""}`} onClick={()=>setCategory(1)}  >
            <img src={home} alt=""/>
            <p>Home</p>
        </div>
      
     

        <div className={`side-link ${category===20?"active" : ""}`} onClick={()=>setCategory(20)}>
            <img src={game_icon} alt=""/>
            <p>Gaming</p>
        </div>
        <div className={`side-link ${category===23?"active" : ""}`} onClick={()=>setCategory(23)}>
            <img src={automobiles} alt=""/>
            <p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active" : ""}`} onClick={()=>setCategory(17)}>
            <img src={sports} alt=""/>
            <p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active" : ""}`} onClick={()=>setCategory(24)}>
            <img src={entertainment} alt=""/>
            <p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?"active" : ""}`} onClick={()=>setCategory(28)}>
            <img src={tech} alt=""/>
            <p>Tech</p>
        </div>
        <div className={`side-link ${category===10?"active" : ""}`} onClick={()=>setCategory(10)}>
            <img src={music} alt=""/>
            <p>Music</p>
        </div>
        <div className={`side-link ${category===15?"active" : ""}`} onClick={()=>setCategory(15)}>
            <img src={blogs} alt=""/>
            <p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active" : ""}`} onClick={()=>setCategory(25)}>
            <img src={news} alt=""/>
            <p>News</p>
        </div>
    <hr/>    
    </div>
<div className="subscribed-list">
   <h3>Subscribed</h3>


   <div className="side-link">
    <img src={jack} alt=""/>
    <p>JACK</p>
    </div>  
    

    <div className="side-link">
    <img src={simon} alt=""/>
    <p>SIMON</p>
    </div>


    <div className="side-link">
    <img src={tom} alt=""/>
    <p>TOM</p>
    </div>


    <div className="side-link">
    <img src={megan} alt=""/>
    <p>MEGAN</p>
    </div>

    <div className="side-link">
    <img src={cameron} alt=""/>
    <p>CAMERON</p>
    </div>


</div>

  </div>);
};

export default Sidebar;

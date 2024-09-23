import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png";
import menu_icon from "../../assets/menu.svg";
import search_icon from '../../assets/search.svg';
import upload_icon from '../../assets/download.svg'
import more_icon from '../../assets/plus.svg';
import notification_icon from '../../assets/bell.svg'         
import profile_icon from '../../assets/user.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BioContext } from "../../context";

const Navbar = ({setSidebar}) => {
  
  

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu_icon" onClick={()=>setSidebar(prev => prev===false ? true : false)} src={menu_icon} />
      <Link to={"/"} >
        <img className="logo" src={logo} />
      </Link>
        <img />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder="Search" />
        <img src={search_icon} />
        </div>
      </div>


     <div className="nav-right flex-div">
        <img src={upload_icon} alt=""/>
        <img src={more_icon} alt=""/>
        <img src={notification_icon} alt=""/>
        <img src={profile_icon} className="user-icon" alt=""/>
     </div>

    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Sidebar.css";
import myPic from "./myPic.jpeg";
import backgroundImg from './backgroundImg.jpeg'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@mui/material";

function Sidebar() {
  const user = useSelector(selectUser)

    const recentItem=(topic)=>{
        return (<div className="sidebarRecentItem">
            <span className="sidebarHash">#</span>
            <p>{topic}</p>
            

        </div>)
    }

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <img className ='backgroundImg' src={backgroundImg} alt="" />
        <Avatar className="avatar1" src={user.user.photoUrl}>{user.user.displayName[0]}</Avatar>
        <h2>{user.user.displayName}</h2>
        <h4>{user.user.email}</h4>
      </div>

      <div className="sidebarStats">
        <div className="sidebarStat">
          <p>Who viewed you</p>
          <p className="sidebarStatNumber">772</p>
        </div>
        <div className="sidebarStat">
          <p>Views on post</p>
          <p className="sidebarStatNumber">559</p>
        </div>
      </div>

      <div className="sidebarBottom">
        <p>Recent</p>
        {recentItem('ReactJS')}
        {recentItem('Programming')}
        {recentItem('SoftwareEngineering')}
        {recentItem('BlockchainTechnology')}
        {recentItem('ArtificialInteligence')}
      </div>


    </div>
  );
}

export default Sidebar;

import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({avatar,  Icon, title, onClick }) {
  const user= useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerOption">
      <div className="headerOption1">
        {Icon && <Icon className="headerOptionIcon" />}
        {avatar && <Avatar className="headerOptionIcon avatar" src = {user?.user?.photoUrl}>{user?.user?.displayName[0]}</Avatar>}
        <h3 className="headerOptionTitle">{title}</h3>
      </div>
    </div>
  );
}

export default HeaderOption;

import React from "react";
import "./Post.css";
import myPic from "./myPic.jpeg";
import InputOption from "./InputOption";
import { ThumbUp , Chat, Share, Send} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="postHeader">
        <Avatar className="avatar2" src={photoUrl}>{name[0]}</Avatar>
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="postBody">
        <p>{message}</p>
      </div>
      <div className="postButtons">
        <InputOption Icon={ThumbUp} title="Like" coor="gray" />
        <InputOption Icon={Chat} title="Comment" coor="gray" />
        <InputOption Icon={Share} title="Share" coor="gray" />
        <InputOption Icon={Send} title="Send" coor="gray" />
      </div>
    </div>
  );
}

export default Post;

import React, { useState, useEffect } from "react";
import "./Feed.css";
import {
  Create,
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@mui/icons-material";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
  const [posts, setPosts] = useState([]);

  const [input, setInput] = useState("");

  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.user.displayName,
      description: user.user.email,
      message: input,
      photoUrl: user.user.photoUrl || "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('')
  };

  return (
    <div className="feed">
      <div className="feedInputContainer">
        <div className="feedInput">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feedInputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
     
    </div>
  );
}

export default Feed;

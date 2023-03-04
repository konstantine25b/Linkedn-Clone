

import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./Firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser)
  
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
           email:userAuth.email,
            uid :userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl : userAuth.photoURL,
        }))
        
      }
      else{
        dispatch(logout())

      }
    })
  
  },[])
  return (
    <div className="App">
      <Header />

      {!user.user? <Login/> :(
         <div className="appBody">
         <Sidebar />
         <Feed/>
         <Widgets/>
       </div>

      )}


    </div>
  );
}

export default App;

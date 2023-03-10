import React,{useState} from "react";
import "./Login.css";
import {auth} from './Firebase'
import { useDispatch } from "react-redux";
import { login} from "./features/userSlice"



function Login() {

    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [profilePic,setProfilePic] =useState("")
    const dispatch= useDispatch()

    const register  =()=>{
       if(!name){
        return alert('Please enter your name!')
       }
       auth.createUserWithEmailAndPassword(email,password)
       .then((userAuth)=>{
        userAuth.user.updateProfile({
            displayName: name,
            photoUrl: profilePic,
        })
        .then(()=>{
          dispatch(login({
            email:userAuth.user.email,
            uid :userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl : userAuth.user.photoURL,
          }))
          
        })
       }).catch(error=> alert(error))
    }

    const loginToApp=(e)=>{
      e.preventDefault()
      auth.signInWithEmailAndPassword(email,password)
      .then(userAuth=>{
        dispatch(login({
            email:userAuth.user.email,
            uid :userAuth.user.uid,
            displayName: name,
            photoUrl : profilePic,
        }))
      }).catch(error=>alert(error))

    }

  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
      <form>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" type ="text"/>
        <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder="Profile Pic URL (optional)" type= "text"/>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type = 'text'/>
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type = 'password'/>
        <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a member? {" "}
      <span onClick={register} className="loginRegister"> Register Now</span>
      </p>
    </div>
  );
}

export default Login;

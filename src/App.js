import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import userImg from "./profile/ProfilePhoto.jpg";
import * as ReactDOM from 'react-dom';
export default function App () {
  function handleName (name) {
    alert (`Hello My Name is ${name}`);
  }
return (
  <div className="App">
    <Profile fullName="Mohamed Khalil Mansour"
        profession="Full-Stack js Developper"
        bio="Hello , my name is Mohamed Khalil Mansour and i like React"
        handleName={handleName}>
          <img
          style={{ borderRadius: "100px", width: "150px", height: "150px" }}
          src={userImg}
          alt="avatarPhoto"/>
        </Profile>
  </div>
);  
}
ReactDOM.render(App(),document.getElementById("root"));


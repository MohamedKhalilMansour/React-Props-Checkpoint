import "./profile.css";
import React from "react";
import PropTypes from 'prop-types';
export default function Profile (props) {
    return (
        <div className="profileCard">
            <div className="avatarPhoto">{props.children}</div>
            <div className="container">
                <h3 className="containerLabel">
                    <span> Name : {props.fullName} </span> 
                </h3>
                <p className="containerLabel">
                    <span> Profession : {props.profession} </span> 
                </p>
                <p className="containerLabel">
                    <span> Bio : {props.bio} </span> 
                </p>
                <button 
                onClick ={() => props.handleName(props.fullName)}
                className="btn"
                >
                 Say Hello !
                </button>
            </div>
        </div>
    );
}
 Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func
 };
 Profile.defaultProps= {
    fullName: "No Data",
    profession: "No Data",
    bio: "No Data",
    handleName: () => {
        alert("No Data");
    }
 };


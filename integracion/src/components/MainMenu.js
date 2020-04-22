import React from "react";
import '../css/header.css'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function MainMenu(){
    return (
        <div className="topnav" id="myTopnav">
            <a href="#" className="active">Home</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
            </a>
        </div>
        )
    }
export default MainMenu;
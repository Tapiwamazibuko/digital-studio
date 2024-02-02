import React from "react";
import { Link, NavLink } from "react-router-dom";
import daylight from "../sounds/daylight.mp3";
import useSound from "use-sound";

export default function Menu(props){

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

    const [play, { stop }] = useSound(daylight);

    function playMusic(){
        if(props.music){play()}
    }

    const activeStyle = {
        opacity: "40%",
        fontFamily: "Poppins",
        textDecoration: "underline"
    }

    const pendingStyle = {
        opacity: "100%",
        fontFamily: "DM Serif Display"
    }

    return(
        <div id="mySidenav" className="menu--container" onMouseOver={playMusic} onPointerLeave={() => stop()}>
            <div className="menu--close">
                <button type="button" onClick={closeNav} className="menu--button">&times;</button>
            </div>
            <div className="menu--links">
                <NavLink className="menu--item" to={`/`} 
                    style={({ isActive}) =>
                    isActive
                      ? activeStyle
                      : pendingStyle
                  }>
                    <h4>01</h4>
                    <h1>Index</h1>
                </NavLink>
                <NavLink className="menu--item" to={`/projects`}
                    style={({ isActive}) =>
                    isActive
                      ? activeStyle
                      : pendingStyle
                  }>
                    <h4>02</h4>
                    <h1>Projects</h1>
                </NavLink>
                <NavLink className="menu--item" to={`/contact`}
                    style={({ isActive}) =>
                    isActive
                      ? activeStyle
                      : pendingStyle
                  }>
                    <h4>03</h4>
                    <h1>Contact</h1>
                </NavLink>
            </div>
            <div className="menu--socials">
                <a href="https://twitter.com/?lang=en">
                    <h5>TWITTER</h5>   
                </a>
                <a href="https://www.instagram.com/">
                    <h5>INSTAGRAM</h5>
                </a>
            </div>
        </div>  
    )
    
}
import React from "react";
import { Link } from "react-router-dom";
import daylight from "../sounds/daylight.mp3";
import useSound from "use-sound";

export default function Header(props){
    const style = {
        fontFamily: "DM Serif Display",
        fontSize: "25px"
    }
    function openNav() {
        document.getElementById("mySidenav").style.width = "400px";
      }

    const [play, { stop }] = useSound(daylight);

    function playMusic(){
        if(props.music){play()}
    }
    return (
        <nav className="header--container" onMouseOver={playMusic} onPointerLeave={() => stop()}>
            <div className="header--left">
                <Link to={`/`}>
                    <h2>noname</h2>
                    <h2 style={style}>studio</h2>
                </Link>           
            </div>
            <div className="header--right">
                <Link to={`/`}>
                    <h2>Index</h2>
                </Link>
                <Link to={`/projects`}>
                    <h2>Projects</h2>
                </Link>
                <Link to={`/contact`}>
                    <h2>Contact</h2>
                </Link>
                <button type="button" onClick={openNav}>• •</button>
            </div>
        </nav>
    )
}
import React from "react";
import { Outlet }  from "react-router-dom";
import daylight from "../sounds/daylight.mp3";
import useSound from "use-sound";

export default function Index(props){
    const [play, { stop }] = useSound(daylight);

    function playMusic(){
        if(props.music){play()}
    }

    return (
        <div className="index--background" onMouseOver={playMusic} onPointerLeave={() => stop()}>
            <div className="entry--button--container">
                <button type="button" className="index--button" >View our work</button>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}
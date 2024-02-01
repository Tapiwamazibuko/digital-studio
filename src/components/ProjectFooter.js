import React from "react";
import daylight from "../sounds/daylight.mp3";
import useSound from "use-sound";

export default function ProjectFooter(props){
    const [play, { stop }] = useSound(daylight);

    const style = {
        backgroundColor: props.music ? "white": "black"
    }

    function playMusic(){
        if(props.music){play()}
    }

    return(
        <div className="footer--container" onMouseOver={playMusic} onPointerLeave={() => stop()}>
            <div className="footer--left">
            {props.music  ?
                <button type="button" style={style} onClick={props.toggle} className="music--button">
                    <div id="bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </button> : 
                <button type="button" style={style} onClick={props.toggle} className="music--button">
                    <div id="bars">
                        <div className="white--bar"></div>
                        <div className="white--bar"></div>
                        <div className="white--bar"></div>
                        <div className="white--bar"></div>
                        <div className="white--bar"></div>
                    </div>
                </button> }
            </div>
            <div className="footer--right">
                <span className="footer--star">&#9734;</span>
  
            </div>
        </div>
    )
}
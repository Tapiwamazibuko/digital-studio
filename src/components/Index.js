import React from "react";
import { Outlet }  from "react-router-dom";
import daylight from "../sounds/daylight.mp3";
import useSound from "use-sound";
import { redirect, Form } from "react-router-dom";

export default function Index(props){
    const [play, { stop }] = useSound(daylight);

    function playMusic(){
        if(props.music){play()}
    }

    return (
        <div className="index--background" onMouseOver={playMusic} onPointerLeave={() => stop()}>
            <div className="entry--button--container">
                <Form action="projects">
                    <button type="submit" className="index--button" >View our work</button>
                </Form>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}
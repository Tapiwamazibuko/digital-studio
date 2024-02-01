import React from "react";
import daylight from "../sounds/daylight.mp3";
import useSound from "use-sound";
import { Form } from "react-router-dom";

export default function ProjectInfo(props){
    const [play, { stop }] = useSound(daylight);

    function playMusic(){
        if(props.music){play()}
    }

    return (
        <div className="projects--background" onMouseOver={playMusic} onPointerLeave={() => stop()}>
            <div className="projects--container">
                <h1 className="projects--name">{props.name}</h1>
                <Form action={`${props.id}`}>
                    <button type="submit" className="projects--button">View project</button>
                </Form>
            </div>
        </div>
    )
}
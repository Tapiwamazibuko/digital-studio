import React from "react";
import daylight from "../sounds/daylight.mp3";
import useSound from "use-sound";

export default function Project(props){
    const nameText = props.name.split(" ")
    const style = {
        paddingTop: "50px",
        marginLeft: "200px"
    }

    const textStyle = {
        marginBottom: "0"
    }

    const serviceElements = props.services.map( data => {
        return <h4 key={data} className="project--description--text">{data}</h4>
      })

    const [play, { stop }] = useSound(daylight);

    function playMusic(){
        if(props.music){play()}
    }
    return (
        <div className="project--background" onMouseOver={playMusic} onPointerLeave={() => stop()}>
            <div>
                <h4 className="project--top">{props.name}</h4>
            </div>
            <div className="project--title">
                <h1>{nameText[0]}</h1>
                <h1 style={style}>{nameText[1]}</h1>
            </div>
            <div className="project--description">
                <div>
                    <h4 className="project--description--title">PROJECT OVERVIEW</h4>
                    <h4 className="project--description--text">{props.overview}</h4>
                </div>
                <div>
                    <h4 className="project--description--title">SERVICES</h4>
                    {serviceElements}
                </div>
                <div>
                    <h4 className="project--description--title" style={textStyle}>DATE</h4>
                    <h4 className="project--description--text">{props.date}</h4>
                    <h4 className="project--description--title" style={textStyle}>CLIENT</h4>
                    <h4 className="project--description--text">{props.client}</h4>
                </div>
            </div>
        </div>
    )
}
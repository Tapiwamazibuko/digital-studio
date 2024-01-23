import React from "react";

export default function ProjectInfo(props){
    return (
        <div className="projects--background">
            <div className="projects--container">
                <h1 className="projects--name">{props.name}</h1>
                <button type="button" className="projects--button">View project</button>
            </div>
        </div>
    )
}
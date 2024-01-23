import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const style = {
        fontFamily: "DM Serif Display",
        fontSize: "25px"
    }
    return (
        <nav className="header--container">
            <div className="header--left">
                <h2>noname</h2>
                <h2 style={style}>studio</h2>
            </div>
            <div className="header--right">
                <h2>Index</h2>
                <h2>Projects</h2>
                <h2>Contact</h2>
                <button type="button">• •</button>
            </div>
        </nav>
    )
}
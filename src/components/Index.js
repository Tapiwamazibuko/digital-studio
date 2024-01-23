import React from "react";
import { Outlet }  from "react-router-dom";

export default function Index(){
    return (
        <div className="index--background">
            <div className="entry--button--container">
                <button type="button" className="index--button">View our work</button>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}
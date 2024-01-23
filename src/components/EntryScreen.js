import React from "react";

export default function EntryScreen(props){
    return (
        <main className="entry--background">
            <div className="entry--button--container">
                <button type="button" className="entry--button" onClick={props.entry}>Enter</button>
            </div>
            <div className="entry--container">
                <h4 className="entry--text">ENTER WITHOUT AUDIO</h4>
            </div>
        </main>  
    )
}
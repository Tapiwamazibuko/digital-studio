import React from "react";

export default function EntryScreen(props){
    const [style, setStyle] = React.useState("")
    function buttonHover(){
        console.log("sonething!")
        setStyle(() =>  {
            return {
                color: "white",
                backgroundColor: "rgb(50,50,60)",
                transform: "translate(-1px, -1px)",
                transition: "transform 0.3s, opacity 0.3s"
            }
            
        })

    }

    function buttonLeave(){
        setStyle(() =>  {
            return {
                color: "black",
                backgroundColor: "white"
            }
            
        })
    }
    return (
        <main className="entry--background">
            <div className="entry--button--container">
                <button type="button" style={style} className="entry--button" 
                onClick={props.entry} onMouseOver={buttonHover} onMouseLeave={buttonLeave}
                >Enter</button>
            </div>
            <div className="entry--container">
                <h4 className="entry--text">ENTER WITHOUT AUDIO</h4>
            </div>
        </main>  
    )
}
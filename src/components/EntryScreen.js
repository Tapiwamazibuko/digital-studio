import React from "react";

export default function EntryScreen(props){
    const [style, setStyle] = React.useState({})
    const [lineStyle, setLineStyle] = React.useState({})
    function buttonHover(){
        setStyle(() =>  {
            return {
                color: "white",
                backgroundColor: "rgb(50,50,60)",
                transform: "translate(-1px, -1px)",
                transition: "transform 0.3s, opacity 0.3s",
                cursor: "pointer"
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

    function lineHover(){
        setLineStyle(() => {
            return { 
                
                transform: "scaleX(0.1) translate(-10px, 0px)",
                transition: "transform .2s ease-out",
                cursor: "pointer"
            }
        })
    }

    function lineLeave(){
        setLineStyle(() => {
            return { 
                width: "112px"
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
            <div className="entry--container" style={{cursor: "pointer"}} onMouseOver={lineHover} onMouseLeave={lineLeave}>
                <h4 className="entry--text"  >
                    ENTER WITHOUT AUDIO
                    <span className="left--span" style={lineStyle} 
                    ></span>
                    <span className="right--span"></span>
                </h4>
            </div>
        </main>  
    )
}
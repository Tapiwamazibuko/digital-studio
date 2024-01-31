import React from "react";
import useSound from "use-sound";
import click from "../sounds/mouse-click.mp3"

export default function EntryScreen(props){
    const [style, setStyle] = React.useState({})
    
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

    

    const Container = () => {
        const [play] = useSound(click);
        const [lineStyle, setLineStyle] = React.useState({})

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
            <div className="entry--container" style={{cursor: "pointer"}} 
            onMouseOver={lineHover} onMouseLeave={lineLeave} onClick={() => {play(); props.music()} }
            >
                <h4 className="entry--text" >
                    ENTER WITHOUT AUDIO
                    <span className="left--span" style={lineStyle} 
                    ></span>
                    <span className="right--span"></span>
                </h4>
            </div>
        )
      };


    return (
        <main className="entry--background">
            <div className="entry--button--container">
                <button type="button" style={style} className="entry--button" 
                onClick={props.entry} onMouseOver={buttonHover} onMouseLeave={buttonLeave}
                >Enter</button>
            </div>
            <Container/>
        </main>  
    )
}
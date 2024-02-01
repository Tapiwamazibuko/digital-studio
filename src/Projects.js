import './App.css';
import ProjectFooter from './components/ProjectFooter';
import Header from './components/Header';
import ProjectInfo from './components/ProjectsInfo';
import projectData from './projectData';
import Menu from './components/Menu';
import React from 'react';

export default function Projects(){
    const [musicPlaying, setMusicPlaying] = React.useState(true)

    function toggleMusic(){
        setMusicPlaying((prevMusicPlaying) => !prevMusicPlaying)
        console.log(musicPlaying)
      }

    const dataElements = projectData.map( data => {
        return <ProjectInfo
                  key={data.id}
                  name={data.name}
                  music={musicPlaying}
                  id={data.id}
                />
      })

    return(
        <div>
            <Header music={musicPlaying}/>
            <Menu music={musicPlaying}/>
            {dataElements}
            <ProjectFooter music={musicPlaying} toggle={toggleMusic}/>
        </div>
        
    )
}
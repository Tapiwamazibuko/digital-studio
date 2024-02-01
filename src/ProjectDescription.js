import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import projectData from './projectData';
import { useLoaderData } from 'react-router-dom';
import Menu from './components/Menu';
import React from 'react';

function getProject(query) {
    const result = projectData.filter((item) => { return item.id == query})
    console.log(query, result)
    return result[0]
  }

export async function loader({ params }) {
    const project = await getProject(params.projectId);
    return { project };
  }

export default function ProjectDescription(){
    const { project } = useLoaderData();
    const [musicPlaying, setMusicPlaying] = React.useState(true)

    function toggleMusic(){
        setMusicPlaying((prevMusicPlaying) => !prevMusicPlaying)
        console.log(musicPlaying)
      }

    return(
        <div>
            <Header music={musicPlaying}/>
            <Menu music={musicPlaying}/>
            <Project 
                id={project.id}
                name={project.name}
                overview={project.overview}
                services={project.services}
                date={project.date}
                client={project.client}
                music={musicPlaying}
            />
            <Footer music={musicPlaying} toggle={toggleMusic}/>
        </div>
    )
}
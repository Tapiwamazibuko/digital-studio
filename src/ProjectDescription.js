import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import projectData from './projectData';

export default function ProjectDescription(){
    return(
        <div>
            <Header/>
            <Project 
                id={projectData[0].id}
                name={projectData[0].name}
                overview={projectData[0].overview}
                services={projectData[0].services}
                date={projectData[0].date}
                client={projectData[0].client}
            />
            <Footer/>
        </div>
    )
}
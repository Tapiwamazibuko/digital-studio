import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import projectData from './projectData';
import { useLoaderData } from 'react-router-dom';
import Menu from './components/Menu';

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
    return(
        <div>
            <Header/>
            <Menu />
            <Project 
                id={project.id}
                name={project.name}
                overview={project.overview}
                services={project.services}
                date={project.date}
                client={project.client}
            />
            <Footer/>
        </div>
    )
}
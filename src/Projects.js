import './App.css';
import ProjectFooter from './components/ProjectFooter';
import Header from './components/Header';
import ProjectInfo from './components/ProjectsInfo';
import projectData from './projectData';

export default function Projects(){

    const dataElements = projectData.map( data => {
        return <ProjectInfo
                  key={data.id}
                  name={data.name}
                />
      })

    return(
        <div>
            <Header />
            {dataElements}
            <ProjectFooter/>
        </div>
        
    )
}
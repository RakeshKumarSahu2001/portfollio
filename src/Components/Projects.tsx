import { useContext } from 'react';
import Project from "./Project";
import PortfollioContext from '../Store/PortfollioContext';

function Projects() {
  const { projects } = useContext(PortfollioContext);

  return (
    <section className="py-3 projects" id='Projects'>
      <div className="info-container container d-flex flex-column gap-1 justify-content-center">
      <h1 className="text-primary text-center py-1">Projects</h1>
          <div className='row gx-4 gy-3 list-unstyled' style={{ cursor: "pointer" }}>
            {
              projects.map((project, index) => (<>
                <div key={index} className='col-md-6 col-lg-3 p-0 d-flex justify-content-center'><Project key={index} name={project.name} pic={project.pic} text={project.text} tools={project.tools} link={project.link} /></div>
              </>))
            }
          </div>
      </div>

    </section>
  );
}

export default Projects;

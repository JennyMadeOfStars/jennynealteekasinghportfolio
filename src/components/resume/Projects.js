// import Carousel from '../../elements/Carousel';
// elements
import LazyImage from '../../elements/LazyImage';

// data
import projects from '../../data/projects';

/**
 * @function Projects
 * @description Functional component containing data list
 * @returns {JSX} Markup for the projects component
 */
const Projects = () => {
    // return <Carousel data={projects} />;
    return (
        <div className='projects'>
            {projects.map((project, index) => (
                <div className="projects__project-wrapper" key={index}>
                    {project.image &&
                        <a href={project.link} target="_new" className='projects__project-image-link'>
                            <LazyImage
                                imgSrc={`${project.image}`}
                                textName={`Screenshot of ${project.title} homepage`}
                                showLoader={true}
                                className="projects__project-image"
                            />
                        </a>
                    }
                    <h2 className='projects__project-title'>
                        <span className='rainbow'>{project.title}</span>
                    </h2>
                    <p className='projects__project-description'>{project.description}</p>

                    <p>Technologies: {project.tech.join(', ')}</p>
                    {project.link && <p><a href={project.link} target="_new">{project.link}</a></p>}
                    {!(project.image && project.link) &&
                        <p className='projects__project-inprogress'>
                            <span>Project Currently In Progress</span>
                        </p>
                    }
                </div>
            ))}
        </div>
    );
};

export default Projects;
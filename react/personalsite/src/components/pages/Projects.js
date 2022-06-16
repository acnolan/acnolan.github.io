import Helmet from 'react-helmet';
import ProjectContent from '../widgets/ProjectContent';
import ContactButton from '../widgets/ContactButton';
import content from '../../resources/Data/projects.json';

const Projects = () => {

    const buildParagraphs = () => {
        return content.map((c,index) => {
            return(
                <ProjectContent
                    key = {c.title}
                    title = {c.title}
                    link = {c.link}
                    dates = {c.dates}
                    location = {c.location}
                    content = {c.content}
                    isLeftAlign = {index % 2 === 0}
                />
            )
        });
    }

    return (
        <div className="content justify-p">
            <Helmet>
                <title>{"Andrew Nolan"}</title>
            </Helmet>
            <br/>
            <h1 
                style={{"marginBottom":"0px"}} 
                className="purpleText"
            >
                Projects
            </h1>
            <p style={{"marginTop":"0px"}}>
                The titles of each of these projects are links to the GitHub repo (if public)
            </p>
            {buildParagraphs()}
            <ContactButton/>
        </div>
    );
}

export default Projects;
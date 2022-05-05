import Helmet from 'react-helmet';
import ProjectContent from '../sections/ProjectContent';
import ContactButton from '../widgets/ContactButton';

const Projects = () => {
    let content = [];

    const buildParagraphs = () => {
        return content.map((c,index) => {
            return(
                <ProjectContent
                    title = {c.title}
                    link = {c.link}
                    dates = {c.dates}
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
import Helmet from 'react-helmet';
import ContactButton from '../widgets/ContactButton';
import ProjectContent from '../widgets/ProjectContent';
import content from '../../resources/Data/work.json';

const Work = () => {

    const buildParagraphs = () => {
        return content.map((c,index) => {
            return(
                <ProjectContent
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
        <div class="content justify-p">
            <Helmet>
                <title>{"Andrew Nolan"}</title>
            </Helmet>
            <br/>
            <h1 className="purpleText">Work Experience</h1>
            <p>
                This page contains a detailed description of my work experience. If you are interested in just the headlines and big pictures of what I did please check out my <a href="./resume">resume</a> or <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/acnolan/">LinkedIn</a>.
            </p>
            <br/>
            {buildParagraphs()}
            <ContactButton/>
        </div>
    );
}

export default Work;
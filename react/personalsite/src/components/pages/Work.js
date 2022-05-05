import ContactButton from '../widgets/ContactButton';
import ProjectContent from '../widgets/ProjectContent';

const Work = () => {

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
        <div class="content justify-p">
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
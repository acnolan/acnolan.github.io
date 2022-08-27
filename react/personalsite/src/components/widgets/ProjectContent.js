import projectContentStyles from './styles/ProjectContent.module.css';

const ProjectContent = (props) => {
    const {title, link, dates, location, content, isLeftAlign} = props;

    const buildTitle = () => {
        return(
            link ? <h2><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
            : <h2>{title}</h2>
        );
    }

    const buildParagraphs = () => {
        return content.map((c, index) => {
            return(
                <p
                    key = {title + 'paragraph' + index}
                    dangerouslySetInnerHTML = {{ __html: c }} 
                />
            );
        });
    }

    return(
        <>
            <div className={isLeftAlign ? "" : projectContentStyles.alignRight}>
                {buildTitle()}
                <h3>{dates + ", " + location}</h3>
                {buildParagraphs()}
            </div>
            <br/>
        </>
    );
}

export default ProjectContent;
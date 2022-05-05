const ProjectContent = (props) => {
    const {title, link, dates, content, isLeftAlign} = props;

    const buildTitle = () => {
        return(
            link ? <h2><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
            : <h2>{title}</h2>
        );
    }

    const buildParagraphs = () => {
        return content.map(c => {
            return(
                <p dangerouslySetInnerHTML={c} />
            );
        });
    }

    return(
        <>
            <div className={isLeftAlign ? "" : "alignRight"}>
                {buildTitle()}
                <h3>{dates}</h3>
                {buildParagraphs()}
            </div>
            <br/>
        </>
    );
}

export default ProjectContent;
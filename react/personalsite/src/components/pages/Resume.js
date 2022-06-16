import Helmet from 'react-helmet';

const Resume = () => {
    return (
        <div className="content justify-p">
            <Helmet>
                <title>{"Andrew Nolan"}</title>
            </Helmet>
            <br/>
            <div style={{"display":"flex","justify-content":"space-around"}}>
                <h1 className="purpleText">Resume</h1>
                <a 
                    className="mylinks" 
                    style={{"margin-top": "auto","margin-bottom": "auto"}}
                    href="../../data/AndrewNolan_Resume_2021.pdf" 
                    download
                >
                    Download
                </a>
            </div>
        </div>
    );
}

export default Resume;
import Helmet from 'react-helmet';
import ContactButton from '../widgets/ContactButton';
import './styles/resume.css';

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
            <div style={{"text-align":"center"}}>
                <object 
                    class="pdf-holder" 
                    data="./data/AndrewNolan_Resume_2021.pdf" 
                    type="application/pdf"
                    width="100%" 
                    height="100%">
                    <p>
                        Your web browser doesn't have a PDF plugin. Instead you can <a href="./data/AndrewNolan_Resume_2021.pdf" download>click here to download the PDF file.</a>
                    </p>
                </object>
            </div>
            <ContactButton/>
        </div>
    );
}

export default Resume;
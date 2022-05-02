import Helmet from 'react-helmet';
import ContactButton from '../widgets/ContactButton';
import './Styles/homepagemobile.css';

const Home = () => {
    return (
        <div className="content">
            <Helmet>
                <title>{"Andrew Nolan"}</title>
            </Helmet>
            <br/>
            <h1 className="purpleText" style={{'textAlign':'center', 'marginBottom': 0}}>Andrew Nolan</h1>
            <h2 style={{'textAlign':'center', 'marginTop':0}}>Student, Programmer, Pretty Cool Guy</h2>
            <div style={{'textAlign':'center'}}>
                <img className="rounded-image" alt="A super cool picture of me" width={240} height={240} src={require("../../resources/images/homepage.jpg")}/>
            </div>
            <div className="buttonrow">
                <a className="mylinks" href="about">About Me</a>
                <a className="mylinks" href="work">Work Experience</a>
                <a className="mylinks" href="projects">Projects</a>
                <a className="mylinks" href="blogs">Blogs</a>
            </div>
            <ContactButton/>
            <br/><br/><br/><br/>
        </div>
    )
}

export default Home;
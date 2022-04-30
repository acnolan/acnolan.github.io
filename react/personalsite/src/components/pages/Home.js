import PageHelmet from '../../PageHelmet';

const Home = () => {
    return (
        <div>
            <PageHelmet pageTitle="Andrew Nolan"/>
            <div className="content">
                <br/>
                <h1 className="purpleText" style={{'textAlign':'center', 'marginBottom': 0}}>Andrew Nolan</h1>
                <h2 style={{'textAlign':'center', 'marginTop':0}}>Student, Programmer, Pretty Cool Guy</h2>
                <div style={{'textAlign':'center'}}>
                    <img className="rounded-image" alt="A super cool picture of me" width={240} height={240} src="./images/homepage.jpg"/>
                </div>
                <div className="buttonrow">
                    <a className="mylinks" href="about">About Me</a>
                    <a className="mylinks" href="work">Work Experience</a>
                    <a className="mylinks" href="projects">Projects</a>
                    <a className="mylinks" href="blogs">Blogs</a>
                </div>
                <div style={{'textAlign':'center', 'marginTop':'20px'}}>
                    <a id="email" href="mailto:acnolan@wpi.edu?Subject=Hello%20Andrew!&amp;body=You%20are%20super%20cool!">Contact
                        Me!</a>
                </div>
                <br/><br/><br/><br/>
            </div>
        </div>
    )
}

export default Home;
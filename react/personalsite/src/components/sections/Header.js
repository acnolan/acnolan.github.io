const Header = (props) => {
    const {currentPage, isHomePage} = props;
    return(
        <div className="header">
            <div className="content">
                <h1>
                <a href="/"
                className="desktop-only"
                style={{'textDecoration': 'none',
                    'color':'white'}}
                >      
                    {currentPage}
                </a>
                </h1>
                <div className="linkBlock">
                    {!isHomePage && 
                        <a 
                            href="./" 
                            aria-label="home" 
                            className="fa fa-home">
                        </a>
                    }
                    <a 
                        target="_blank" 
                        href="https://github.com/acnolan" 
                        rel="noopener noreferrer" 
                        aria-label="github"
                        className="fa fa-github"></a>
                    <a 
                        target="_blank" 
                        href="https://www.linkedin.com/in/acnolan" 
                        rel="noopener noreferrer" aria-label="linkedin"
                        className="fa fa-linkedin"></a>
                    <a 
                        name="Email to me"
                        href="mailto:acnolan@wpi.edu?Subject=Hello%20Andrew!&amp;body=You%20are%20super%20cool!"
                        className="fa fa-envelope">
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
import { Helmet } from 'react-helmet';

const PageHelmet = (props) => {
    const {pageTitle} = props;
    return (
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charset="utf-8"/>
            <meta name="description" content="Hi, I'm Andrew Nolan. I'm a student, developer, and a pretty cool guy! Check out my website!!"/>
            <meta name="keywords" content="Andrew Nolan, Andrew Nolan WPI, web dev, Computer Science, acnolan, Andrew Nolan MathWorks, Andrew Nolan Computer Science"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel='icon' href='./images/favicon.ico'/>
            <title>{pageTitle}</title>
            <link rel="stylesheet" type="text/css" href="./styles/styles.css"/>
            <link rel="stylesheet" type="text/css" href="./styles/homepagemobile.css"/>
        </Helmet>
    );
}

export default PageHelmet;
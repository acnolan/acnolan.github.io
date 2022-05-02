import Helmet from 'react-helmet';
import favorites from '../../resources/Data/favorites.json';
import FlipTileRow from '../sections/FlipTileRow';
import './Styles/flipcard.css';

const About = () => {

    const buildFlipTiles = () => {
        return favorites.map((tileData, index) => {
            if(index % 3 === 0 ){
                return (
                    <>
                        <FlipTileRow
                            rowData={favorites.slice(index, index+3)}
                        />
                        <br/>
                    </>
                );
            }
        });
    }

    return (
        <div class="content">
            <Helmet>
                <title>{"About - Andrew Nolan"}</title>
            </Helmet>
            <br/>
            <h1 class="purpleText" style={{'textAlign': 'center'}}>About Me</h1>

            <p>You can learn a lot about my technical skills and experiences from my resume and work history. However, if you want to learn more about me as a person, here are some of my favorite things!</p>

            {buildFlipTiles()}
        </div>
    );
}

export default About;
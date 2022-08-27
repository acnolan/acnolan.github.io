import { useEffect } from 'react';
import FlipTileRow from '../sections/FlipTileRow';
import ContactButton from '../widgets/ContactButton';
import favorites from '../../resources/data/favorites.json';

const About = (props) => {
    const {setPageTitle} = props;

    useEffect(() => {
        setPageTitle("About Andrew Nolan");
    });

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
            return null;
        });
    }

    return (
        <div class="content">
            <br/>
            <h1 class="purpleText" style={{'textAlign': 'center'}}>About Me</h1>

            <p>You can learn a lot about my technical skills and experiences from my resume and work history. However, if you want to learn more about me as a person, here are some of my favorite things!</p>

            {buildFlipTiles()}
            <ContactButton/>
        </div>
    );
}

export default About;
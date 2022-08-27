import FlipTile from '../widgets/FlipTile';
import flipTileRowStyles from './styles/FlipTileRow.module.css';

const FlipTileRow = (props) => {
    const {rowData} = props;

    return (
        <div className={flipTileRowStyles.flipRow}>
            {
                rowData.map((tile, index) => {
                    return(
                        <>
                            <FlipTile tileData={tile}/>
                            {index < 2 ? 
                                <br className={flipTileRowStyles.mobileOnlyBr}/>
                                : null
                            }
                        </>
                    );
                })
            }
        </div>
    );
}

export default FlipTileRow;
import FlipTile from '../widgets/FlipTile';

const FlipTileRow = (props) => {
    const {rowData} = props;

    return (
        <div className="flip-row">
            {
                rowData.map((tile, index) => {
                    return(
                        <>
                            <FlipTile tileData={tile}/>
                            {index < 2 ? 
                                <br className="mobile-only-br"/>
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
import flipTileStyles from './styles/FlipTile.module.css';

const FlipTile = (props) => {
    const { tileData } = props;

    return(
        <div className={flipTileStyles.flipCard} onclick="">
            <div className={flipTileStyles.flipCardInner}>
                <div className={flipTileStyles.flipCardFront}>
                    <h1>{tileData.question}</h1>
                </div>
                <div className={flipTileStyles.flipCardBack}>
                    <img 
                        src={require("../../resources/images/about/"+tileData.imgSrc)} 
                        alt={tileData.altText}
                    />
                </div>
            </div>
        </div>
    );
}

export default FlipTile;
const FlipTile = (props) => {
    const { tileData } = props;

    return(
        <div className="flip-card" onclick="">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h1>{tileData.question}</h1>
                </div>
                <div className="flip-card-back">
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
import React from 'react';

const QuickStats = (props) => {
    return (
        <div className="recipe-quick-stats">
            <div className="color-line">
                <p><strong>Color (SRM): {parseInt(props.recipe.color, 10)}</strong></p> 
                <div className={`color-card srm-${parseInt(props.recipe.color, 10)}`}></div>
            </div>
            <div className="bitterness-line">
                <p><strong>Bitterness (IBU): {parseInt(props.recipe.bitterness, 10)}</strong></p>
                <div className="bitterness-bar">
                    <div className="bitterness" style={{width: `${parseInt((((props.recipe.bitterness - 15) / 65) * 100), 10)}%`}}></div>
                </div>
            </div>
            <div className="abv-line">
                <p><strong>Estimated ABV: {parseInt((props.recipe.abv * 10), 10) / 10}%</strong></p>
                <div className="abv-bar">
                    <div className="abv" style={{width: `${parseInt((((props.recipe.abv - 3) / 7) * 100), 10)}%`}}></div>
                </div>
            </div>
        </div>
    )
}

export default QuickStats
import React from 'react';

const Recipe = (props) => {
    const grainWeight = Math.round(props.recipe.grain_ingredients.map(grain => parseInt(grain.weight, 10)).reduce((acc, cur) => (acc + cur)) / 16)
    const spargeWater = grainWeight / 2
    return(
        <div className="beer-card">
            <h1>{props.recipe.name}</h1>
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
                        <div className="abv" style={{width: `${parseInt((((props.recipe.abv - 3) / 10) * 100), 10)}%`}}></div>
                    </div>
                </div>
            </div>
            <p>Heat {spargeWater} gallon of water to 160 degrees F. Add:</p>
            <ul>
                {props.recipe.grain_ingredients.map(grain => <li key={`${grain.id}-grain`}><strong>{grain.weight} oz {grain.name}</strong></li>)}
            </ul>
            <p>Remove from heat and steep at 150 degrees F for 30 minutes. Strain the grain water into the brew pot. Sparge the grains with {spargeWater} gallon of 150 degree F water. Bring the water to a boil, remove from heat, and add:</p>
            <ul>
                {props.recipe.malt_ingredients.map(malt => <li key={`${malt.id}-malt`}><strong>{malt.weight} lb {malt.name}</strong></li>)}
                {props.recipe.hop_ingredients.filter(hop => hop.hop_type === "bittering").map(hop => <li key={`${hop.id}-hop`}><strong>{hop.weight} oz {hop.name} (bittering hop)</strong></li>)}
            </ul>
            <p>Add water until the total volume in the brew pot is 2.5 gallons. Boil for 45 minutes, then add:</p>
            <ul>
                {props.recipe.hop_ingredients.filter(hop => hop.hop_type === "flavor").map(hop => <li key={`${hop.id}-hop`}><strong>{hop.weight} oz {hop.name} (flavor hop)</strong></li>)}
                <li><strong>1 tsp Irish Moss</strong></li>
            </ul>
            <p>Boil for 12 minutes then add:</p>
            <ul>
                {props.recipe.hop_ingredients.filter(hop => hop.hop_type === "aroma").map(hop => <li key={`${hop.id}-hop`}><strong>{hop.weight} oz {hop.name} (aroma hop)</strong></li>)}
            </ul>
            <p>Boil for 3 minutes.  Remove from heat and chill the wort for 20 minutes.  Strain the cooled wort into the primary fermenter and add cold water to obtain 5-1/8 gallons. When the wort temperature is below 70 degree F pitch the yeast.</p>
            <ul>
                <li>{props.recipe.yeast_ingredient.name}</li>
            </ul>
            <p>Ferment in the primary fermenter for 7 days or until fermentation slows, then siphon into the secondary fermenter {props.recipe.hop_ingredients.some(hop => hop.hop_type === "dry") ? 'then add:' : '.'}</p>
            <ul>
                {props.recipe.hop_ingredients.filter(hop => hop.hop_type === "dry").map(hop => <li key={`${hop.id}-hop`}><strong>{hop.weight} oz {hop.name} (dry hop)</strong></li>)}
            </ul>
            <p>Bottle when fermentation is complete, target gravity is reached, and beer has cleared (approximately 3 weeks) with:</p>
            <ul>
                <li><strong>1-1/4 cup Muntons Extra Light DME</strong><br />
                <small>that has been boiled for 10 minute in 2 cups of water</small></li>
            </ul>
            <p>Let prime at 70 degrees F for approximately 3 weeks until carbonated, then store at cellar temperature</p>
        </div>
    )
}

export default Recipe
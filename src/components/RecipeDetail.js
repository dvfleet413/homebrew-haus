import React from 'react';

const Recipe = (props) => {
    return(
        <div className="beer-card">
            <h1>{props.recipe.name}</h1>
            <p>Heat 1 gallon of water to 160 degrees F. Add:</p>
            <ul>
                {props.recipe.grains.map(grain => <li key={`${grain.id}-grain`}>{grain.weight} oz {grain.name}</li>)}
            </ul>
            <p>Remove from heat and steep at 150 degrees F for 30 minutes. Strain the grain water into the brew pot. Sparge the grains with 1 gallon of 150 degree F water. Bring the water to a boil, remove from heat, and add:</p>
            <ul>
                {props.recipe.malts.map(malt => <li key={`${malt.id}-malt`}>{malt.weight} lb {malt.name}</li>)}
                {props.recipe.hops.filter(hop => hop.hop_type === "bittering").map(hop => <li key={`${hop.id}-hop`}>{hop.weight} oz {hop.name} (bittering hop)</li>)}
            </ul>
            <p>Add water until the total volume in the brew pot is 2.5 gallons. Boil for 45 minutes, then add:</p>
            <ul>
                {props.recipe.hops.filter(hop => hop.hop_type === "flavor").map(hop => <li key={`${hop.id}-hop`}>{hop.weight} oz {hop.name} (flavor hop)</li>)}
                <li>1 tsp Irish Moss</li>
            </ul>
            <p>Boil for 12 minutes then add:</p>
            <ul>
                {props.recipe.hops.filter(hop => hop.hop_type === "aroma").map(hop => <li key={`${hop.id}-hop`}>{hop.weight} oz {hop.name} (aroma hop)</li>)}
            </ul>
            <p>Boil for 3 minutes.  Remove from heat and chill the wort for 20 minutes.  Strain the cooled wort into the primary fermenter and add cold water to obtain 5-1/8 gallons. When the wort temperature is below 70 degree F pitch the yeast.</p>
            <p>Ferment in the primary fermenter for 7 days or until fermentation slows, then siphon into the secondary fermenter {props.recipe.hops.some(hop => hop.hop_type === "dry") ? 'then add:' : '.'}</p>
            <ul>
                {props.recipe.hops.filter(hop => hop.hop_type === "dry").map(hop => <li key={`${hop.id}-hop`}>{hop.weight} oz {hop.name} (dry hop)</li>)}
            </ul>
            <p>Bottle when fermentation is complete, target gravity is reached, and beer has cleared (approximately 3 weeks) with:</p>
            <ul>
                <li>1-1/4 cup Muntons Extra Light DME<br />
                <small>that has been boiled for 10 minute in 2 cups of water</small></li>
            </ul>
            <p>Let prime at 70 degrees F for approximately 3 weeks until carbonated, then store at cellar temperature</p>
        </div>
    )
}

export default Recipe
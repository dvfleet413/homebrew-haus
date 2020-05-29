import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    return(
        <div className="beer-card">
            <h1>{props.recipe.name}</h1>
            <h2>Grains</h2>
            <ul>
                {props.recipe.grains.map(grain => <li key={`${grain.id}-grain`}>{grain.name} - {grain.weight} oz</li>)}
            </ul>
            <h2>Malts</h2>
            <ul>
                {props.recipe.malts.map(malt => <li key={`${malt.id}-malt`}>{malt.name} - {malt.weight} lb</li>)}
            </ul>
            <h2>Hops</h2>
            <ul>
                {props.recipe.hops.map(hop => <li key={`${hop.id}-hop`}>{hop.name} ({hop.hop_type} hop) - {hop.weight} oz</li>)}
            </ul>
            <Link to={`/recipes/${props.recipe.id}`}>View Recipe</Link>
        </div>
    )
}

export default Recipe
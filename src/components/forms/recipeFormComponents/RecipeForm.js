import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { addRecipe } from '../../../actions/addRecipe';
import uuid from 'uuid';
import GrainForm from './GrainForm';
import MaltForm from './MaltForm';
import HopForm from './HopForm';
import HopCard from './HopCard';
import GrainCard from './GrainCard';
import YeastForm from './YeastForm'
import MaltCard from './MaltCard';
import YeastCard from './YeastCard';

class RecipeForm extends Component {
    state = {
        name: '',
        category: '',
        summary: '',
        grainIngredientsAttributes: [],
        maltIngredientsAttributes: [],
        hopIngredientsAttributes: [],
        yeastIngredientAttributes: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRecipe(this.state, this.props.history)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addGrain = (event, grain) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            grainIngredientsAttributes: [...this.state.grainIngredientsAttributes, {...grain, uuid: uuid()}]
        })
    }

    removeGrain = (event, id) => {
        event.preventDefault()
        this.setState(prevState => {
            return{
                ...this.setState,
                // eslint-disable-next-line
                grainsAttributes: prevState.grainsAttributes.filter(grain => grain.uuid != id)
            }
        })
    }

    addMalt = (event, malt) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            maltIngredientsAttributes: [...this.state.maltIngredientsAttributes, {...malt, uuid: uuid()}]
        })
    }

    removeMalt = (event, id) => {
        event.preventDefault()
        this.setState(prevState => {
            return{
                ...this.setState,
                // eslint-disable-next-line
                maltsAttributes: prevState.maltsAttributes.filter(malt => malt.uuid != id)
            }
        })
    }

    addHop = (event, hop) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            hopIngredientsAttributes: [...this.state.hopIngredientsAttributes, {...hop, uuid: uuid()}]
        })
    }

    removeHop = (event, id) => {
        event.preventDefault()
        this.setState(prevState => {
            return{
                ...this.setState,
                // eslint-disable-next-line
                hopsAttributes: prevState.hopsAttributes.filter(hop => hop.uuid != id)
            }
        })
    }

    addYeast = (event, yeast) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            yeastIngredientAttributes: {...yeast, uuid: uuid()}
        })
    }

    removeYeast = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            yeastAttributes: {}
        })
    }

    render(){
        const grains = this.state.grainIngredientsAttributes.map(grain => <GrainCard key={grain.uuid} 
                                                                           grain={grain} 
                                                                           removeGrain={this.removeGrain} />)
        const malts = this.state.maltIngredientsAttributes.map(malt => <MaltCard key={malt.uuid} 
                                                                       malt={malt} 
                                                                       removeMalt={this.removeMalt} />)
        const hops = this.state.hopIngredientsAttributes.map(hop => <HopCard key={hop.uuid} 
                                                                   hop={hop} 
                                                                   removeHop={this.removeHop} />)
        const yeast = <YeastCard key={this.state.yeastIngredientAttributes.uuid} 
                                 yeast={this.state.yeastIngredientAttributes} 
                                 removeYeast={this.removeYeast} />

        return(
            <div className="beer-form-container">
                <h1>Add New Recipe</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Recipe Info:</h3>
                    <div className="new-recipe-info">
                        <div className="new-ingredient-inputs">
                            <div className="input"><span>Name: </span><input name="name" type="text" onChange={this.handleChange} value={this.state.name} /></div>
                            <div className="input"><span>Category: </span><input name="category" type="text" onChange={this.handleChange} value={this.state.category} /></div>
                            <div className="input"><span>Summary: </span><textarea name="summary" onChange={this.handleChange} value={this.state.summary} /></div>
                        </div>
                    </div>
                    <br />
                    <h3>Grains:</h3>
                    <div className="current-ingredient-container">
                        {grains}
                    </div>
                    <GrainForm addGrain={this.addGrain} />
                    <br />
                    <h3>Malts:</h3>
                    <div className="current-ingredient-container">
                        {malts}
                    </div>
                    <MaltForm addMalt = {this.addMalt} />
                    <br />
                    <h3>Hops:</h3>
                    <div className="current-ingredient-container">
                        {hops}
                    </div>
                    <HopForm addHop = {this.addHop} />
                    <br />
                    <h3>Yeast: </h3>
                    {Object.keys(this.state.yeastIngredientAttributes).length === 0 ? <YeastForm addYeast={this.addYeast} /> : <div className="current-ingredient-container">{yeast}</div>}
                    <br />
                    <input type="submit" value="Add Recipe" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        grains: state.grains,
        hops: state.hops,
        malts: state.malts,
        yeasts: state.yeasts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe, history) => dispatch(addRecipe(recipe, history))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeForm));
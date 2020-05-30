export function addRecipe(recipe){
    return (dispatch) => {
        //TODO: add fetch POST request to backend to add new recipe to db
        dispatch({type: 'POSTING_NEW_RECIPE'})
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({recipe})
        }
        
        fetch(`http://localhost:8080/recipes`, configObj)
            .then(function(response){
            return response.json()
            })
            .then(function(json){
                console.log("success!")
                console.log(json)
            })
            .catch(function(error){
            console.log(error.message)
            }) 
        console.log(recipe)
        dispatch({type: 'ADD_RECIPE', recipe: recipe})
    }
}
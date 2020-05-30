const recipe = {
    name: "Goose Island Honker's Ale", 
    category: "English Bitter", 
    summary: "Medium bodied beer with off white head.  Pleasing blend of Cascade hops and spicy fruit which leads to a well-rounded smooth body of malt and hops.", 
    grainsAttributes:[
        {name: "US 40 L Crystal Malt", weight: "8"},
        {name: "Belgian Cara-Munich Malt", weight: "8"},
        {name: "German Munich Malt", weight: "8"}
    ], 
    maltsAttributes: [
        {name: "Muntons Light DME", weight: "5.75"}
    ],
    hopsAttributes: [
        {name: "Northern Brewer @ 8.5% AA", hopType: "bittering", weight: "1"},
        {name: "Cascade", hopType: "flavor", weight: "0.5"},
        {name: "Willamette", hopType: "flavor", weight: "0.5"},
        {name: "Cascade", hopType: "aroma", weight: "1"}
    ],
    yeastAttributes: {
        name: "Wyeast 1968 London ESB"
    }
}

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
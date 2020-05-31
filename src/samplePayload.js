//POST new recipe

const recipe = {
    name: "Sierra Nevada Porter", 
    category: "Porter", 
    summary: "Medium to full-bodied porter with attractive chestnut body with red highlights and creamy tan head.  Enticing medley of malt, roasted grains, chocolate, coffee, and floral hops. Malty with accents of nutty and roasted grains, chocolate, and packed with hops.", 
    grainsAttributes:[
        {name: "US 80 L Crystal Malt", weight: "10"},
        {name: "US Chocolate Malt", weight: "10"},
        {name: "US Black Malt", weight: "4"}
    ], 
    maltsAttributes: [
        {name: "Alexanders Pale Malt Extract Syrup", weight: "4"},
        {name: "Muntons Extra Light DME", weight: "3.5"},
        {name: "Malto Dextrin", weight: "0.5"}
    ],
    hopsAttributes: [
        {name: "Nugget @ 12% AA", hopType: "bittering", weight: "0.5"},
        {name: "Centennial @ 10% AA", hopType: "bittering", weight: "0.5"},
        {name: "Cascade", hopType: "flavor", weight: "0.25"}
    ],
    yeastAttributes: {
        name: "Wyeast 1056 American Ale"
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

// get_current_user

fetch("http://localhost:8080/get_current_user", {
    headers: {
        "Auth": "eyJhbGciOiJIUzI1NiJ9.IntcInVzZXJuYW1lXCI9PlwiRGF2ZVwiLCBcInBhc3N3b3JkXCI9PlwicGFzc3dvcmRcIiwgXCJjb250cm9sbGVyXCI9Plwic2Vzc2lvbnNcIiwgXCJhY3Rpb25cIj0-XCJjcmVhdGVcIiwgXCJzZXNzaW9uXCI9PntcInVzZXJuYW1lXCI9PlwiRGF2ZVwiLCBcInBhc3N3b3JkXCI9PlwicGFzc3dvcmRcIn19Ig.PX8n_eJx5zm1tK1F14nHFFjuNfc0hiR3fK8BBJzxl6c"
        }
    })
    .then(respons => {
        return response.json()
    })
    .then(json => {
        console.log(json)
    })

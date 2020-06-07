export function grainReducer(state=[], action){
    switch(action.type){
        case 'GET_GRAINS':
            return action.grains
        default:
            return state
    }
}

export function hopReducer(state=[], action){
    switch(action.type){
        case 'GET_HOPS':
            return action.hops
        default:
            return state
    }
}

export function maltReducer(state=[], action){
    switch(action.type){
        case 'GET_MALTS':
            return action.malts
        default:
            return state
    }
}

export function yeastReducer(state=[], action){
    switch(action.type){
        case 'GET_YEASTS':
            return action.yeasts
        default:
            return state
    }
}
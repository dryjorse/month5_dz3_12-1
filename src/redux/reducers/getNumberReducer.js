import { types } from "../types"


const initialState = {
    number: 0,
    results: [],
}

export const getNumberReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_NUMBER:
            return {...state, number: action.payload}
        case types.GET_RESULTS_LIST:
            return {...state, results: [...state.results, 
                state.results.length ? +state.results.slice(-1) + +action.payload
                : +action.payload
            ]}
        case types.CLEAR_LIST:
            return {...state, results: []}
        default:
            return state
    }
}
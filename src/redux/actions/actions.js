import { types } from "../types";

export const getNumberAction = (number) => {
    return {
        type: types.GET_NUMBER,
        payload: number
    }
}

export const getResultsListAction = (number) => {
    return {
        type: types.GET_RESULTS_LIST,
        payload: number
    }
}
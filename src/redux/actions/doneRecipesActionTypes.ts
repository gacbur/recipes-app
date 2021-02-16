export const ADD_TO_DONE = "ADD_TO_DONE"
export const REMOVE_FROM_DONE = "REMOVE_FROM_DONE"

export type recipe = {
    id: number,
    title: string,
    image: string
}

export interface AddToDone {
    type: typeof ADD_TO_DONE,
    payload: recipe
}

export interface RemoveFromDone {
    type: typeof REMOVE_FROM_DONE,
    payload: {
        id: number
    }
}

export type DoneRecipesDispatchTypes = AddToDone | RemoveFromDone
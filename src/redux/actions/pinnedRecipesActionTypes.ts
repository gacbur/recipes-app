export const ADD_TO_PINNED = "ADD_TO_PINNED"
export const REMOVE_FROM_PINNED = "REMOVE_FROM_PINNED"

export type recipe = {
    id: number,
    title: string,
    image: string
}

export interface AddToPinned {
    type: typeof ADD_TO_PINNED,
    payload: recipe
}

export interface RemoveFromPinned {
    type: typeof REMOVE_FROM_PINNED,
    payload: {
        id: number
    }
}

export type PinnedRecipesDispatchTypes = AddToPinned | RemoveFromPinned
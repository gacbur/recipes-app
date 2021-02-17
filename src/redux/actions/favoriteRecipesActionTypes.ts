export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

export type recipe = {
    id: number,
    title: string,
    image: string
}

export interface AddToFavorites {
    type: typeof ADD_TO_FAVORITES,
    payload: recipe
}

export interface RemoveFromFavorites {
    type: typeof REMOVE_FROM_FAVORITES,
    payload: {
        id: number
    }
}

export type FavoriteRecipesDispatchTypes = AddToFavorites | RemoveFromFavorites

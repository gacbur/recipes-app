export const RECIPES_LOADED = "RECIPES_LOADED"
export const RECIPES_NOT_LOADED = "RECIPES_NOT_LOADED"
export const GET_RECIPES = "GET_RECIPES"

export type Recipe = {
    id: number,
    image: string,
    imageType: string,
    title: string
}

export type LoadedRecipes = {
    recipes_loaded: boolean
}

export interface RecipesNotLoaded {
    type: typeof RECIPES_NOT_LOADED
}

export interface RecipesLoaded {
    type: typeof RECIPES_LOADED
}

export interface GetRecipes {
    type: typeof GET_RECIPES,
    payload: {
        recipes: Recipe[]
    }
}

export type RecipesDispatchTypes = RecipesLoaded | RecipesNotLoaded | GetRecipes 
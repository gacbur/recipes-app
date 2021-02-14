export const GET_SIMILIAR_RECIPES = "GET_SIMILIAR_RECIPES"
export const SIMILIAR_RECIPES_LOADED = "SIMILIAR_RECIPES_LOADED"
export const SIMILIAR_RECIPES_FAIL = "SIMILIAR_RECIPES_FAIL"

export type similiarRecipe = {
    id: string,
    title: string,
}

export interface GetSimiliarRecipes {
    type: typeof GET_SIMILIAR_RECIPES,
    payload: {
        similiar_recipes: similiarRecipe[]
    }
}

export interface SimiliarRecipesLoaded {
    type: typeof SIMILIAR_RECIPES_LOADED
}

export interface SimiliarRecipesFail {
    type: typeof SIMILIAR_RECIPES_FAIL
}


export type SimiliarRecipesDispatchTypes = GetSimiliarRecipes | SimiliarRecipesFail | SimiliarRecipesLoaded